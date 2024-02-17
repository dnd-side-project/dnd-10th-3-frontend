'use client';

import { useFormContext } from 'react-hook-form';

import { CharCounter } from '@/components/shared';
import { MAX_TITLE_LENGTH } from '@/schema/CreateVoteSchema';

import { CreateVoteInput } from './CreateVoteForm';

const TitleInput = () => {
  const { register, watch } = useFormContext<CreateVoteInput>();

  return (
    <div className="flex gap-3xs">
      <input
        placeholder="제목을 입력해 주세요"
        className="w-full text-lg placeholder:text-gray-400 focus:outline-none"
        maxLength={MAX_TITLE_LENGTH}
        {...register('title')}
      />
      <CharCounter maxLength={MAX_TITLE_LENGTH} targetString={watch('title') ?? ''} />
    </div>
  );
};

export default TitleInput;
