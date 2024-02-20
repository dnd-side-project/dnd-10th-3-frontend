'use client';

import { useRef } from 'react';

import FirstResultType from '@/assets/images/result/firstResultType.svg';
import ForthResultType from '@/assets/images/result/forthResultType.svg';
import SecondResultType from '@/assets/images/result/secondResultType.svg';
import ThirdResultType from '@/assets/images/result/thirdResultType.svg';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/foundations/typography';
import { useDownloadImage } from '@/hooks/useDownloadImage';
import { Range } from '@/types/util';

// TODO : 백엔드와 논의하여 resultTypeId 프로퍼티 결정
const ImageBox = ({ resultTypeId = 4 }: { resultTypeId: Range<1, 5> }) => {
  const imageRef = useRef<HTMLButtonElement>(null);
  const { onDownloadImage } = useDownloadImage({ imageRef });

  const handleDownloadImage = async () => {
    await onDownloadImage();
  };
  return (
    <article className="flex flex-col items-center justify-center px-2xs">
      <button onClick={handleDownloadImage} ref={imageRef}>
        {resultTypeMap[resultTypeId]}
      </button>
      <div className="flex items-center gap-5xs py-3xs">
        <Icon icon="caretUp" color="gray-300" size={12} />
        <Typography type="body2" className="text-gray-500">
          이미지 꾹 - 눌러서 저장하기
        </Typography>
        <Icon icon="caretUp" color="gray-300" size={12} />
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
