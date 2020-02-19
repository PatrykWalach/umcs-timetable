import { useElement, useNewPage, usePageFilters, usePage } from '../pupeteer'
import { Activity } from './Activity'
import { ActivitiesArguments } from '../schema/Activities'

const newPage = useNewPage()

export const resolveActivities = async (
  _: any,
  { studentsId, weekday, type, ...rawFilters }: Partial<ActivitiesArguments>,
) => {
  const page = await usePage(
    await newPage,
    `http://moria.umcs.lublin.pl/students/${studentsId}`,
  )

  const elements = await useElement(page, usePageFilters(weekday, type))

  const activities = elements.map(el => new Activity(el))

  const filters: [string, any[]][] = Object.entries(
    rawFilters,
  ).map(([key, filter]) => [key, filter instanceof Array ? filter : [filter]])

  const data = await filters.reduce(
    async (acc, [key, filter]: [string, any[]]) => {
      const activities = await acc

      return await Promise.all(
        activities.map(activity => (activity as any)[key]()),
      ).then(results =>
        activities.filter((activity, i) => filter.includes(results[i])),
      )
    },
    Promise.resolve(activities),
  )
  // browser.close()

  return data
}
