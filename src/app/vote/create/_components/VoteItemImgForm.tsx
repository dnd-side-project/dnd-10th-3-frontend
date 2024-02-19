'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { VoteItem } from '@/components/features/vote/voteItem';
import { ImageUploadButton } from '@/components/shared';
import { useImageUpload } from '@/hooks';

import { CreateVoteInput } from './CreateVoteForm';

type Props = {
  index: number;
};

const VoteItemImgForm = ({ index }: Props) => {
  const { setValue } = useFormContext<CreateVoteInput>();
  const { imageSrc, upload } = useImageUpload();

  useEffect(() => {
    setValue(`selections.${index}.img`, imageSrc);
  }, [imageSrc, index, setValue]);

  return (
    <>
      {imageSrc ? (
        <VoteItem.Img src={imageSrc} alt="uploaded" />
      ) : (
        <ImageUploadButton uploadHandler={upload} />
      )}
    </>
  );
};

export default VoteItemImgForm;
