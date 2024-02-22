import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export type GetDifferenceTimeType = {
  day: number;
  hour: number;
};

const getTimeDifference = (to: string): GetDifferenceTimeType => {
  const dueDate = dayjs(to);
  const now = dayjs();

  const result = {
    day: dueDate.diff(now, 'day'),
    hour: dueDate.diff(now, 'hour'),
  };
  return result;
};

export { getTimeDifference };
