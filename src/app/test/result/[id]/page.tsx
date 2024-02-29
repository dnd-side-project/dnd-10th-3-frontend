import { TEST } from '@/api/test';
import { QUERY_KEY } from '@/constants/queryKey';
import PrefetchHydration from '@/contexts/reactQuery/PrefetchHydration';

import { ResultContents } from './_components';

type Props = {
  params: { id: string };
};

const ResultPage = ({ params }: Props) => {
  const id = +params['id'];

  return (
    <PrefetchHydration
      queryKey={QUERY_KEY.TEST.GET_RESULT_BY_ID(id)}
      queryFn={() => TEST.GET_RESULT_BY_ID(id)}
    >
      <ResultContents id={id} />;
    </PrefetchHydration>
  );
};

export default ResultPage;
