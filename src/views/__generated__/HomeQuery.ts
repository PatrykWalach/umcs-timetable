/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Type, Weekday } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_activities {
  readonly __typename: "Activity";
  readonly subject: string | null;
  readonly startTime: number | null;
  readonly endTime: number | null;
  readonly weekday: Weekday | null;
}

export interface HomeQuery {
  readonly activities: ReadonlyArray<HomeQuery_activities>;
}

export interface HomeQueryVariables {
  readonly studentsId: number;
  readonly type?: ReadonlyArray<Type> | null;
  readonly group?: ReadonlyArray<number> | null;
  readonly weekday?: ReadonlyArray<Weekday> | null;
}
