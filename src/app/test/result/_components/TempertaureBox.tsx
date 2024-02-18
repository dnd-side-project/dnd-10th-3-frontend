import { ProgressBar } from '@/components/common/progressBar';
import { QUESTIONS_LENGTH_PER_TOPIC } from '@/constants/test/progress';
import { Typography } from '@/foundations/typography';
type Props = {
  buddy: string;
  trust: number;
  love: number;
  talk: number;
  temperature: number;
};

const TempertaureBox = ({ buddy, trust, love, talk, temperature }: Props) => {
  return (
    <article className="my-4xs flex w-full flex-col justify-center rounded-xl px-2xs">
      <div className="w-full rounded-t-xl  bg-primary-200 px-3xs  py-5xs text-center">
        <Typography type="title2">
          당신과 {buddy}의 온도는{' '}
          <span className="text-primary-800">{Math.floor((temperature / 10) * 100)}&#8451;</span>
        </Typography>
      </div>
      <div className="flex w-full flex-col gap-3xs rounded-b-xl border border-gray-100  p-3xs text-center">
        <div className="flex items-center gap-5xs">
          <div className="flex">
            <Typography type="body2" className="text-gray-700">
              믿음 지수
            </Typography>
          </div>
          <div className="flex-1">
            <ProgressBar
              progress={Math.floor((trust / QUESTIONS_LENGTH_PER_TOPIC) * 100)}
              className="h-[8px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-5xs">
          <div className="flex">
            <Typography type="body2" className="text-gray-700">
              하트 지수
            </Typography>
          </div>
          <div className="flex-1">
            <ProgressBar
              progress={Math.floor((love / QUESTIONS_LENGTH_PER_TOPIC) * 100)}
              className="h-[8px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-5xs">
          <div className="flex">
            <Typography type="body2" className="text-gray-700">
              소통 지수
            </Typography>
          </div>
          <div className="flex-1">
            <ProgressBar
              progress={Math.floor((talk / QUESTIONS_LENGTH_PER_TOPIC) * 100)}
              className="h-[8px]"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TempertaureBox;
