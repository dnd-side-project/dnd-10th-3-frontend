import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/button';
import { Typography } from '@/components/common/typography';
import { TOAST_MESSAGES } from '@/constants/toast';
import ToastProvider from '@/contexts/toast/ToastProvider';
import { useToast } from '@/hooks';

import { Toast, ToastContainer } from '.';

const meta = {
  title: 'components/common/toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: () => (
    <div className="flex w-[360px] flex-col gap-3xs">
      <Toast type="default" message={TOAST_MESSAGES.VOTE_UPLOAD_SUCCESS.text} />
      <Toast type="default" message={TOAST_MESSAGES.VOTING_SUCCESS.text} />
      <Toast type="default" message={TOAST_MESSAGES.REPLY_REGISTER_SUCCESS.text} />
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="flex w-[360px] flex-col gap-3xs">
      <Toast type="warning" message={TOAST_MESSAGES.VOTE_UPLOAD_FAIL.text} />
      <Toast type="warning" message={TOAST_MESSAGES.VOTING_FAIL.text} />
      <Toast type="warning" message={TOAST_MESSAGES.REPLY_REGISTER_FAIL.text} />
    </div>
  ),
};

const BasicViewExample = () => {
  const toast = useToast();

  return <Button onClick={() => toast({ message: 'VOTE_MODIFY_SUCCESS' })}>토스트 열기</Button>;
};

export const BasicView: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="bg-slate-200">
          <div className="layout bg-white">
            <ToastContainer />
            <Story />
          </div>
        </div>
      </ToastProvider>
    ),
  ],
  render: () => <BasicViewExample />,
};

const ScrollViewExample = () => {
  const toast = useToast();

  return (
    <div className="flex flex-col items-center justify-center gap-4xs p-3xs">
      {Array.from({ length: 20 }).map((_, index) => (
        <Typography key={index} type="body3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus quidem eum
          consequatur eos aspernatur sit pariatur nesciunt asperiores illum.
        </Typography>
      ))}
      <Button width="full" onClick={() => toast({ message: 'REPLY_DELETE_FAIL' })}>
        토스트 열기
      </Button>
    </div>
  );
};

export const ScrollView: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="bg-slate-200">
          <div className="layout bg-white">
            <ToastContainer />
            <Story />
          </div>
        </div>
      </ToastProvider>
    ),
  ],
  render: () => <ScrollViewExample />,
};

export const Playground: Story = {
  args: {
    message: '토스트 메시지',
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'warning'],
    },
  },
  render: (args) => (
    <div className="flex w-[360px] flex-col gap-3xs">
      <Toast {...args} />
    </div>
  ),
};
