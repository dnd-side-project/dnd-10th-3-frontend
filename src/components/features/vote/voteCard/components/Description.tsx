import { Typography } from '@/foundations/typography';

type Props = {
  title: string;
  content: string;
};

const Description = ({ title, content }: Props) => {
  return (
    <div className="flex flex-col gap-5xs pb-3xs">
      <Typography type="heading3" className="text-gray-700">
        Q. {title}
      </Typography>
      <Typography type="body3" className="text-gray-400">
        {content}
      </Typography>
    </div>
  );
};

export default Description;
