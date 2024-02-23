import { ChangeEvent, useState } from 'react';

import { useToast } from '.';

const useImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | File>('');
  const [previewImageSrc, setPreviewImageSrc] = useState<string | null>(null);
  const toast = useToast();

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      if (files.length <= 0) return;

      const file = files[0];
      if (!file.type.includes('image')) {
        toast({ message: 'IMAGE_FILE_ONLY' });
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      return new Promise<void>((resolve) => {
        fileReader.onload = () => {
          setPreviewImageSrc((fileReader.result as string) || null);
          setImageSrc(file ?? '');
          resolve();
        };
      });
    }
  };

  return { imageSrc, upload, previewImageSrc };
};

export default useImageUpload;
