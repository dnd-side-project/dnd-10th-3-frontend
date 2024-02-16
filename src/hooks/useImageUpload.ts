import { ChangeEvent, useState } from 'react';

import { useToast } from '.';

const useImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
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
          setImageSrc((fileReader.result as string) || null);
          resolve();
        };
      });
    }
  };

  return { imageSrc, upload };
};

export default useImageUpload;
