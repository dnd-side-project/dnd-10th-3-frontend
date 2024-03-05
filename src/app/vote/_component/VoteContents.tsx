'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote, EndObserverList } from '@/components/shared';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetAllVotes, useGetVoteBySearch } from '@/hooks/vote';

import { SearchInput, SearchResults } from './search';
import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const [searchValueState, setSearchValueState] = useState('');
  const debouncedValue = useDebounce(searchValueState);
  const isSearching = searchValueState.length > 0;
  const { data: voteList, isLoading } = useGetAllVotes();
  const {
    status,
    hasNextPage,
    fetchNextPage,
    data: searchedVoteList,
    isLoading: isSearchLoading,
  } = useGetVoteBySearch({
    keyword: debouncedValue,
  });

  const searchedVoteListIntoSingleArray = searchedVoteList
    ? searchedVoteList.map((page) => page.list).flat()
    : [];

  const onChangeInputValue = (targetValue: string) => {
    setSearchValueState(targetValue);
  };

  return (
    <VoteLayout
      header={<VoteHeader />}
      contents={
        <>
          <div className="flex w-full flex-col">
            <SearchInput
              onChangeInputHandler={onChangeInputValue}
              searchValueState={searchValueState}
            />
            <SearchResults debouncedValue={debouncedValue} />

            <div className="flex flex-col gap-3xs p-3xs">
              {/* TODO : Suspense로 선언적으로 리팩토링 */}
              {(isLoading || isSearchLoading) && (
                <div className="flex w-full items-center justify-center">
                  <Spinner />
                </div>
              )}

              {isSearching ? (
                <>
                  {status === 'success' && (
                    <>
                      {searchedVoteListIntoSingleArray.length === 0 && <EmptyVote />}
                      <EndObserverList
                        className="flex flex-col gap-3xs"
                        isEndHandler={() => {
                          if (hasNextPage) {
                            fetchNextPage();
                          }
                        }}
                      >
                        {searchedVoteListIntoSingleArray.map(
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
                      </EndObserverList>
                    </>
                  )}
                </>
              ) : (
                <>
                  {voteList?.length === 0 && <EmptyVote />}
                  {voteList?.map(
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
