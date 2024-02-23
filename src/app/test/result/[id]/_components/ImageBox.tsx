'use client';

import { useRef } from 'react';

import FirstResultType from '@/assets/images/result/firstResultType.svg';
import ForthResultType from '@/assets/images/result/forthResultType.svg';
import SecondResultType from '@/assets/images/result/secondResultType.svg';
import ThirdResultType from '@/assets/images/result/thirdResultType.svg';
import { Button } from '@/components/common/button';
import { Typography } from '@/foundations/typography';
import { useDownloadImage } from '@/hooks/useDownloadImage';
import { TestResultFormType } from '@/types/test';

// TODO : 백엔드와 논의하여 resultTypeId 프로퍼티 결정
const ImageBox = ({ temperature }: { temperature: TestResultFormType['temperature'] }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { onDownloadImage } = useDownloadImage({ imageRef });

  const handleDownloadImage = async () => {
    await onDownloadImage();
  };

  const resultTypeMap: Record<TestResultFormType['temperature'], React.ReactNode> = {
    0: <FirstResultType />,
    36: <SecondResultType />,
    70: <ThirdResultType />,
    100: <ForthResultType />,
  };
  return (
    <>
      <div ref={imageRef}>{resultTypeMap[temperature]}</div>
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
