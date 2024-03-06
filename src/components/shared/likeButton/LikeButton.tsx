import { Button } from '@/components/common/button';

type Props = {
  isLiked: boolean;
  likeCount: number;
  onClick: () => void;
};

const LikeButton = ({ isLiked, likeCount, onClick }: Props) => {
  return (
    <Button
      icon={isLiked ? 'filledHeart' : 'heart'}
      iconColor="primary-700"
      variant="empty"
      className="gap-6xs !p-0 text-[14px] text-gray-600"
      onClick={onClick}
    >
      {likeCount}
    </Button>
  );
};

export default LikeButton;
