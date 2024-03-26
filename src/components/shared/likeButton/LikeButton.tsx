import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';

type Props = {
  isLiked: boolean;
  likeCount: number;
  onClick: () => void;
};

const LikeButton = ({ isLiked, likeCount, onClick }: Props) => {
  return (
    <Button
      Icon={<Icon icon={isLiked ? 'filledHeart' : 'heart'} color="primary-700" />}
      variant="empty"
      className="gap-6xs !p-0 text-[14px] text-gray-600"
      onClick={onClick}
    >
      {likeCount}
    </Button>
  );
};

export default LikeButton;
