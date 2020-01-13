const useElement = require('./useElement.js')
const useProperty = require('./useProperty.js')

module.exports = class Activity {
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
  async teacher(){
    const [teacher] = await useElement(this.el, '.itemlist > ul > li > a')
  
    return await useProperty(teacher, 'textContent')
    
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

const getType = type => {
  switch (type) {
    case 'seminarium':
      return 'SEMINAR'
    case 'wykład':
      return 'LECTURE'
    case 'laboratorium':
      return 'LAB'

    default:
      return null
  }
}

const getWeekday = type => {
  switch (type) {
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
