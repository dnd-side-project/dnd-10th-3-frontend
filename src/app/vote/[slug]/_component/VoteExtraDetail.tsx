import Profile from '@/components/shared/profile/Profile';
import { Typography } from '@/foundations/typography';

type Props = {
  nickname: string;
  views: number;
  category: string;
};

const VoteExtraDetail = ({ nickname, views, category }: Props) => {
  return (
    <aside className="flex flex-col gap-5xs">
      <Typography type="subLabel2" className="text-secondary-deep">
        {category}
      </Typography>
      <Profile nickname={nickname} subText={`${views}명 조회`} />
    </aside>
  );
};

export default VoteExtraDetail;
