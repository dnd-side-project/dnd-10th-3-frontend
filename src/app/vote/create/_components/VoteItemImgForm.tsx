'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { VoteItem } from '@/components/features/vote/voteItem';
import { ImageUploadButton } from '@/components/shared';
import { useUploadImage } from '@/hooks';

import { CreateVoteInput } from './CreateVoteForm';

type Props = {
  index: number;
};

const EMPTY_FILE = '';

const VoteItemImgForm = ({ index }: Props) => {
  const { setValue } = useFormContext<CreateVoteInput>();
  const { imageSrc, upload, previewImageSrc } = useUploadImage();

  useEffect(() => {
    setValue(`selections.${index}.img`, imageSrc ?? EMPTY_FILE);
  }, [imageSrc, index, setValue]);

  return (
    <>
      {previewImageSrc ? (
        <VoteItem.Img src={previewImageSrc} alt="uploaded" />
      ) : (
        <ImageUploadButton uploadHandler={upload} />
      )}
    </>
  );
};

export default VoteItemImgForm;
