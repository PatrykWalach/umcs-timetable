import { GraphQLEnumType } from 'graphql'
import { ActivityType as Type } from '../../__generated__/globalTypes'

enum Typename {
  konwersatorium = 'konwersatorium',
  fakultet = 'fakultet',
  seminarium = 'seminarium',
  wykład = 'wykład',
  laboratorium = 'laboratorium',
  praktyki = 'praktyki',
}

export const ActivityType = new GraphQLEnumType({
  name: 'ActivityType',
  values: {
    [Type.DISCUSSION_SESSION]: { value: 'DISCUSSION_SESSION' },
    [Type.ELECTIVE]: { value: 'ELECTIVE' },
    [Type.SEMINAR]: { value: 'SEMINAR' },
    [Type.LECTURE]: { value: 'LECTURE' },
    [Type.LABORATORY]: { value: 'LABORATORY' },
    [Type.PRACTICES]: { value: 'PRACTICES' },
  },
})

const TypenameMap = {
  [Type.DISCUSSION_SESSION]: Typename.konwersatorium,
  [Type.ELECTIVE]: Typename.fakultet,
  [Type.SEMINAR]: Typename.seminarium,
  [Type.LECTURE]: Typename.wykład,
  [Type.LABORATORY]: Typename.laboratorium,
  [Type.PRACTICES]: Typename.praktyki,
}
const TypeMap = {
  [Typename.konwersatorium]: Type.DISCUSSION_SESSION,
  [Typename.fakultet]: Type.ELECTIVE,
  [Typename.seminarium]: Type.SEMINAR,
  [Typename.wykład]: Type.LECTURE,
  [Typename.laboratorium]: Type.LABORATORY,
  [Typename.praktyki]: Type.PRACTICES,
}
export const getType = (typename: Typename) => TypeMap[typename] || null

export const getTypename = (type: Type) => TypenameMap[type] || null
