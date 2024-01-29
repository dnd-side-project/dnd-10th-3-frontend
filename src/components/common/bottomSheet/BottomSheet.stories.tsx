import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/button';

import { BottomSheet } from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'components/common/bottomSheet',
  component: BottomSheet,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    onDismiss: { action: 'BottomSheet is closed' },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const contents = Array.from({ length: 10 }, (_, i) => `내용 ${i + 1}`);

export const BasicBottomSheet: Story = {
  args: {
    open: true,
    HeaderComponent: <p className=" flex items-center justify-between text-xl font-bold">해더</p>,
    FooterComponent: <Button>적용</Button>,
    children: (
      <ul>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    ),
  },
};
