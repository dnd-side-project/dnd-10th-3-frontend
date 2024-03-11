import type { Meta, StoryObj } from '@storybook/react';

import { ResultCard, ResultCardContainer } from '.';

const meta = {
  title: 'components/features/test/resultCard',
  component: ResultCard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="layout flex flex-col gap-5xs">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof ResultCard>;

export const Basic: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <ResultCard
      result={{
        id: 1,
        age: '20대',
        gender: '남자',
        buddy: '김워리',
        trust: 1,
        love: 2,
        talk: 3,
        temperature: 0,
        imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/donworry/1.png',
        description:
          '내 미래 결혼식에서 \n끝내 나타나지 않을 가능성이 높아요.\n갑자기 모바일 청첩장만 받아 당황했나요?\n축하 이모티콘으로 마음만 보내도 충분해요.\n현명한 결정 기다릴게요~ ',
        title: '축하 이모티콘 한 큰 술',
        createdAt: '1709904851988',
      }}
    />
  ),
};

export const WithContainer: Story = {
  render: () => (
    <ResultCardContainer>
      <ResultCard
        result={{
          id: 1,
          age: '20대',
          gender: '남자',
          buddy: '김워리',
          trust: 1,
          love: 2,
          talk: 3,
          temperature: 0,
          imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/donworry/1.png',
          description:
            '내 미래 결혼식에서 \n끝내 나타나지 않을 가능성이 높아요.\n갑자기 모바일 청첩장만 받아 당황했나요?\n축하 이모티콘으로 마음만 보내도 충분해요.\n현명한 결정 기다릴게요~ ',
          title: '축하 이모티콘 한 큰 술',
          createdAt: '1709904851988',
        }}
      />
      <ResultCard
        result={{
          id: 1,
          age: '20대',
          gender: '남자',
          buddy: '김워리',
          trust: 1,
          love: 2,
          talk: 3,
          temperature: 36,
          imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/donworry/1.png',
          description:
            '내 미래 결혼식에서 \n끝내 나타나지 않을 가능성이 높아요.\n갑자기 모바일 청첩장만 받아 당황했나요?\n축하 이모티콘으로 마음만 보내도 충분해요.\n현명한 결정 기다릴게요~ ',
          title: '축하 이모티콘 한 큰 술',
          createdAt: '1709904851988',
        }}
      />
      <ResultCard
        result={{
          id: 1,
          age: '20대',
          gender: '남자',
          buddy: '김워리',
          trust: 1,
          love: 2,
          talk: 3,
          temperature: 70,
          imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/donworry/1.png',
          description:
            '내 미래 결혼식에서 \n끝내 나타나지 않을 가능성이 높아요.\n갑자기 모바일 청첩장만 받아 당황했나요?\n축하 이모티콘으로 마음만 보내도 충분해요.\n현명한 결정 기다릴게요~ ',
          title: '축하 이모티콘 한 큰 술',
          createdAt: '1709904851988',
        }}
      />
      <ResultCard
        result={{
          id: 1,
          age: '20대',
          gender: '남자',
          buddy: '김워리',
          trust: 1,
          love: 2,
          talk: 3,
          temperature: 100,
          imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/donworry/1.png',
          description:
            '내 미래 결혼식에서 \n끝내 나타나지 않을 가능성이 높아요.\n갑자기 모바일 청첩장만 받아 당황했나요?\n축하 이모티콘으로 마음만 보내도 충분해요.\n현명한 결정 기다릴게요~ ',
          title: '축하 이모티콘 한 큰 술',
          createdAt: '1709904851988',
        }}
      />
    </ResultCardContainer>
  ),
};
