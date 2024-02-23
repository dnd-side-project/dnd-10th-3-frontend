import { Meta } from '@storybook/react';

import { Divider } from '@/components/common/divider';

import { Typography } from '../typography';

const meta = {
  title: 'foundation/Colors',
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  argTypes: {},
} as Meta;

export default meta;

//TODO : map으로 효율적으로 color를 보여주면 용이할 것 같다.
export const Default = {
  render: () => {
    return (
      <div>
        <Typography type={'title1'}>주요 컬러</Typography>
        <Typography type={'body3'}>
          브랜드를 대표하는 컬러로, 포인트 컬러로 주로 사용합니다.
        </Typography>
        <Divider />
        <div className="flex flex-wrap gap-10">
          <div>
            <div className="mb-4 h-16 w-[300px] bg-primary-100 hover:shadow-xl">primary-100</div>
            <div className="mb-4 h-16 w-[300px] bg-primary-200 hover:shadow-xl">primary-200</div>
            <div className="mb-4 h-16 w-[300px] bg-primary-300 hover:shadow-xl">primary-300</div>
            <div className="mb-4 h-16 w-[300px] bg-primary-400 hover:shadow-xl">primary-400</div>
            <div className="mb-4 h-16 w-[300px] bg-primary-500 hover:shadow-xl">primary-500</div>
            <div className="mb-4 h-16 w-[300px] bg-primary-600 hover:shadow-xl">primary-600</div>
            <div className="mb-4 h-16 w-[300px] bg-primary-700 hover:shadow-xl">primary-700</div>
          </div>
        </div>
        <Divider />
        <Typography type={'title1'}>보조 컬러</Typography>
        <Typography type={'body3'}>
          배경색으로 사용하거나 성공, 경고 등 사용자에게 시각적인 피드백을 제공할 때 사용합니다.
        </Typography>
        <Divider />
        <div className="flex flex-col">
          <div className="mb-4 h-16 w-[300px] bg-gray-50 hover:shadow-xl">gray-50</div>
          <div className="mb-4 h-16 w-[300px] bg-gray-100 hover:shadow-xl">gray-100</div>
          <div className="mb-4 h-16 w-[300px] bg-gray-200 hover:shadow-xl">gray-200</div>
          <div className="mb-4 h-16 w-[300px] bg-gray-300 hover:shadow-xl">gray-300</div>
          <div className="mb-4 h-16 w-[300px] bg-gray-400 text-white  hover:shadow-xl">
            gray-400
          </div>
          <div className="mb-4 h-16 w-[300px] bg-gray-500 text-white  hover:shadow-xl">
            gray-500
          </div>
          <div className="mb-4 h-16 w-[300px] bg-gray-600 text-white hover:shadow-xl">gray-600</div>
        </div>
      </div>
    );
  },
};

export const Gradient = {
  render: () => (
    <div>
      <Typography type={'title1'}>Gradient 컬러</Typography>
      <Typography type={'body3'}>Gradient를 공유합니다.</Typography>
      <Divider />
      <div className="flex flex-col">
        <Typography type={'body3'}>mainGradient</Typography>
        <div className="mb-4 h-96 w-[300px] bg-mainGradient hover:shadow-xl"></div>
      </div>
    </div>
  ),
};
