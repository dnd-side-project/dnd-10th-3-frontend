import { Typography } from '@/foundations/typography';

type Props = {
  text: string;
};

const Notice = ({ text }: Props) => {
  return (
    <div className="flex w-full items-center justify-start bg-secondary-light px-2xs py-5xs text-secondary-deep">
      <Typography type="caption1" className="font-normal">
        {text}
      </Typography>
    </div>
  );
};

export default Notice;
