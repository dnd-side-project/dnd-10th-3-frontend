import { Button } from '@/components/common/button';
import { Divider } from '@/components/common/divider';

// TODO 로직 넣으면서 코드 정리
const VoteDateForm = () => {
  return (
    <section>
      <Button icon="clock" iconSize={18} variant="empty" width="full" className="px-0">
        <div className="flex grow items-center justify-between font-normal">
          <span className="text-sm text-gray-600">시작일</span>
          <span className="text-sm text-gray-700">{`2024.02.05.월요일`}</span>
        </div>
      </Button>
      <Divider height={1} />
      <Button icon="clock" iconSize={18} variant="empty" width="full" className="px-0">
        <div className="flex grow items-center justify-between font-normal">
          <span className="text-sm text-gray-600">종료일</span>
          <span className="text-sm text-gray-700">{`2024.02.05.월요일`}</span>
        </div>
      </Button>
    </section>
  );
};

export default VoteDateForm;
