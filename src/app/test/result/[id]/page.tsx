import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import PrefetchHydration from '@/contexts/reactQuery/PrefetchHydration';

import { ResultContents } from './_components';

type Props = {
  params: { id: string };
};

const ResultPage = ({ params }: Props) => {
  const id = +params['id'];

  return (
    <PrefetchHydration
      queryKey={queryKey.test.result(id)}
      queryFn={() => donworryApi.test.getResultById(id)}
    >
      <ResultContents id={id} />;
    </PrefetchHydration>
  );
};

export default ResultPage;
