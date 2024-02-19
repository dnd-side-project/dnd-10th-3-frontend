'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { Icon } from '@/components/common/icon';
import { Typography } from '@/foundations/typography';
import { useDownloadImage } from '@/hooks/useDownloadImage';

const ImageBox = () => {
  const imageRef = useRef<HTMLButtonElement>(null);
  const { onDownloadImage } = useDownloadImage({ imageRef });

  const handleDownloadImage = async () => {
    await onDownloadImage();
  };
  return (
    <article className="flex flex-col items-center justify-center px-2xs">
      <button onClick={handleDownloadImage} ref={imageRef}>
        <Image
          src="https://velog.velcdn.com/images/sharphand1/post/18fa9fdc-5078-4477-82ed-0a4f9f5587a6/image.png"
          width={335}
          height={487}
          alt="result-image"
        />
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
