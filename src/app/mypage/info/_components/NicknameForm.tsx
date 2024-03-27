'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/button';
import { Typography } from '@/components/common/typography';
import { CharCounter } from '@/components/shared';
import { useToast } from '@/hooks';
import { useGetUser, useUpdateNicknameMutation } from '@/hooks/auth';
import { MAX_NICK_LENGTH, updateNicknameSchema } from '@/schema/NicknameSchema';

export type UpdateNickname = z.infer<typeof updateNicknameSchema>;

const NicknameForm = () => {
  const { register, watch, handleSubmit } = useForm<UpdateNickname>({
    resolver: zodResolver(updateNicknameSchema),
    defaultValues: { nickname: '' },
  });
  const { mutate: updateNickname, isPending } = useUpdateNicknameMutation();
  const { data: user } = useGetUser();
  const toast = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<UpdateNickname> = ({ nickname }) => {
    if (user?.nickname === nickname) {
      router.replace('/mypage');
    } else {
      updateNickname({ nickname }, { onSuccess: () => router.replace('/mypage') });
    }
  };

  const handleFormInvalid: SubmitErrorHandler<UpdateNickname> = (errors) => {
    toast({ type: 'warning', message: errors.nickname?.message ?? '닉네임을 확인해 주세요' });
  };

  return (
    <form className="mt-2xs">
      <div className="mb-xs flex flex-col gap-5xs">
        <div className="flex justify-between">
          <Typography type="body3">
            닉네임<span className="text-warning">*</span>
          </Typography>
          <CharCounter maxLength={MAX_NICK_LENGTH} targetString={watch('nickname') ?? ''} />
        </div>
        <input
          className="rounded-lg border border-gray-100 p-3xs focus:outline-none"
          maxLength={MAX_NICK_LENGTH}
          placeholder="닉네임을 입력해 주세요"
          {...register('nickname')}
        />
        <Typography type="body3" className="text-gray-400">
          닉네임을 입력해 주세요. (특수문자 제외)
        </Typography>
      </div>

      <Button
        type="submit"
        width="full"
        disabled={watch('nickname').length === 0 || isPending}
        isLoading={isPending}
        onClick={handleSubmit(onSubmit, handleFormInvalid)}
      >
        확인
      </Button>
    </form>
  );
};

export default NicknameForm;
