import { ResultContents } from './_components';

type Props = {
  params: { id: string };
};

const ResultPage = ({ params }: Props) => {
  const id = +params['id'];

  return <ResultContents id={id} />;
};

export default ResultPage;
