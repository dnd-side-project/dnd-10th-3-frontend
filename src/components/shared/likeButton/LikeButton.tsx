import { Button } from '@/components/common/button';

type Props = {
  isLiked: boolean;
  likeCount: number;
  clickHandler: () => void;
};

const LikeButton = ({ isLiked, likeCount, clickHandler }: Props) => {
  return (
    <Button
      icon={isLiked ? 'filledHeart' : 'heart'}
      iconColor="primary-700"
      variant="empty"
      className="gap-6xs !p-0 text-[14px] text-gray-600"
      onClick={clickHandler}
    >
      {likeCount}
    </Button>
  );
};

export default LikeButton;
