'use client';

import Link from 'next/link';

import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote } from '@/components/shared';

import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const isVoteExist = true;
  return (
    <VoteLayout
      header={<VoteHeader />}
      contents={
        <>
          {isVoteExist ? (
            <div className="flex w-full flex-col">
              <div className="w-full p-3xs">
                <div className="py-4xs">
                  <Input
                    placeholder="무엇이 고민이신가요?"
                    icon="search"
                    iconSide="left"
                    borderRadius="large"
                    bgcolor="lightGray"
                    className="text-[14px] placeholder:text-gray-500"
                  />
                </div>
              </div>
              {/* TODO: Select*/}

              <ul className="flex flex-col gap-3xs p-3xs">
                <li>
                  <VoteCard className="shadow-thumb">
                    <VoteCard.Header categories="축의금" remainingDay={2} />
                    <VoteCard.Description
                      title="갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다."
                      content=" 제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
        되었어요. 옛날..."
                    />
                    <VoteCard.VoteItemGroup withBlur>
                      <VoteItem readOnly>
                        <VoteItem.Radio disabled />
                        <VoteItem.Text>5만원</VoteItem.Text>
                      </VoteItem>
                      <VoteItem readOnly>
                        <VoteItem.Radio disabled />
                        <VoteItem.Text>7만원</VoteItem.Text>
                      </VoteItem>
                    </VoteCard.VoteItemGroup>
                    <VoteCard.SubmitButton>
                      <Button variant="primary" width="full">
                        투표 참여하기
                      </Button>
                    </VoteCard.SubmitButton>
                    <VoteCard.Footer likes={48} view={48} voter={451} />
                  </VoteCard>
                </li>
              </ul>
            </div>
          ) : (
            <EmptyVote />
          )}
        </>
      }
      footer={
        <>
          {isVoteExist ? (
            <Link href={'/vote/create'}>
              <Button
                variant="accent"
                icon="pencil"
                iconOnly
                className=" h-[56px] w-xl rounded-[100%] bg-primary-800"
                iconColor="white"
              />
            </Link>
          ) : null}
        </>
      }
    />
  );
};

export default VoteContents;
