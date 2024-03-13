import { Avatar } from '@/components/common/avatar';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/components/common/typography';

type Props = {
  likes: number;
  views: number;
  voters: number;
};

const Footer = ({ likes, views, voters }: Props) => {
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
            {views}
          </Typography>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex">
          <Avatar size={32} className="absolute right-4" color="gray-200" />
          <Avatar size={32} />
        </div>
        <Typography type="body3" className="text-gray-400">
          {voters}명 참여중
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
