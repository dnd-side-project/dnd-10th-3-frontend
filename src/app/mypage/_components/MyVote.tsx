'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { Suspense, useRef } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/components/common/typography';
import { VoteCard } from '@/components/features/vote';
import { ConfirmBottomSheet, EmptyVote, OptionBottomSheet } from '@/components/shared';
import { useBottomSheetState } from '@/hooks';
import { useDeleteVoteMutation, useGetMyVote } from '@/hooks/vote';
import { VoteType } from '@/types/vote';
import { fromNowOf } from '@/utils/dates';

import { Fallback as MyVoteFallback } from '.';

type BottomSheetType = 'askDelete' | 'selectOption';

const MyVote = () => {
  const { data } = useGetMyVote();
  const { mutate: onDelete, isPending } = useDeleteVoteMutation();
  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();
  const deleteTarget = useRef<VoteType['id'] | null>(null);

  return (
    <Suspense fallback={<MyVoteFallback />}>
      {data.length > 0 ? (
        <div className="mt-3xs flex flex-col gap-3xs">
          {data.map((vote) => (
            <VoteCard key={vote.id}>
              <div className="mb-4xs flex justify-between">
                <div className="flex gap-5xs">
                  <Typography type="title4" className="text-secondary-deep">
                    {vote.category}
                  </Typography>
                  <Typography type="title4" className="text-primary-700">
                    {fromNowOf(dayjs(vote.closeDate).endOf('day'))}
                  </Typography>
                </div>
                <Button
                  variant="empty"
                  iconOnly
                  Icon={<Icon icon="more" size={16} color="gray-300" />}
                  className="!p-0"
                  onClick={() => {
                    onOpenSheet('selectOption');
                    deleteTarget.current = vote.id;
                  }}
                  disabled={isPending && deleteTarget.current === vote.id}
                />
              </div>

              <VoteCard.Description title={vote.title} content={vote.content} />
              <Link
                href={`/vote/${vote.id}`}
                className="flex items-center justify-center rounded-lg bg-slate-200 px-3xs py-4xs text-base"
              >
                상세보기
              </Link>
            </VoteCard>
          ))}
          <OptionBottomSheet
            isOpen={openedSheet === 'selectOption'}
            onClose={() => {
              onCloseSheet();
              deleteTarget.current = null;
            }}
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
            onClose={() => {
              onCloseSheet();
              deleteTarget.current = null;
            }}
            title="투표를 삭제하시겠어요?"
            description="투표를 삭제하면 되돌릴 수 없어요."
            PrimaryButton={
              <Button
                width="full"
                onClick={() => {
                  onCloseSheet();
                  onDelete({ voteId: deleteTarget.current! });
                }}
              >
                확인
              </Button>
            }
            SecondaryButton={
              <Button
                variant="secondary"
                width="full"
                onClick={() => {
                  onCloseSheet();
                  deleteTarget.current = null;
                }}
              >
                취소
              </Button>
            }
          />
        </div>
      ) : (
        <EmptyVote />
      )}
    </Suspense>
  );
};

export default MyVote;
