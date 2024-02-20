'use client';

import Link from 'next/link';

import { Button } from '@/components/common/button';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

import ImageBox from './ImageBox';
import ShareBox from './ShareBox';
import TempertaureBox from './TempertaureBox';

const ResultContents = () => {
  return (
    <>
      <Header>
        <Header.Previous />
      </Header>

      <article className="flex flex-col items-center justify-center px-2xs">
        <ImageBox resultTypeId={100} />
      </article>
      <main className="pb-10">
        <section className="flex flex-col items-center justify-center">
          {/* TODO : 컴포넌트 분리 예정 */}
          <article className="my-4xs flex w-full px-2xs ">
            <div className="flex w-full flex-col items-center justify-center  rounded-xl border  border-gray-100 py-xs">
              <Typography type="body2" className="mb-5xs w-[240px] text-center text-gray-1000">
                &quot;단체 플래시샷 1인분 책임질게요&quot;
              </Typography>
              <Typography type="body3" className="w-[240px] text-center text-gray-600">
                아주 가깝지도 멀지도 않은 미지근한 관계지만 특별한 날, 내 미래 결혼식에서 한 줄기
                밝은 빛이 되어 줄 지인으로 보여요. 단체사진 한 켠을 채워줄 의리있는 사람이네요.
                특별한 순간에 플래시로 최선을 다해 비춰줄 미래 모습이 그려지네요.
              </Typography>
            </div>
          </article>

          <TempertaureBox buddy="상대" trust={1} love={2} talk={3} temperature={4} />

          <article className="py-sm">
            <ShareBox id={1} />
          </article>
          <div className="flex w-full gap-4xs px-2xs">
            <Button width="full" className="bg-primary-200 text-primary-800 ">
              테스트 다시 하기
            </Button>
            <Button width="full" variant="secondary">
              전체 유형 보러가기
            </Button>
          </div>

          <article className="w-full px-2xs pt-lg">
            <div className="flex  flex-col items-center gap-3xs">
              <Typography type="heading3">투표로 더 많은 논쟁을 해결해봐요</Typography>
              <VoteCard className="w-full border-b-0">
                <VoteCard.Header categories="축의금" remainingDay={1} />
                <VoteCard.Description
                  title="갑자기 연락온 동창 축의금 얼마할까요? 고민됩니다."
                  content="제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 하고 지내다가 최근에 연락이 되었어요. 옛날 생각이 나.."
                />
                <VoteCard.VoteItemGroup withBlur>
                  <VoteItem readOnly>
                    <VoteItem.Radio></VoteItem.Radio>
                    <VoteItem.Text>5만원</VoteItem.Text>
                  </VoteItem>
                  <VoteItem readOnly>
                    <VoteItem.Radio></VoteItem.Radio>
                    <VoteItem.Text>5만원</VoteItem.Text>
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
        </section>
      </main>
    </>
  );
};

export default ResultContents;
