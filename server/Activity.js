import { useElement } from './useElement.js'
import { useProperty } from './useProperty.js'

export class Activity {
  constructor(el) {
    this.el = el
  }
  async group() {
    const [groupElement] = await useElement(this.el, '.activity_group')
    const group = await useProperty(groupElement, 'textContent')
    return group && parseInt(group)
  }
  async room() {
    const [room] = await useElement(this.el, '.room')
    return await useProperty(room, 'textContent')
  }
  async subject() {
    const [subject] = await useElement(this.el, '.subject')

    return await useProperty(subject, 'textContent')
  }
  async teachers() {
    const teachers = await useElement(
      this.el,
      '.itemlist > ul > li > a[href^="/teacher/"]:not([href$="/0"])',
    )

    return await Promise.all(
      teachers.map(teacher => useProperty(teacher, 'textContent')),
    )
  }
  async students() {
    const students = await useElement(
      this.el,
      '.itemlist > ul > li > a[href^="/students/"]',
    )

    return await Promise.all(
      students.map(teacher => useProperty(teacher, 'textContent')),
    )
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

const getTime = time => {
  const [hours, minutes] = time.split(':')
  return parseInt(hours) * 60 + parseInt(minutes)
}

const getType = typename => {
  switch (typename) {
    case 'konwersatorium':
      return 'PARLOUR'
    case 'seminarium':
      return 'SEMINAR'
    case 'wykład':
      return 'LECTURE'
    case 'laboratorium':
      return 'LAB'
    case 'praktyki':
      return 'PRACTICES'

    default:
      return null
  }
}

const getWeekday = weekdayText => {
  switch (weekdayText) {
    case 'poniedziałek':
      return 'MONDAY'
    case 'wtorek':
      return 'TUESDAY'
    case 'środa':
      return 'WEDNESDAY'
    case 'czwartek':
      return 'THURSDAY'
    case 'piątek':
      return 'FRIDAY'
    default:
      return null
  }
}
