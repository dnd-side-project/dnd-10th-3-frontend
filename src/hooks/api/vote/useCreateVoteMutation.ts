import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { CreateVoteInput } from '@/app/vote/create/_components/CreateVoteForm';
import { useToast } from '@/hooks';
import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

interface VoteFormData extends FormData {
  append(name: 'voteRequestDto' | 'images', value: string | Blob): void;
}

type PostVoteRequest = CreateVoteInput;

type PostVoteResponse = {
  id: number;
  // NOTE: 응답 더 많이 오는데 필요 없음
};

const useCreateVoteMutation = () => {
  const toast = useToast();

  const { mutate: submitVote } = useMutation({
    mutationFn: (data: PostVoteRequest) => {
      const formData: VoteFormData = new FormData();
      formData.append(
        'voteRequestDto',
        JSON.stringify({
          title: data.title,
          content: data.content,
          category: data.category,
          selections: data.selections.map((selection) => ({ content: selection.content })),
          closeDate: dayjs().format('YYYY-MM-DD-d'),
        }),
      );
      data.selections.forEach((selection) => {
        formData.append('images', selection.img);
      });
      return post<SuccessResponse<PostVoteResponse>>('/vote', formData, {
        headers: { 'Content-Type': 'form-data' },
      });
    },
    onSuccess: (data) => {
      const { id } = data.data.data;
      // TODO : 빌드시 lint 에러로 콘솔 처리
      console.log(id)
      toast({ message: 'VOTE_UPLOAD_SUCCESS' });
      // TODO 쿼리키 만료
      // TODO router.push(`/vote/${id}`);
    },
    onError: () => {
      toast({ message: 'VOTE_UPLOAD_FAIL' });
    },
    retry: 2,
  });

  return submitVote;
};

export default useCreateVoteMutation;
