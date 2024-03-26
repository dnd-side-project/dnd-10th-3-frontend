'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/components/common/typography';
import { ConfirmBottomSheet, OptionBottomSheet } from '@/components/shared';
import Profile from '@/components/shared/profile/Profile';
import { useBottomSheetState } from '@/hooks';
import { useGetUser } from '@/hooks/auth';
import { useDeleteVoteMutation } from '@/hooks/vote';
import { VoteType } from '@/types/vote';

type Props = {
  voteId: number;
  author: VoteType['user'];
  views: number;
  category: string;
};

type BottomSheetType = 'askDelete' | 'replyOption';

const VoteExtraDetail = ({ author, views, category, voteId }: Props) => {
  const { data: user } = useGetUser();
  const { mutate: onDelete, isPending } = useDeleteVoteMutation();

  const router = useRouter();
  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();

  return (
    <>
      <aside className="flex flex-col gap-5xs">
        <Typography type="subLabel2" className="text-secondary-deep">
          {category}
        </Typography>
        <Profile
          nickname={author.nickname}
          subText={`${views}명 조회`}
          actionButton={
            user?.userId === author.id && (
              <Button
                variant="empty"
                iconOnly
                Icon={<Icon icon="more" color="gray-300" />}
                className="!p-0"
                onClick={() => onOpenSheet('replyOption')}
                disabled={isPending}
              />
            )
          }
        />
      </aside>
      <OptionBottomSheet
        isOpen={openedSheet === 'replyOption'}
        onClose={onCloseSheet}
        options={[
          {
            variant: 'warning',
            optionLabel: '삭제',
            onClick: () => onOpenSheet('askDelete'),
          },
        ]}
      />
      <ConfirmBottomSheet
        isOpen={openedSheet === 'askDelete'}
        onClose={onCloseSheet}
        title="투표를 삭제하시겠어요?"
        description="투표를 삭제하면 되돌릴 수 없어요."
        PrimaryButton={
          <Button
            width="full"
            onClick={() => {
              onCloseSheet();
              onDelete({ voteId }, { onSuccess: () => router.replace('/vote') });
            }}
          >
            확인
          </Button>
        }
        SecondaryButton={
          <Button variant="secondary" width="full" onClick={onCloseSheet}>
            취소
          </Button>
        }
      />
    </>
  );
};

export default VoteExtraDetail;
