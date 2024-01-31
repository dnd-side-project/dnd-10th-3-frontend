import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '@/components/common/divider';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'foundation/Typography',
  component: Typography,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['heading2', 'heading3', 'body4', 'body5', 'subLabel2'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => (
    <>
      <Typography type={'heading1'} className="pb-lg ">
        Typography
      </Typography>
      <Typography type={'heading2'} className="pb-4xs">
        heading
      </Typography>
      <Typography type={'heading1'}>축의금 결정이 너무 어려웠나요?!, 24px, bold</Typography>
      <Typography type={'heading2'}>축의금 결정이 너무 어려웠나요?! , 22px, semibold</Typography>
      <Typography type={'heading3'}>축의금 결정이 너무 어려웠나요?!, 18px, semibold</Typography>
      <Typography type={'heading4'}>축의금 결정이 너무 어려웠나요?!, 16px, semibold</Typography>
      <Divider />
      <Typography type={'heading2'} className="pb-4xs">
        title
      </Typography>
      <Typography type={'title1'}>축의금 결정이 너무 어려웠나요?!, 20px, semibold</Typography>
      <Typography type={'title2'}>축의금 결정이 너무 어려웠나요?!, 18px, semibold</Typography>
      <Typography type={'title3'}>축의금 결정이 너무 어려웠나요?!, 16px, semibold</Typography>
      <Typography type={'title4'}>축의금 결정이 너무 어려웠나요?!, 14px, semibold</Typography>
      <Typography type={'title5'}>축의금 결정이 너무 어려웠나요?!, 12px, semibold</Typography>
      <Divider />
      <Typography type={'heading2'} className="pb-4xs">
        paragraph(body)
      </Typography>
      <Typography type={'body1'}>축의금 결정이 너무 어려웠나요?!, 18px, medium</Typography>
      <Typography type={'body2'}>축의금 결정이 너무 어려웠나요?!, 16px, medium</Typography>
      <Typography type={'body3'}>축의금 결정이 너무 어려웠나요?!, 14px, medium</Typography>
      <Divider />
      <Typography type={'heading2'} className="pb-4xs">
        subLabel
      </Typography>
      <Typography type={'subLabel1'}>축의금 결정이 너무 어려웠나요?!, 16px, semibold</Typography>
      <Typography type={'subLabel2'}>축의금 결정이 너무 어려웠나요?!, 14px, semibold</Typography>
      <Divider />
      <Typography type={'heading2'} className="pb-4xs">
        caption
      </Typography>
      <Typography type={'caption1'}>축의금 결정이 너무 어려웠나요?!, 12px, medium</Typography>
      <Typography type={'caption2'}>축의금 결정이 너무 어려웠나요?!, 8px, medium</Typography>
    </>
  ),
};
