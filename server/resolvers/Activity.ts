import { useElement, useTextContent } from '../pupeteer'
import { getType } from '../schema/ActivityType'
import { getWeekday } from '../schema/ActivityWeekday'
import { ElementHandle } from 'puppeteer'

export class Activity {
  el: ElementHandle<any>

  constructor(el: ElementHandle<any>) {
    this.el = el
  }

  async group() {
    const [groupElement] = await useElement(this.el, '.activity_group')
    const group = await useTextContent(groupElement)
    return group && parseInt(group)
  }
  async room() {
    const [room] = await useElement(this.el, '.room')
    return await useTextContent(room)
  }
  async subject() {
    const [subject] = await useElement(this.el, '.subject')

    return await useTextContent(subject)
  }
  async teachers() {
    const teachers = await useElement(
      this.el,
      '.itemlist > ul > li > a[href^="/teacher/"]:not([href$="/0"])',
    )

    return await Promise.all(teachers.map(useTextContent))
  }
  async students() {
    const students = await useElement(
      this.el,
      '.itemlist > ul > li > a[href^="/students/"]',
    )

    return await Promise.all(students.map(useTextContent))
  }
  async weekday() {
    const weekday = await this.el.evaluate(node => node.dataset.weekdaytext)
    return getWeekday(weekday)
  }
  async startTime() {
    const time = await this.el.evaluate(node => node.dataset.starttime)
    return getTime(time)
  }
  async endTime() {
    const time = await this.el.evaluate(node => node.dataset.endtime)
    return getTime(time)
  }
  async type() {
    const type = await this.el.evaluate(node => node.dataset.typename)
    return getType(type)
  }
}

const getTime = (time: string) => {
  const [hours, minutes] = time.split(':')
  return parseInt(hours) * 60 + parseInt(minutes)
}
