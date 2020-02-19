import { Page, ElementHandle } from 'puppeteer'
import { ActivityWeekday, ActivityType } from '../__generated__/globalTypes'
import { getWeekdayText } from './schema/ActivityWeekday'
import { getTypename } from './schema/ActivityType'
import puppeteer from 'puppeteer'

export const useElement = async (
  page: Page | ElementHandle<any>,
  selector: string,
) => {
  const elements = await page.$$(selector)
  return elements
}

export const useProperty = async (
  element: ElementHandle<any>,
  property: string,
) => {
  if (!element) {
    return null
  }
  const attr = await element.getProperty(property)
  const raw = await attr.jsonValue()
  if (typeof raw === 'string') {
    return raw.trim()
  }
  return raw
}

export const useTextContent = (element: ElementHandle<any>) =>
  useProperty(element, 'textContent') as Promise<string>

export const useNewPage = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  return page
}

export const usePage = async (page: Page, url: string) => {
  await page.goto(url)

  return page
}

const usePageFilter = (filters: string[], name: string) =>
  `:-webkit-any(${filters.map(filter => `[${name}="${filter}"]`).join(', ')})`

export const usePageFilters = (
  weekday: ActivityWeekday[] | null | undefined,
  type: ActivityType[] | null | undefined,
) => {
  const weekdayFilter = weekday
    ? usePageFilter(weekday.map(getWeekdayText), 'data-weekdaytext')
    : ''
  const typeFilter = type
    ? usePageFilter(type.map(getTypename), 'data-typename')
    : ''

  const query = '.activity_block' + weekdayFilter + typeFilter

  return query
}
