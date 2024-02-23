import { Button } from '@/components/common/button';
import Profile from '@/components/shared/profile/Profile';
import { Typography } from '@/foundations/typography';

type Props = {
  id: number; // U,D에 필요
  nickname: string;
  createdAt: string;
  content: string;
  likes: number;
  status: boolean;
};

const Reply = ({ nickname, createdAt, content, likes, status }: Props) => {
  return (
    <li className="flex list-none flex-col [&+&]:mt-xs">
      <Profile
        nickname={nickname}
        subText={createdAt} // TODO fromNow()
        actionButton={<Button variant="empty" iconOnly icon="more" className="!p-0" />}
      />
      <Typography type="body3" className="ml-md">
        {content}
      </Typography>
      <Button
        icon={status ? 'filledHeart' : 'heart'}
        iconColor="primary-700"
        variant="empty"
        className="ml-md mt-5xs gap-6xs !p-0 text-[14px] text-gray-600 "
      >
        {likes}
      </Button>
    </li>
  );
};

export default Reply;
