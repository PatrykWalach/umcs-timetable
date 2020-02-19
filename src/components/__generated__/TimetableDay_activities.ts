/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ActivityWeekday as Weekday } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: TimetableDay_activities
// ====================================================

export interface TimetableDay_activities {
  readonly __typename: "Activity";
  readonly subject: string | null;
  readonly startTime: number | null;
  readonly endTime: number | null;
  readonly weekday: Weekday | null;
}
