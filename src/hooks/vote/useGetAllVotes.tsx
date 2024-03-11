import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { CATEGORY_TAB } from '@/constants/category';

//TODO : useGetAllVotes 함수에서 두가지 역할을 하는데 분리해야함.
export const useGetAllVotes = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') as string;
  const findCategoryNameByParam = CATEGORY_TAB.find((category) => category.params === tab);
  const currentTab = findCategoryNameByParam?.name ?? ('전체' as string);

  return useQuery({
    queryKey: queryKey.vote.lists(),
    queryFn: donworryApi.vote.getAllVotes,
    select: ({ data }) => {
      if (currentTab === '전체') return data;

      const result = data.filter((item) => item.category === currentTab);
      return result;
    },
  });
};
