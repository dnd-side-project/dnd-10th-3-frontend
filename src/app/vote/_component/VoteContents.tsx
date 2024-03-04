'use client';

import debounce from 'lodash.debounce';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote } from '@/components/shared';
import { useGetAllVotes } from '@/hooks/vote';

import { SearchInput, SearchResults } from './search';
import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQueryValue = searchParams.get('q') as string;
  const [seacrValueState, setSearchValueState] = useState('');
  const isSearching = seacrValueState.length > 0;
  const { data: voteList, isLoading } = useGetAllVotes();
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  // 의도 : 입력할 경우 바로 결과 SearchResults 컴포넌트에 반영되도록 하기 위해 state를 사용 추후에 검색시 쓰로틀링 혹은 디바운스 적용
  const onChangeInputValue = (targetValue: string) => {
    setIsSearchLoading(true);
    setSearchValueState(targetValue);
    onDebounceHandlerInputValue(targetValue);
  };

  //FIXME : eslint에서 수정
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDebounceHandlerInputValue = useCallback(
    debounce(async (params: string) => {
      router.push(`?q=${params}`);
      setIsSearchLoading(false);
    }, 500),
    [],
  );

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!seacrValueState) {
        return router.push('/vote');
      }
      //의도 : 중복 엔터 방지 queryString과 비교하여 동일하면 EnterKey 방지
      if (searchQueryValue === seacrValueState) return;
      router.push(`?q=${seacrValueState}`);
    }
  };

  return (
    <VoteLayout
      header={<VoteHeader />}
      contents={
        <>
          <div className="flex w-full flex-col">
            <SearchInput
              onChangeInputHandler={onChangeInputValue}
              searchValue={seacrValueState}
              onKeyUpHandler={onKeyUpHandler}
            />
            <SearchResults searchValue={searchQueryValue} />

            <ul className="flex flex-col gap-3xs p-3xs">
              {/* TODO : Suspense로 선언적으로 리팩토링 */}
              {isLoading ||
                (isSearchLoading && (
                  <div className="flex w-full items-center justify-center">
                    <Spinner />
                  </div>
                ))}

              {isSearching ? (
                <>123</>
              ) : (
                <>
                  {/* Fallback UI로 수정 */}
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
            </ul>
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
