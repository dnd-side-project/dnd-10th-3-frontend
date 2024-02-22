'use client';

import Link from 'next/link';

import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Spinner } from '@/components/common/spinner';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote } from '@/components/shared';
import { useGetAllVotes } from '@/hooks/vote';
import { getTimeDifference } from '@/utils/date';

import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const isVoteExist = true;
  const { data: voteList, isLoading } = useGetAllVotes();

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
                {isLoading && (
                  <div className="flex w-full items-center justify-center">
                    <Spinner />
                  </div>
                )}
                {voteList?.data.map(
                  ({
                    id,
                    category,
                    closeDate,
                    title,
                    content,
                    selections,
                    likes,
                    voters,
                    views,
                  }) => {
                    return (
                      // <div key={id}>{closeDate}</div>
                      <VoteCard className="shadow-thumb" key={id}>
                        <VoteCard.Header
                          categories={category}
                          remainingDay={getTimeDifference(closeDate)}
                        />
                        <VoteCard.Description title={title} content={content} />
                        <VoteCard.VoteItemGroup withBlur>
                          <VoteItem readOnly>
                            <VoteItem.Radio disabled />
                            <VoteItem.Text>{selections[0].content}</VoteItem.Text>
                          </VoteItem>
                          <VoteItem readOnly>
                            <VoteItem.Radio disabled />
                            <VoteItem.Text>{selections[1].content}</VoteItem.Text>
                          </VoteItem>
                        </VoteCard.VoteItemGroup>
                        <VoteCard.SubmitButton>
                          <Link href={`/vote/${id}`}>
                            <Button variant="primary" width="full">
                              투표 참여하기
                            </Button>
                          </Link>
                        </VoteCard.SubmitButton>
                        <VoteCard.Footer likes={likes} views={views} voters={voters} />
                      </VoteCard>
                    );
                  },
                )}
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
