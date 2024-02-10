import Image from 'next/image';

import ErrorWorry from '@/assets/images/error-worry.png';
import { Button } from '@/components/common/button';
import { Typography } from '@/foundations/typography';

//TODO : 데이터 없을때 보여질 이미지 디자인 시안에 따라 수정
export const EmptyVoteLayout = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-xs">
      <Image src={ErrorWorry} width={86} alt="errorImage" />
      <Typography type={'body1'} className="text-center text-gray-500">
        아직 투표가 없어요 <br /> 투표를 만들어 고민을 해결해 보세요
      </Typography>
      <Button variant={'secondary'}>투표 만들기</Button>
    </div>
  );
};
