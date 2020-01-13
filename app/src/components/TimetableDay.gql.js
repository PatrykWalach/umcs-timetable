import gql from 'graphql-tag'

export const TimetableDayQuery = gql`
  query TimetableDayQuery(
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
      room
      group
      subject
      weekday
      startTime
      endTime
      type
    }
  }
`
export const TimetableDay_activities = gql`
  fragment TimetableDay_activities on Activity {
    subject
    startTime
    endTime
  }
`
