import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ControlTab } from '.';

const meta: Meta<typeof ControlTab> = {
  title: 'components/common/controlTab',
  component: ControlTab,
};

export default meta;

type Story = StoryObj<typeof ControlTab>;

const ControlItems = ['등록순', '공감순'] as const;

const ControlTabExample = () => {
  const [selectedTab, setSelectedTab] = useState<(typeof ControlItems)[number]>('등록순');

  return (
    <ControlTab
      controlTabItems={ControlItems}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    />
  );
};

export const Basic: Story = {
  render: () => <ControlTabExample />,
};
