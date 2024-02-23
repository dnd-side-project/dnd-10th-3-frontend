import { Icon } from '@/components/common/icon';
import { Typography } from '@/foundations/typography';

type Props = {
  nickname: string;
  subText?: string;
  actionButton?: React.ReactNode;
};

const Profile = ({ nickname, subText, actionButton }: Props) => {
  return (
    <div className="flex items-center gap-5xs">
      <Icon icon="profile" size={32} color="gray-100" />
      <div className="flex w-full flex-col">
        <Typography type="subLabel2" className="text-gray-600">
          {nickname}
        </Typography>
        {subText && (
          <Typography type="caption1" className="text-gray-600">
            {subText}
          </Typography>
        )}
      </div>
      {actionButton}
    </div>
  );
};

export default Profile;
