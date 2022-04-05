/**
 * The parameters of a common function member of an intersection type are
 * mathematically intersected.
 */
/* eslint-disable @typescript-eslint/naming-convention */

type A = {
  doIt: (a: string) => void;
};
type B = {
  doIt: (a: string, b: string) => void;
};
type A_and_B = A & B;

const ab_v1: A_and_B = {
  doIt: (a: string) => {},
};
