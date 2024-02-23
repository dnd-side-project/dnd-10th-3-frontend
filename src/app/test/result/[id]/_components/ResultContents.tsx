'use client';

import Link from 'next/link';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';
import { useGetTestResultById } from '@/hooks/test';
import { useGetBestVote } from '@/hooks/vote/useGetBestVote';

import ImageBox from './ImageBox';
import ShareBox from './ShareBox';
import TempertaureBox from './TempertaureBox';

const ResultContents = ({ id }: { id: number }) => {
  const { data: resultData } = useGetTestResultById(id);
  const { data: bestVoteContents } = useGetBestVote();

  return (
    <>
      <Header>
        <Header.Previous />
      </Header>

      <main className="pb-10">
        <section className="flex flex-col items-center justify-center">
          {/* TODO : 컴포넌트 분리 예정 */}
          {resultData && (
            <article className="flex flex-col items-center justify-center px-2xs">
              <ImageBox temperature={resultData.temperature} />
            </article>
          )}

          {resultData && (
            <article className="my-4xs flex w-full px-2xs">
              <div className="flex w-full flex-col items-center justify-center  rounded-xl border  border-gray-100 py-xs">
                <Typography type="body2" className="mb-5xs w-[240px] text-center text-gray-1000">
                  &quot;{resultData.title}&quot;
                </Typography>
                <Typography type="body3" className="w-[240px] text-center text-gray-600">
                  {resultData.description}
                </Typography>
              </div>
            </article>
          )}

          {resultData ? (
            <TempertaureBox
              buddy={resultData.buddy}
              trust={resultData.trust}
              love={resultData.love}
              talk={resultData.talk}
              temperature={resultData.temperature}
            />
          ) : (
            <Spinner />
          )}

          <article className="py-sm">
            <ShareBox />
          </article>
          <div className="flex w-full gap-4xs px-2xs">
            <Link href="/test" className="w-full">
              <Button width="full" className="bg-primary-200 text-primary-800 ">
                테스트 다시 하기
              </Button>
            </Link>
            <Link href="/test/result/total" className="w-full">
              <Button width="full" variant="secondary">
                전체 유형 보러가기
              </Button>
            </Link>
          </div>

          {bestVoteContents && (
            <article className="w-full px-2xs pt-lg">
              <div className="flex  flex-col items-center gap-3xs">
                <Typography type="heading3">투표로 더 많은 논쟁을 해결해봐요</Typography>
                <VoteCard className="w-full border-b-0">
                  <VoteCard.Header
                    categories={bestVoteContents.category}
                    closeDate={bestVoteContents.closeDate}
                  />
                  <VoteCard.Description
                    title={bestVoteContents.title}
                    content={bestVoteContents.content}
                  />
                  <VoteCard.VoteItemGroup withBlur>
                    <VoteItem readOnly>
                      <VoteItem.Radio></VoteItem.Radio>
                      <VoteItem.Text>{bestVoteContents.selections[0].content}</VoteItem.Text>
                      <VoteItem.Img
                        src={bestVoteContents.selections[0].imagePath}
                        alt="vote_item_image"
                      />
                    </VoteItem>
                    <VoteItem readOnly>
                      <VoteItem.Radio></VoteItem.Radio>
                      <VoteItem.Text>{bestVoteContents.selections[1].content}</VoteItem.Text>
                      <VoteItem.Img
                        src={bestVoteContents.selections[1].imagePath}
                        alt="vote_item_image"
                      />
                    </VoteItem>
                  </VoteCard.VoteItemGroup>
                </VoteCard>
              </div>
              <Link href="/vote">
                <Button variant="primary" width="full">
                  투표하고 축의금 논쟁 종결짓기
                </Button>
              </Link>
            </article>
          )}
        </section>
      </main>
    </>
  );
};

export default ResultContents;
