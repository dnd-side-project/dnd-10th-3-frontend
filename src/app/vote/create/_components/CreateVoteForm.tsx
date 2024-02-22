'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import compact from 'lodash.compact';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/button';
import { Divider } from '@/components/common/divider';
import { Textarea as ContentInput } from '@/components/common/textarea';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';
import { useToast } from '@/hooks';
import { createVoteSchema } from '@/schema/CreateVoteSchema';

import { CategorySelector, TitleInput, VoteDateForm, VoteForm } from '.';

export type CreateVoteInput = z.infer<typeof createVoteSchema>;

const CreateVoteForm = () => {
  const methods = useForm<CreateVoteInput>({
    resolver: zodResolver(createVoteSchema),
    defaultValues: {
      category: '',
      title: '',
      content: '',
      selections: [
        { content: '', img: null },
        { content: '', img: null },
      ],
      closeDate: '',
    },
  });
  const toast = useToast();

  const onSubmit: SubmitHandler<CreateVoteInput> = () => {};

  const handleFormInvalid: SubmitErrorHandler<CreateVoteInput> = (errors) => {
    if (errors.category) {
      toast({ type: 'warning', message: errors.category.message ?? '' });
    } else if (errors.title) {
      toast({ type: 'warning', message: errors.title.message ?? '' });
    } else if (errors.content) {
      toast({ type: 'warning', message: errors.content.message ?? '' });
    } else if (errors.selections) {
      if (Array.isArray(errors.selections)) {
        toast({ type: 'warning', message: compact(errors.selections)[0].content?.message });
      } else {
        toast({ type: 'warning', message: '투표 항목을 확인해 주세요' });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <Header className="z-auto bg-white">
        <Button
          icon="x"
          iconOnly
          variant="empty"
          iconColor="gray-1000"
          iconSize={15}
          className="!p-0"
        />
        <Typography type="body1">투표 만들기</Typography>
        <Button
          variant="empty"
          className="!p-0"
          onClick={methods.handleSubmit(onSubmit, handleFormInvalid)}
        >
          완료
        </Button>
      </Header>

      <CategorySelector />
      <Divider color="gray-100" />
      <div className="flex grow flex-col gap-3xs px-2xs py-3xs">
        <TitleInput />
        <ContentInput
          placeholder="고민 내용을 입력해 주세요"
          maxLength={150}
          className="max-h-[340px] min-h-[88px] grow"
          {...methods.register('content')}
        />
        <VoteForm />
        <VoteDateForm />
      </div>
    </FormProvider>
  );
};

export default CreateVoteForm;
