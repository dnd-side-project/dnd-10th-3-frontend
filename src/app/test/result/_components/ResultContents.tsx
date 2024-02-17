'use client';

import TempSVG from '@/assets/images/tempSVG.svg';
import { Button } from '@/components/common/button';
import { ProgressBar } from '@/components/common/progressBar';
import { Header } from '@/components/layout/header';
import { PROGRESSRATE } from '@/constants/test/progress';
import { Typography } from '@/foundations/typography';

const ResultContents = () => {
  return (
    <main className="relative flex size-full min-h-screen flex-col pb-10">
      <Header>
        <Header.Previous />
      </Header>
      <p className="pb-3xs pt-xs text-center">
        <Typography type="heading3">내 결혼식날</Typography>
        <Typography type="heading1">단체사진 플레시를 켜 줄 지인</Typography>
        <Typography type="body3">&quot;단체 플래시샷 1인분 책임질게요&quot;</Typography>
      </p>
      <section className="flex flex-col items-center justify-center">
        <TempSVG />
        <Button
          variant="empty"
          className="text-gray-500"
          icon="caretUp"
          iconSize={12}
          iconSide="both"
        >
          이미지 꾹 - 눌러서 저장하기
        </Button>
        <div className="my-4xs flex w-[335px] justify-center rounded-xl border border-gray-100 px-5xs py-xs ">
          <div className="w-[240px]">
            {/* TODO Text 자연스럽게 띄어쓰기되어야함. */}
            <Typography type="body3" className="text-center text-gray-600">
              아주 가깝지도 멀지도 않은 미지근한 관계지만 특별한 날, 내 미래 결혼식에서 한 줄기 밝은
              빛이 되어 줄 지인으로 보여요. 단체사진 한 켠을 채워줄 의리있는 사람이네요. 특별한
              순간에 플래시로 최선을 다해 비춰줄 미래 모습이 그려지네요.
            </Typography>
          </div>
        </div>
        {/* 온도 박스 */}
        <div className="flex w-[335px] flex-col justify-center rounded-xl border border-gray-100">
          <div className="w-full rounded-t-xl bg-primary-200 px-3xs py-5xs text-center">
            <Typography type="title2">당신과 상대의 온도는 70도</Typography>
          </div>
          <div className="flex w-full flex-col gap-3xs rounded-b-xl p-3xs text-center">
            <div className="flex items-center gap-5xs">
              <div className="flex">
                <Typography type="body2">믿음 지수</Typography>
              </div>
              <div className="flex-1">
                {/* FIX : PROGRESSBAR 구현 제대로 다시 필요함 현재 에러  */}
                <ProgressBar progress={PROGRESSRATE} />
              </div>
            </div>
            <div className="flex items-center gap-5xs">
              <div className="flex">
                <Typography type="body2">하트 지수</Typography>
              </div>
              <div className="flex-1">
                {/* FIX : PROGRESSBAR 구현 제대로 다시 필요함 현재 에러  */}
                <ProgressBar progress={PROGRESSRATE} />
              </div>
            </div>
            <div className="flex items-center gap-5xs">
              <div className="flex">
                <Typography type="body2">소통 지수</Typography>
              </div>
              <div className="flex-1">
                {/* FIX : PROGRESSBAR 구현 제대로 다시 필요함 현재 에러  */}
                <ProgressBar progress={PROGRESSRATE} />
              </div>
            </div>
          </div>
        </div>

        {/* 공유 박스 */}

        <div className="py-sm">
          <Typography type="body2">내 결과 공유하기</Typography>
          <div className="flex">
            <Button icon="kakaotalk" iconOnly />
            <Button icon="kakaotalk" iconOnly />
          </div>
        </div>
        {/* VoteCard 박스 */}
      </section>
    </main>
  );
};

export default ResultContents;
