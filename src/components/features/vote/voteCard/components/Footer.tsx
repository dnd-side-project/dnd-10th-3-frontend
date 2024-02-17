import { Avatar } from '@/components/common/avatar';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/foundations/typography';

type Props = {
  likes: number;
  view: number;
  voter: number;
};

const Footer = ({ likes, view, voter }: Props) => {
  return (
    <div className="flex w-full justify-between gap-4xs pt-xs">
      <div className="flex items-center gap-5xs">
        <div className="flex items-center gap-6xs">
          <Icon icon="heart" size={16} color="primary-700" />
          <Typography type="body3" className="text-gray-400">
            {likes}
          </Typography>
        </div>
        <div className="flex w-full items-center gap-6xs">
          <Icon icon="reply" size={16} color="gray-300" />
          <Typography type="body3" className="text-gray-400">
            {view}
          </Typography>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex">
          <Avatar size={32} className="absolute right-4" color="gray-200" />
          <Avatar size={32} />
        </div>
        <Typography type="body3" className="text-gray-400">
          {voter}명 참여중
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
