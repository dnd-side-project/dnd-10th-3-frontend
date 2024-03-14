'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Typography } from '@/components/common/typography';
import { VoteItem } from '@/components/features/vote/voteItem';
import { MAX_ITEM_LENGTH, MAX_VOTE_COUNT, MIN_VOTE_COUNT } from '@/schema/CreateVoteSchema';

import { VoteItemImgForm } from '.';
import { CreateVoteInput } from './CreateVoteForm';

const VoteItemForm = () => {
  const { control, register } = useFormContext<CreateVoteInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'selections',
  });

  return (
    <section className="flex flex-col gap-3xs rounded-2xl border border-gray-100 p-3xs">
      <Typography type="title4" className="flex items-center gap-6xs text-gray-600">
        <Icon icon="votebox" size={18} color="gray-300" />
        투표
      </Typography>

      <div className="flex flex-col gap-5xs">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3xs">
            <Button
              variant="empty"
              iconOnly
              icon="remove"
              iconColor={fields.length <= MIN_VOTE_COUNT ? 'gray-100' : 'gray-300'}
              className="!p-0"
              disabled={fields.length <= MIN_VOTE_COUNT}
              onClick={() => remove(index)}
            />
            <VoteItem mode="input">
              <VoteItem.Input
                key={field.id}
                placeholder="텍스트를 입력해 주세요."
                maxLength={MAX_ITEM_LENGTH}
                {...register(`selections.${index}.content` as const)}
              />
              <VoteItemImgForm index={index} />
            </VoteItem>
          </div>
        ))}
      </div>
      <Button
        icon="add"
        width="full"
        variant="secondary"
        iconColor={fields.length >= MAX_VOTE_COUNT ? 'gray-400' : 'gray-1000'}
        iconSize={14}
        className="text-sm"
        onClick={() => append({ content: '', img: '' })}
        disabled={fields.length >= MAX_VOTE_COUNT}
      >
        항목 추가
      </Button>
    </section>
  );
};

export default VoteItemForm;
