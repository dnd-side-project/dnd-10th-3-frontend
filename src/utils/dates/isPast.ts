import dayjs from 'dayjs';

export const isPast = (date: string | number | Date | dayjs.Dayjs | null | undefined) => {
  return dayjs().isAfter(date);
};
