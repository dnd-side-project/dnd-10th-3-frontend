import Image from 'next/image';

import ErrorWorry from '@/assets/images/error-worry.png';
import { Typography } from '@/foundations/typography';

type Props = {
  message: string;
  children: React.ReactNode;
};

export const EmptyLayout = ({ message, children }: Props) => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-xs">
      <Image src={ErrorWorry} width={86} alt="errorImage" />
      <Typography type="body2" className="whitespace-pre-line text-center">
        {message}
      </Typography>
      {children}
    </div>
  );
};
