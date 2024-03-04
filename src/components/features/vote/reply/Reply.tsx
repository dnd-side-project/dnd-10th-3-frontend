import { Button } from '@/components/common/button';
import { LikeButton, Profile } from '@/components/shared';
import { Typography } from '@/foundations/typography';
import { VoteReplyType } from '@/types/vote';
import { fromNowOf } from '@/utils/dates';

type Props = {
  reply: VoteReplyType; // NOTE: 다른 피쳐에서 댓글 사용 시 변경 필요
};

const Reply = ({ reply }: Props) => {
  const { nickname, createdAt, content, likes, status } = reply;

  return (
    <>
      <li className="flex list-none flex-col [&+&]:mt-xs">
        <Profile
          nickname={nickname}
          subText={fromNowOf(+createdAt)}
          actionButton={<Button variant="empty" iconOnly icon="more" className="!p-0" />}
        />
        <Typography type="body3" className="ml-md">
          {content}
        </Typography>
        <div className="ml-md mt-5xs">
          <LikeButton isLiked={status} likeCount={likes} clickHandler={() => {}} />
        </div>
      </li>
    </>
  );
};

export default Reply;
