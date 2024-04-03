import { Divider } from '@/components/common/divider';

import { Replies, VoteDetail } from './_component';

type Props = {
  params: { slug: string };
};

const VoteDetailPage = ({ params }: Props) => {
  const voteId = +params.slug;

  return (
    <>
      <VoteDetail voteId={voteId} />
      <Divider height={8} />
      <Replies voteId={voteId} />
    </>
  );
};

export default VoteDetailPage;
