
import { domToJpeg } from 'modern-screenshot';
import { RefObject, useState } from 'react';

import { downloadFile } from '@/utils/image';

import useToast from './useToast';

type DownloadImageOption = {
  imageRef: RefObject<HTMLElement>;
}

// TODO : 필요한 옵션 알아봐서 추가할 예정
const defaultDownloadOption = {
  scale: 2,
};

export const useDownloadImage = ({  imageRef }: DownloadImageOption) => {

  const [isDownloading, setIsDownloading] = useState(false);
  const toast = useToast();

  const downloadOption = {
    height: 700,
    ...defaultDownloadOption,
  };

  const onDownloadImage = async () => {
    const image = imageRef.current;

    if (!image) return;

    try {
      setIsDownloading(true);

      const imageOption = downloadOption
      const imageUrl = await domToJpeg(image, imageOption);

    //   TODO: 동적으로 4개의 유형의 이름을 할당할 예정
      const IMAGE_FILE_NAME = '돈워리_결과_사진';


      downloadFile(imageUrl, IMAGE_FILE_NAME);
      toast({ type: 'default', message: '이미지를 저장하였습니다.' })
    } catch (error) {
      toast({message:'IMAGE_SAVE_FAIL'})
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    isDownloading,
    onDownloadImage,
  };
};
