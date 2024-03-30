'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote, EndObserverList } from '@/components/shared';
import { useGetAllVotes, useGetVoteBySearch } from '@/hooks/vote';

import { SearchInput, SearchResults } from './search';
import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const searchParams = useSearchParams();
  const searchQueryStringValue = searchParams.get('q') ?? ('' as string);
  const { status: allVoteStatus, data: voteList, isLoading } = useGetAllVotes();
  const {
    status: searchedVoteStatus,
    hasNextPage,
    fetchNextPage,
    data: searchedVoteList,
    isLoading: isSearchLoading,
  } = useGetVoteBySearch({
    keyword: searchQueryStringValue,
  });

  return (
    <VoteLayout
      header={<VoteHeader />}
      contents={
        <>
          <div className="flex w-full flex-col">
            <SearchInput />
            <SearchResults searchQueryStringValue={searchQueryStringValue} />

            <div className="flex flex-col gap-3xs p-3xs">
              {/* TODO : Suspense로 선언적으로 리팩토링 */}
              {(isLoading || isSearchLoading) && (
                <div className="flex w-full items-center justify-center">
                  <Spinner />
                </div>
              )}

              {searchQueryStringValue.length > 0 ? (
                <>
                  {searchedVoteStatus === 'success' && (
                    <>
                      {searchedVoteList.length > 0 ? (
                        <EndObserverList
                          className="flex flex-col gap-3xs"
                          onScrollEnd={() => {
                            if (hasNextPage) {
                              fetchNextPage();
                            }
                          }}
                        >
                          {searchedVoteList.map(
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
                                <VoteCard className="shadow-vote-card" key={id}>
                                  <VoteCard.Header categories={category} closeDate={closeDate} />
                                  <VoteCard.Description title={title} content={content} />
                                  <VoteCard.VoteItemGroup withBlur>
                                    <VoteItem mode="read">
                                      <VoteItem.Radio />
                                      <VoteItem.Text>{selections[0].content}</VoteItem.Text>
                                    </VoteItem>
                                    <VoteItem mode="read">
                                      <VoteItem.Radio />
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
                        </EndObserverList>
                      ) : (
                        <EmptyVote />
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  {allVoteStatus === 'success' && (
                    <>
                      {voteList.length > 0 ? (
                        <>
                          {voteList.map(
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
                                <VoteCard className="shadow-vote-card" key={id}>
                                  <VoteCard.Header categories={category} closeDate={closeDate} />
                                  <VoteCard.Description title={title} content={content} />
                                  <VoteCard.VoteItemGroup withBlur>
                                    <VoteItem mode="read">
                                      <VoteItem.Radio />
                                      <VoteItem.Text>{selections[0].content}</VoteItem.Text>
                                    </VoteItem>
                                    <VoteItem mode="read">
                                      <VoteItem.Radio />
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
                        </>
                      ) : (
                        <EmptyVote />
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      }
      footer={
        <>
          <Link href={'/vote/create'}>
            <Button
              variant="accent"
              icon="pencil"
              iconOnly
              className=" h-[56px] w-xl rounded-[100%] bg-primary-800"
              iconColor="white"
            />
          </Link>
        </>
      }
    />
  );
};

export default VoteContents;
