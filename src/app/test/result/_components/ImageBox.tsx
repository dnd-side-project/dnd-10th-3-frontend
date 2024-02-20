'use client';

import { useRef } from 'react';

import FirstResultType from '@/assets/images/result/firstResultType.svg';
import ForthResultType from '@/assets/images/result/forthResultType.svg';
import SecondResultType from '@/assets/images/result/secondResultType.svg';
import ThirdResultType from '@/assets/images/result/thirdResultType.svg';
import { Button } from '@/components/common/button';
import { Typography } from '@/foundations/typography';
import { useToast } from '@/hooks';
import { useDownloadImage } from '@/hooks/useDownloadImage';
import { TestResultType } from '@/types/test';

// TODO : 백엔드와 논의하여 resultTypeId 프로퍼티 결정
const ImageBox = ({ resultTypeId = 4 }: { resultTypeId: TestResultType['ResultTypeid'] }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { onDownloadImage } = useDownloadImage({ imageRef });
  const toast = useToast();

  const handleDownloadImage = async () => {
    await onDownloadImage();
    await toast({ type: 'default', message: '이미지를 저장하였습니다.' });
  };
  return (
    <>
      <div ref={imageRef}>{resultTypeMap[resultTypeId]}</div>
      <div className="flex items-center gap-5xs py-xs">
        <Button variant="empty" onClick={handleDownloadImage} className="h-[30px]">
          <Typography type="body2" className=" border-b-2 border-[#5382FF] text-[#5382FF]">
            이미지 저장하기
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default ImageBox;

// HELP: 더 좋은 방법이 있을까요!?
// svg가 tsx 파일에서 가능하여 constants로 뺴지 않았습니다.
const resultTypeMap = {
  1: <FirstResultType />,
  2: <SecondResultType />,
  3: <ThirdResultType />,
  4: <ForthResultType />,
};
