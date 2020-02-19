/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ActivityWeekday as Weekday } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_parlour {
  readonly __typename: "Activity";
  readonly subject: string | null;
  readonly startTime: number | null;
  readonly endTime: number | null;
  readonly weekday: Weekday | null;
}

export interface HomeQuery_lab {
  readonly __typename: "Activity";
  readonly subject: string | null;
  readonly startTime: number | null;
  readonly endTime: number | null;
  readonly weekday: Weekday | null;
}

export interface HomeQuery_other {
  readonly __typename: "Activity";
  readonly subject: string | null;
  readonly startTime: number | null;
  readonly endTime: number | null;
  readonly weekday: Weekday | null;
}

export interface HomeQuery {
  readonly parlour: ReadonlyArray<HomeQuery_parlour>;
  readonly lab: ReadonlyArray<HomeQuery_lab>;
  readonly other: ReadonlyArray<HomeQuery_other>;
}

export interface HomeQueryVariables {
  readonly studentsId: number;
  readonly lab?: ReadonlyArray<number> | null;
  readonly parlour?: ReadonlyArray<number> | null;
  readonly weekday?: ReadonlyArray<Weekday> | null;
}
