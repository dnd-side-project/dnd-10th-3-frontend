import { useQuery } from '@tanstack/react-query';
import { hasCookie } from 'cookies-next';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { IS_LOGIN } from '@/constants/auth';

const useGetUser = () => {
  return useQuery({
    queryKey: queryKey.auth.user,
    queryFn: donworryApi.auth.getUser,
    enabled: hasCookie(IS_LOGIN),
    throwOnError: true,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetUser;
