import { type Temporal } from '@js-temporal/polyfill';

export const getPaddingZero = (num: number): string => {
  return String(num).padStart(2, '0');
};

export const getDatetimeString = (date: Temporal.PlainDateTime, containYear: boolean) => {
  if (containYear) {
    return `${date.year}-${getPaddingZero(date.month)}-${getPaddingZero(date.day)} ${getPaddingZero(date.hour)}:${getPaddingZero(date.minute)}`;
  } else {
    return `${getPaddingZero(date.month)}월 ${getPaddingZero(date.day)}일 ${getPaddingZero(date.hour)}:${getPaddingZero(date.minute)}`;
  }
};

export const getDateString = (date: Temporal.PlainDate, containYear: boolean) => {
  if (containYear) {
    return `${date.year}-${getPaddingZero(date.month)}-${getPaddingZero(date.day)}`;
  } else {
    return `${getPaddingZero(date.month)}월 ${getPaddingZero(date.day)}일`;
  }
};
