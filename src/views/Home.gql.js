import gql from 'graphql-tag'
import { TimetableDay_activities } from '../components/TimetableDay.gql.js'

export const HomeQuery = gql`
  query HomeQuery(
    $studentsId: Int!
    $type: [Type!]
    $group: [Int!]
    $weekday: [Weekday!]
  ) {
    activities(
      studentsId: $studentsId
      weekday: $weekday
      type: $type
      group: $group
    ) {
      ...TimetableDay_activities
    }
  }
  ${TimetableDay_activities}
`
