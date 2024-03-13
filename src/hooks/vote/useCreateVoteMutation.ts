import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { VoteFormData } from '@/api/vote/types';
import { CreateVoteInput } from '@/app/vote/create/_components/CreateVoteForm';
import { useToast } from '@/hooks';

const useCreateVoteMutation = () => {
  const toast = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: submitVote } = useMutation({
    mutationFn: (data: CreateVoteInput) => {
      const formData: VoteFormData = new FormData();
      formData.append(
        'voteRequestDto',
        JSON.stringify({
          title: data.title,
          content: data.content,
          category: data.category,
          selections: data.selections.map((selection) => ({ content: selection.content })),
          closeDate: dayjs().format('YYYY-MM-DD'),
        }),
      );
      data.selections.forEach((selection) => {
        formData.append('images', selection.img);
      });
      return donworryApi.vote.postVote(formData);
    },
    onSuccess: (data) => {
      toast({ message: 'VOTE_UPLOAD_SUCCESS' });
      queryClient.invalidateQueries({ queryKey: queryKey.vote.lists(), refetchType: 'all' });
      router.replace(`/vote/${data.id}`);
    },
    onError: () => {
      toast({ message: 'VOTE_UPLOAD_FAIL' });
    },
  });

  return submitVote;
};

export default useCreateVoteMutation;
