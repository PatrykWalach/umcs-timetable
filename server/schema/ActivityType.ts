import { GraphQLEnumType } from 'graphql'
import { ActivityType as Type } from '../../__generated__/globalTypes'

export enum Typename {
  konwersatorium = Type.DISCUSSION_SESSION,
  fakultet = Type.ELECTIVE,
  seminarium = Type.SEMINAR,
  wykład = Type.LECTURE,
  laboratorium = Type.LABORATORY,
  praktyki = Type.PRACTICES,
}

export const ActivityType = new GraphQLEnumType({
  name: 'ActivityType',
  values: {
    DISCUSSION_SESSION: { value: 'DISCUSSION_SESSION' },
    ELECTIVE: { value: 'ELECTIVE' },
    SEMINAR: { value: 'SEMINAR' },
    LECTURE: { value: 'LECTURE' },
    LABORATORY: { value: 'LABORATORY' },
    PRACTICES: { value: 'PRACTICES' },
  },
})
