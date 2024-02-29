'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote } from '@/components/shared';
import { CATEGORY_TAB } from '@/constants/category';
import { useGetAllVotes } from '@/hooks/vote';

import { SearchInput, SearchResults } from './search';
import VoteHeader from './VoteHeader';
import VoteLayout from './VoteLayout';

const VoteContents = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') as string;
  const searchQueryValue = searchParams.get('q') as string;
  const [value, setValue] = useState('');
  const findCategoryNameByParam = CATEGORY_TAB.find((category) => category.params === tab);
  const { data: voteList, isLoading } = useGetAllVotes(
    findCategoryNameByParam?.name ?? ('전체' as string),
  );

  // 의도 : 입력할 경우 바로 결과 SearchResults 컴포넌트에 반영되도록 하기 위해 state를 사용 추후에 검색시 쓰로틀링 혹은 디바운스 적용
  const onChangeInputHandler = (targetValue: string) => {
    setValue(targetValue);
  };

  //Enter키가 눌리면 query string에 반영하는 로직
  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!value) {
        return router.push('/vote');
      }
      router.push(`?q=${value}`);
    }
  };

  return (
    <VoteLayout
      header={<VoteHeader />}
      contents={
        <>
          <div className="flex w-full flex-col">
            <SearchInput
              onChangeInputHandler={onChangeInputHandler}
              searchValue={value}
              onKeyUpHandler={onKeyUpHandler}
            />
            <SearchResults searchValue={searchQueryValue} />

            <ul className="flex flex-col gap-3xs p-3xs">
              {/* TODO : Suspense로 선언적으로 리팩토링 */}
              {isLoading && (
                <div className="flex w-full items-center justify-center">
                  <Spinner />
                </div>
              )}
              {voteList?.length === 0 && <EmptyVote />}
              {voteList?.map(
                ({ id, category, closeDate, title, content, selections, likes, voters, views }) => {
                  return (
                    <VoteCard className="shadow-thumb" key={id}>
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
