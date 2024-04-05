import { useState } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/components/common/typography';
import { ConfirmBottomSheet, LikeButton, OptionBottomSheet, Profile } from '@/components/shared';
import { VoteReplyType } from '@/types/vote';
import { fromNowOf } from '@/utils/dates';

type Props = {
  reply: VoteReplyType; // NOTE: 다른 피쳐에서 댓글 사용 시 변경 필요
  isWrittenByCurrentUser: boolean;
  onLikeToggle: () => void;
  onDelete: () => void;
};

type BottomSheetType = 'askDelete' | 'replyOption';

const Reply = ({ reply, onLikeToggle, onDelete, isWrittenByCurrentUser }: Props) => {
  const [openedSheet, setOpenedSheet] = useState<BottomSheetType | null>(null);

  const { nickname, createdAt, content, likes, status } = reply;

  return (
    <>
      <li className="flex list-none flex-col [&+&]:mt-xs">
        <Profile
          nickname={nickname}
          subText={fromNowOf(+createdAt)}
          actionButton={
            isWrittenByCurrentUser && (
              <Button
                variant="empty"
                iconOnly
                Icon={<Icon icon="more" color="gray-300" />}
                className="!p-0"
                onClick={() => setOpenedSheet('replyOption')}
              />
            )
          }
        />
        <Typography type="body3" className="ml-md">
          {content}
        </Typography>
        <div className="ml-md mt-5xs">
          <LikeButton isLiked={status} likeCount={likes} onClick={onLikeToggle} />
        </div>
      </li>

      <OptionBottomSheet
        isOpen={openedSheet === 'replyOption'}
        onClose={() => setOpenedSheet(null)}
        options={[
          {
            variant: 'warning',
            optionLabel: '삭제',
            onClick: () => setOpenedSheet('askDelete'),
          },
        ]}
      />
      <ConfirmBottomSheet
        isOpen={openedSheet === 'askDelete'}
        onClose={() => setOpenedSheet(null)}
        title="댓글을 삭제하시겠어요?"
        description="댓글을 삭제하면 되돌릴 수 없어요."
        PrimaryButton={
          <Button
            width="full"
            onClick={() => {
              setOpenedSheet(null);
              onDelete();
            }}
          >
            확인
          </Button>
        }
        SecondaryButton={
          <Button variant="secondary" width="full" onClick={() => setOpenedSheet(null)}>
            취소
          </Button>
        }
      />
    </>
  );
};

export default Reply;
