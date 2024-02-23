import { Button } from '@/components/common/button';
import { Divider } from '@/components/common/divider';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { Typography } from '@/foundations/typography';

import { Replies, VoteExtraDetail } from './_component';

const DummyData = {
  id: 1,
  user: {
    createdAt: '2024-02-19T08:19:01.642Z',
    modifiedAt: '2024-02-19T08:19:01.642Z',
    id: 0,
    email: 'string',
    nickname: '닉네임',
    avatar: 'string',
  },
  title: '갑자기 연락온 동창 축의금 얼마할까요? 고민이 됩니다.',
  content:
    '제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락안하고 지내다가 최근에 연락이 되었어요. 옛날 생각이 나서 가야할 것 같은데 축의금이 고민이네요! 어떻게 할까요?',
  selections: ['블랙 트위드 원피스', '핑크 정장 세트'],
  likes: 3,
  views: 0,
  voters: 10,
  status: false,
  category: '축의금',
  closeDate: '2024-02-19',
  createdAt: 'string',
  updatedAt: 'string',
  selected: 1,
};

const VoteDetailPage = () => {
  const { id, title, content, likes, status, views, user, voters, selections } = DummyData;

  return (
    <>
      <section className="h-fit px-2xs">
        <VoteExtraDetail nickname={user.nickname} views={views} category="축의금" />

        <Typography type="title2" className="mt-3xs text-gray-1000">
          Q. {title}
        </Typography>
        <Typography type="body3" className="mb-3xs mt-4xs text-gray-500">
          {content}
        </Typography>

        <VoteCard>
          <VoteCard.Header
            remainingDay={{ day: 1, hour: 1 }} // FIXME
            voter={voters}
            fontColor="text-gray-600"
          />
          <VoteCard.VoteItemGroup>
            {selections.map((selection) => (
              <VoteItem key={selection}>
                <VoteItem.Radio />
                <VoteItem.Text>{selection}</VoteItem.Text>
              </VoteItem>
            ))}
          </VoteCard.VoteItemGroup>
          <VoteCard.SubmitButton>
            <Button variant="primary" width="full">
              투표 참여하기
            </Button>
          </VoteCard.SubmitButton>
        </VoteCard>

        <div className="mb-3xs mt-sm flex justify-between">
          <Button
            icon={status ? 'filledHeart' : 'heart'}
            iconColor="primary-700"
            variant="empty"
            className="gap-6xs !p-0 text-[14px] text-gray-600 "
          >
            {likes}
          </Button>
          <Button iconOnly icon="share" variant="empty" className="!p-0" />
        </div>
      </section>

      <Divider height={8} />

      <Replies voteId={id} />
    </>
  );
};

export default VoteDetailPage;
