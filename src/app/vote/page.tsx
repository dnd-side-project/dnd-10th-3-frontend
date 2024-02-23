import { Suspense } from 'react';

import VoteContents from './_component/VoteContents';

const VotePage = () => {
  return (
    <Suspense>
      <VoteContents />
    </Suspense>
  );
};

export default VotePage;
