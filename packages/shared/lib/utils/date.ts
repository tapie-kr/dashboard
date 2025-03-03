import { Temporal } from '@js-temporal/polyfill';

export const getPaddingZero = (num: number): string => {
  return String(num).padStart(2, '0');
};

export function toTemporalDateTime(isoString: string) {
  return Temporal.Instant.from(isoString).toZonedDateTimeISO('UTC')
    .toPlainDateTime();
}

export function toTemporalDate(isoString: string) {
  return Temporal.Instant.from(isoString).toZonedDateTimeISO('UTC')
    .toPlainDate();
}

export const getDatetimeString = (date: string, containYear: boolean) => {
  const dateObject = toTemporalDateTime(date);

  if (containYear) {
    return `${dateObject.year}-${getPaddingZero(dateObject.month)}-${getPaddingZero(dateObject.day)} ${getPaddingZero(dateObject.hour)}:${getPaddingZero(dateObject.minute)}`;
  } else {
    return `${getPaddingZero(dateObject.month)}월 ${getPaddingZero(dateObject.day)}일 ${getPaddingZero(dateObject.hour)}:${getPaddingZero(dateObject.minute)}`;
  }
};

export const getDateString = (date: string, containYear: boolean) => {
  const dateObject = toTemporalDate(date);

  if (containYear) {
    return `${dateObject.year}-${getPaddingZero(dateObject.month)}-${getPaddingZero(dateObject.day)}`;
  } else {
    return `${getPaddingZero(dateObject.month)}월 ${getPaddingZero(dateObject.day)}일`;
  }
};

export const formatDatetimeToISO = (date?: Temporal.PlainDateTime) => {
  if (!date) return '';

  return date
    .toZonedDateTime('UTC')
    .toInstant()
    .toString();
};

export const formatDateToISO = (date?: Temporal.PlainDate) => {
  if (!date) return '';

  return date
    .toZonedDateTime('UTC')
    .toInstant()
    .toString();
};
