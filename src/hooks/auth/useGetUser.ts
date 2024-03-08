import { useQuery } from '@tanstack/react-query';
import { hasCookie } from 'cookies-next';

import { IS_LOGIN } from '@/constants/auth';
import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { UserInfo } from '@/types/user';

const getUser = async () => {
  const response = await get<SuccessResponse<UserInfo>>('/user');
  return response.data.data;
};

const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: hasCookie(IS_LOGIN),
    throwOnError: true,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetUser;
