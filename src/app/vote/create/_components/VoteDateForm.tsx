import dayjs from 'dayjs';

import { Button } from '@/components/common/button';
import { Range } from '@/types/util';
import { convertNumToDay } from '@/utils/dates';

const DEFAULT_PERIOD = 7;

const VoteDateForm = () => {
  const today = dayjs();
  const [dueYear, dueMonth, dueDate, dueDay] = today
    .add(DEFAULT_PERIOD, 'day')
    .format('YYYY-MM-DD-d')
    .split('-');

  return (
    <section>
      <Button icon="clock" iconSize={18} variant="empty" width="full" className="px-0">
        <div className="flex grow items-center justify-between font-normal">
          {/* FIXME: 모달 디자인 나오면 날짜 선택 기능 추가하기 (현재는 기본 7일, 변경 불가)  */}
          <span className="text-sm text-gray-300">종료일</span>
          <span className="text-sm text-gray-300">{`${dueYear}. ${dueMonth}. ${dueDate}. ${convertNumToDay(+dueDay as Range<0, 6>)}`}</span>
        </div>
      </Button>
    </section>
  );
};

export default VoteDateForm;
