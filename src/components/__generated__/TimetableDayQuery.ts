/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Type, Weekday } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: TimetableDayQuery
// ====================================================

export interface TimetableDayQuery_activities {
  readonly __typename: "Activity";
  readonly room: string | null;
  readonly group: number | null;
  readonly subject: string | null;
  readonly weekday: Weekday | null;
  readonly startTime: number | null;
  readonly endTime: number | null;
  readonly type: Type | null;
}

export interface TimetableDayQuery {
  readonly activities: ReadonlyArray<TimetableDayQuery_activities>;
}

export interface TimetableDayQueryVariables {
  readonly studentsId: number;
  readonly type?: ReadonlyArray<Type> | null;
  readonly group?: ReadonlyArray<number> | null;
  readonly weekday?: ReadonlyArray<Weekday> | null;
}
