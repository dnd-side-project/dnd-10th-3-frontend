import LoadingSVGWorry from '@/assets/images/charater.svg';
import { ProgressBar } from '@/components/common/progressBar';
import { Typography } from '@/components/common/typography';
import { Range } from '@/types/util';

type Props = {
  progress?: Range<0, 101>;
  duration: number;
};

const LoadingPage = ({ progress = 100, duration }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-xl">
      <Typography type="heading1">계산하는 중...</Typography>
      <LoadingSVGWorry />
      <ProgressBar progress={progress} duration={duration} />
    </div>
  );
};

export default LoadingPage;
