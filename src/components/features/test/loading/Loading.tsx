import Image from 'next/image';

import ErrorWorry from '@/assets/images/error-worry.png';
import { ProgressBar } from '@/components/common/progressBar';
import { Typography } from '@/foundations/typography';
import { Range } from '@/types/util';

type Props = {
  progress: Range<0, 101>;
};

const Loading = ({ progress }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-xl">
      <Typography type="heading1">계산하는중</Typography>
      <Image src={ErrorWorry} width={126} alt="loadingWorry" />
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Loading;
