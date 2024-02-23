import { Divider } from '@/components/common/divider';

import { Replies, VoteDetail } from './_component';

type Props = {
  params: { slug: string };
};

const VoteDetailPage = async ({ params }: Props) => {
  const voteId = params.slug;

  return (
    <>
      <VoteDetail voteId={Number(voteId)} />
      <Divider height={8} />
      <Replies voteId={Number(voteId)} />
    </>
  );
};

export default VoteDetailPage;
