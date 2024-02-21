'use client';

import Link from 'next/link';

import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote } from '@/components/shared';
import { VOTE_TEMP_DATA } from '@/constants/vote/test';
import { getTimeDifference } from '@/utils/date';

import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const isVoteExist = true;
  const test = VOTE_TEMP_DATA;
  console.log('test', test);

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
                {test.map((vote) => {
                  const {
                    closeDate,
                    category,
                    id,
                    likes,
                    content,
                    title,
                    views,
                    voters,
                    selections,
                  } = vote;
                  //TODO : closeDate util로 계산하는 로직 필요

                  return (
                    <li key={id}>
                      <VoteCard className="shadow-thumb">
                        <VoteCard.Header
                          categories={category}
                          remainingDay={getTimeDifference(closeDate)}
                        />
                        <VoteCard.Description title={title} content={content} />
                        <VoteCard.VoteItemGroup withBlur>
                          <VoteItem readOnly>
                            <VoteItem.Radio disabled />
                            <VoteItem.Text>{selections[0]}</VoteItem.Text>
                          </VoteItem>
                          <VoteItem readOnly>
                            <VoteItem.Radio disabled />
                            <VoteItem.Text>{selections[1]}</VoteItem.Text>
                          </VoteItem>
                        </VoteCard.VoteItemGroup>
                        <VoteCard.SubmitButton>
                          <Button variant="primary" width="full">
                            투표 참여하기
                          </Button>
                        </VoteCard.SubmitButton>
                        <VoteCard.Footer likes={likes} views={views} voters={voters} />
                      </VoteCard>
                    </li>
                  );
                })}
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
