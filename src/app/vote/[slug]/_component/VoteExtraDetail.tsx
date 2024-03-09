'use client';

import { Button } from '@/components/common/button';
import Profile from '@/components/shared/profile/Profile';
import { Typography } from '@/foundations/typography';
import { useGetUser } from '@/hooks/auth';
import { VoteType } from '@/types/vote';

type Props = {
  voteId: number;
  author: VoteType['user'];
  views: number;
  category: string;
};

const VoteExtraDetail = ({ author, views, category }: Props) => {
  const { data: user } = useGetUser();

  return (
    <aside className="flex flex-col gap-5xs">
      <Typography type="subLabel2" className="text-secondary-deep">
        {category}
      </Typography>
      <Profile
        nickname={author.nickname}
        subText={`${views}명 조회`}
        actionButton={
          user?.userId === author.id && (
            <Button variant="empty" iconOnly icon="more" className="!p-0" onClick={() => {}} />
          )
        }
      />
    </aside>
  );
};

export default VoteExtraDetail;
