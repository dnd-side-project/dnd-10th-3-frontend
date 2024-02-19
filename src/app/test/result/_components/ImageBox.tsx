import Image from 'next/image';

import ResultType from '@/assets/images/resultType.png';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/foundations/typography';

const ImageBox = () => {
  return (
    <article className="flex flex-col items-center justify-center px-2xs ">
      <Image src={ResultType} width={335} height={487} alt="result-image" />
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
