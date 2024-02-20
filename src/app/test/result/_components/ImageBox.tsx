'use client';

import { useRef } from 'react';

import FirstResultType from '@/assets/images/result/firstResultType.svg';
import ForthResultType from '@/assets/images/result/forthResultType.svg';
import SecondResultType from '@/assets/images/result/secondResultType.svg';
import ThirdResultType from '@/assets/images/result/thirdResultType.svg';
import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { Typography } from '@/foundations/typography';
import { useDownloadImage } from '@/hooks/useDownloadImage';
import { Range } from '@/types/util';

// TODO : 백엔드와 논의하여 resultTypeId 프로퍼티 결정
const ImageBox = ({ resultTypeId = 4 }: { resultTypeId: Range<1, 5> }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { isDownloading, onDownloadImage } = useDownloadImage({ imageRef });

  const handleDownloadImage = async () => {
    await onDownloadImage();
  };
  return (
    <article className="flex flex-col items-center justify-center px-2xs">
      <div ref={imageRef}>{resultTypeMap[resultTypeId]}</div>
      <div className="flex items-center gap-5xs py-xs">
        <Button variant="empty" onClick={handleDownloadImage} className="h-[30px]">
          {isDownloading ? (
            <Spinner />
          ) : (
            <>
              <Typography type="body2" className=" border-b-2 border-gray-500 text-gray-500">
                이미지 저장하기
              </Typography>
            </>
          )}
        </Button>
      </div>
    </article>
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
