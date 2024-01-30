import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '@/components/common/divider';

import { Colors } from '.';
import { Typography } from '../typography';

const meta: Meta<typeof Colors> = {
  title: 'foundation/Colors',
  component: Colors,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Colors>;

export const Default: Story = {
  render: () => (
    <div>
      <Typography type={'title1'}>주요 컬러</Typography>
      <Typography type={'body3'}>
        브랜드를 대표하는 컬러로, 포인트 컬러로 주로 사용합니다.
      </Typography>
      <Divider />
      <div className="flex flex-col">
        <div className="bg-primary-100 mb-4 h-16 hover:shadow-xl w-[300px]">primary-100</div>
        <div className="bg-primary-200 mb-4 h-16 hover:shadow-xl w-[300px]">primary-200</div>
        <div className="bg-primary-300 mb-4 h-16 hover:shadow-xl w-[300px]">primary-300</div>
        <div className="bg-primary-400 mb-4 h-16 hover:shadow-xl w-[300px]">primary-400</div>
        <div className="bg-primary-500 mb-4 h-16 hover:shadow-xl w-[300px]">primary-500</div>
        <div className="bg-primary-600 mb-4 h-16 hover:shadow-xl w-[300px]">primary-600</div>
        <div className="bg-primary-700 mb-4 h-16 hover:shadow-xl w-[300px]">primary-700</div>
      </div>
      <Divider />
      <Typography type={'title1'}>보조 컬러</Typography>
      <Typography type={'body3'}>
        배경색으로 사용하거나 성공, 경고 등 사용자에게 시각적인 피드백을 제공할 때 사용합니다.
      </Typography>
      <Divider />
      <div className="flex flex-col">
        <div className="mb-4 h-16 hover:shadow-xl w-[300px] bg-gray-50">gray-50</div>
        <div className="mb-4 h-16 bg-gray-100 hover:shadow-xl w-[300px]">gray-100</div>
        <div className="mb-4 h-16 bg-gray-200 hover:shadow-xl w-[300px]">gray-200</div>
        <div className="mb-4 h-16 bg-gray-300 hover:shadow-xl w-[300px]">gray-300</div>
        <div className="mb-4 h-16 bg-gray-400 text-white hover:shadow-xl  w-[300px]">gray-400</div>
        <div className="mb-4 h-16 bg-gray-500 text-white hover:shadow-xl  w-[300px]">gray-500</div>
        <div className="mb-4 h-16 bg-gray-600 text-white hover:shadow-xl w-[300px]">gray-600</div>
      </div>
    </div>
  ),
};

export const Gradient: Story = {
  render: () => (
    <div>
      <Typography type={'title1'}>Gradient 컬러</Typography>
      <Typography type={'body3'}>Gradient를 공유합니다.</Typography>
      <Divider />
      <div className="flex flex-col">
        <Typography type={'body3'}>mainGradient</Typography>
        <div className="mb-4 h-96 bg-mainGradient hover:shadow-xl w-[300px]"></div>
      </div>
    </div>
  ),
};
