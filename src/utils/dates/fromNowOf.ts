import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.locale('ko');
dayjs.updateLocale('ko', {
  relativeTime: {
    future: '%s 남음',
    past: '%s 지남',
    s: '몇 초',
    m: '1분',
    mm: '%d분',
    h: '1시간',
    hh: '%d시간',
    d: '1일',
    dd: '%d일',
    M: '1개월',
    MM: '%d개월',
    y: '1년',
    yy: '%d년',
  },
});

export const fromNowOf = (date: string | number | Date | dayjs.Dayjs | null | undefined) => {
  return dayjs(date).fromNow();
};
