import { useMutation } from '@tanstack/react-query';

import { donworryApi } from '@/api';

const useUpdateVoteReplyMutation = () => {
  return useMutation({
    mutationFn: donworryApi.vote.updateVoteReply,
  });
};

export default useUpdateVoteReplyMutation;
