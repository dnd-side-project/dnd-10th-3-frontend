import { Header } from '@/components/layout/header';

import { ResultContents } from './_components';

type Props = {
  params: { id: string };
};

const ResultPage = ({ params }: Props) => {
  const id = +params['id'];

  return (
    <>
      <Header>
        <Header.Previous />
      </Header>
      <ResultContents id={id} />;
    </>
  );
};

export default ResultPage;
