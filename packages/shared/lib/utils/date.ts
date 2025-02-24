import { Temporal } from '@js-temporal/polyfill';

export const getPaddingZero = (num: number): string => {
  return String(num).padStart(2, '0');
};

export function toTemporalDateTime(isoString: string) {
  const timeZone = Temporal.TimeZone.from('Asia/Seoul');
  const isoStringStr = String(isoString);
  const instant = Temporal.Instant.from(isoStringStr.endsWith('Z') ? isoStringStr : isoStringStr + 'Z');

  return instant.toZonedDateTimeISO(timeZone).toPlainDateTime();
}

export function toTemporalDate(isoString: string) {
  const timeZone = Temporal.TimeZone.from('Asia/Seoul');
  const instant = Temporal.Instant.from(isoString);

  return instant.toZonedDateTimeISO(timeZone).toPlainDate();
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
