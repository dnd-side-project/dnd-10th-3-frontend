import { useState } from 'react';

import { Button } from '@/components/common/button';
import { ConfirmBottomSheet, LikeButton, OptionBottomSheet, Profile } from '@/components/shared';
import { Typography } from '@/foundations/typography';
import { VoteReplyType } from '@/types/vote';
import { fromNowOf } from '@/utils/dates';

type Props = {
  reply: VoteReplyType; // NOTE: 다른 피쳐에서 댓글 사용 시 변경 필요
  onLikeToggle: () => void;
  onDelete: () => void;
};

type BottomSheetType = 'askDelete' | 'replyOption';

const Reply = ({ reply, onLikeToggle, onDelete }: Props) => {
  const [openedSheet, setOpenedSheet] = useState<BottomSheetType | null>(null);

  const { nickname, createdAt, content, likes, status } = reply;

  return (
    <>
      <li className="flex list-none flex-col [&+&]:mt-xs">
        <Profile
          nickname={nickname}
          subText={fromNowOf(+createdAt)}
          actionButton={
            <Button
              variant="empty"
              iconOnly
              icon="more"
              className="!p-0"
              onClick={() => setOpenedSheet('replyOption')}
            />
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
