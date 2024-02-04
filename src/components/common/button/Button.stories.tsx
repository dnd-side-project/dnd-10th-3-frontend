import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { iconList } from '@/components/common/icon/assets';

import { Button } from '.';

const meta = {
  title: 'components/common/button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-5xs">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => (
    <>
      <div className="flex items-center justify-center gap-4xs">
        <Button variant="primary">버튼</Button>
        <Button variant="primary" disabled>
          버튼
        </Button>
        <Button variant="primary" width="full">
          버튼
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4xs">
        <Button variant="secondary">버튼</Button>
        <Button variant="secondary" disabled>
          버튼
        </Button>
        <Button variant="secondary" width="full">
          버튼
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4xs">
        <Button variant="empty">버튼</Button>
        <Button variant="empty" disabled>
          버튼
        </Button>
        <Button variant="empty" width="full">
          버튼
        </Button>
      </div>
    </>
  ),
};

export const ButtonWithIcon: Story = {
  render: () => (
    <>
      <div className="flex items-center justify-center gap-4xs">
        <Button icon="filledHeart" variant="primary">
          버튼
        </Button>
        <Button icon="filledHeart" variant="primary" disabled>
          버튼
        </Button>
        <Button icon="filledHeart" variant="secondary">
          버튼
        </Button>
        <Button icon="filledHeart" variant="secondary" disabled>
          버튼
        </Button>
        <Button icon="filledHeart" variant="empty">
          버튼
        </Button>
        <Button icon="filledHeart" variant="empty" disabled>
          버튼
        </Button>
        <Button icon="filledHeart" variant="primary" width="full">
          버튼
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4xs">
        <Button icon="filledHeart" variant="primary" iconSide="right">
          버튼
        </Button>
        <Button icon="filledHeart" variant="primary" iconSide="right" disabled>
          버튼
        </Button>
        <Button icon="filledHeart" variant="secondary" iconSide="right">
          버튼
        </Button>
        <Button icon="filledHeart" variant="secondary" iconSide="right" disabled>
          버튼
        </Button>
        <Button icon="filledHeart" variant="empty" iconSide="right">
          버튼
        </Button>
        <Button icon="filledHeart" variant="empty" iconSide="right" disabled>
          버튼
        </Button>
        <Button icon="filledHeart" variant="primary" iconSide="right" width="full">
          버튼
        </Button>
      </div>
    </>
  ),
};

export const IconOnlyButton: Story = {
  render: () => (
    <>
      <div className="flex items-center gap-4xs">
        <Button icon="filledHeart" iconOnly variant="primary" />
        <Button icon="filledHeart" iconOnly variant="primary" disabled />
        <Button icon="filledHeart" iconOnly variant="primary" width="full" />
        <Button icon="filledHeart" iconOnly variant="primary" width="full" disabled />
      </div>
      <div className="flex items-center gap-4xs">
        <Button icon="filledHeart" iconOnly variant="secondary" />
        <Button icon="filledHeart" iconOnly variant="secondary" disabled />
        <Button icon="filledHeart" iconOnly variant="secondary" width="full" />
        <Button icon="filledHeart" iconOnly variant="secondary" width="full" disabled />
      </div>
      <div className="flex items-center gap-4xs">
        <Button icon="filledHeart" iconOnly variant="empty" />
        <Button icon="filledHeart" iconOnly variant="empty" disabled />
        <Button icon="filledHeart" iconOnly variant="empty" width="full" />
        <Button icon="filledHeart" iconOnly variant="empty" width="full" disabled />
      </div>
    </>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <>
      <div className="flex items-center gap-4xs">
        <Button variant="primary" isLoading>
          버튼
        </Button>
        <Button variant="primary" isLoading disabled>
          버튼
        </Button>
        <Button variant="primary" icon="filledHeart" isLoading>
          버튼
        </Button>
        <Button variant="primary" icon="filledHeart" isLoading disabled>
          버튼
        </Button>
        <Button variant="primary" width="full" isLoading>
          버튼
        </Button>
      </div>
      <div className="flex items-center gap-4xs">
        <Button variant="secondary" isLoading>
          버튼
        </Button>
        <Button variant="secondary" isLoading disabled>
          버튼
        </Button>
        <Button variant="secondary" icon="filledHeart" isLoading>
          버튼
        </Button>
        <Button variant="secondary" icon="filledHeart" isLoading disabled>
          버튼
        </Button>
        <Button variant="secondary" width="full" isLoading>
          버튼
        </Button>
      </div>
      <div className="flex items-center gap-4xs">
        <Button variant="empty" isLoading>
          버튼
        </Button>
        <Button variant="empty" isLoading disabled>
          버튼
        </Button>
        <Button variant="empty" icon="filledHeart" isLoading>
          버튼
        </Button>
        <Button variant="empty" icon="filledHeart" isLoading disabled>
          버튼
        </Button>
        <Button variant="empty" width="full" isLoading>
          버튼
        </Button>
      </div>
    </>
  ),
};

const IconButtonWithDataComponent = () => {
  const [data, setData] = useState(0);

  return (
    <>
      <Button icon="filledHeart" variant={'primary'} onClick={() => setData((prev) => prev + 1)}>
        Click me! <span>{data}</span>
      </Button>
      <Button icon="filledHeart" variant={'secondary'} onClick={() => setData((prev) => prev + 1)}>
        Click me! <span>{data}</span>
      </Button>
      <Button icon="filledHeart" variant={'empty'} onClick={() => setData((prev) => prev + 1)}>
        Click me! <span>{data}</span>
      </Button>
    </>
  );
};

export const IconButtonWithData: Story = {
  render: () => <IconButtonWithDataComponent />,
};

export const Playground: Story = {
  args: {
    variant: 'primary',
    width: 'fit',
    children: '버튼',
    disabled: false,
    iconSide: 'left',
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'empty'],
    },
    width: {
      control: { type: 'inline-radio' },
      options: ['fit', 'full'],
    },
    children: {
      name: '버튼 라벨 (children)',
      control: 'text',
    },
    icon: {
      control: { type: 'select' },
      options: iconList,
    },
  },
};
