import type { Meta, StoryObj } from '@storybook/react';
import Link from 'next/link';

import { EmptyLayout } from '.';

const meta: Meta<typeof EmptyLayout> = {
  title: 'components/layout/emptyLayout',
  parameters: { layout: 'centered' },
  component: EmptyLayout,
};

export default meta;

type Story = StoryObj<typeof EmptyLayout>;

export const EmptyVote: Story = {
  render: () => (
    <EmptyLayout message={`아직 투표가 없어요\n투표를 만들어 고민을 해결해 보세요`}>
      <Link
        href="/vote/create"
        className="rounded-lg bg-gray-1000 px-xs py-4xs font-semibold text-white"
      >
        투표 만들기
      </Link>
    </EmptyLayout>
  ),
};

export const EmptyTest: Story = {
  // FIXME: 임시 문구
  render: () => (
    <EmptyLayout message={`아직 진행한 테스트가 없어요\n테스트하고 축의금 금액 알아봐요`}>
      <Link href="/test" className="rounded-lg bg-gray-1000 px-xs py-4xs font-semibold text-white">
        테스트 하기
      </Link>
    </EmptyLayout>
  ),
};
