import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { EmptyVote } from '@/components/shared';
import { Typography } from '@/foundations/typography';

import VoteHeader from './_component/VoteHeader';
import VoteLayout from './_component/VoteLayout';

const VotePage = () => {
  const isVoteExist = true;
  return (
    <VoteLayout
      header={<VoteHeader />}
      contents={
        <>
          {isVoteExist ? (
            <div className="flex w-full flex-col">
              <div className="w-full p-3xs">
                <Typography type="heading1">
                  결혼식 참석시 <br /> 고민이었던 부분을 나눠보세요.
                </Typography>
                <div className="py-4xs">
                  <Input
                    placeholder="무엇이 고민이신가요?"
                    icon="search"
                    iconSide="left"
                    borderRadius="large"
                    bgcolor="gray"
                    className="text-[14px]"
                  />
                </div>
              </div>
              {/* TODO: Select*/}
              <div className="flex justify-end px-xs pb-3xs text-gray-400">
                <select>
                  <option>인기순</option>
                  <option>최신순</option>
                  <option>추천순</option>
                </select>
              </div>
              <ul className="flex flex-col gap-3xs p-3xs">
                <VoteCard className="shadow-thumb">
                  <VoteCard.Header categories="축의금" remainingDay={2} />
                  <VoteCard.Description
                    title="갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다."
                    content=" 제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
        되었어요. 옛날..."
                  />
                  <VoteCard.VoteItemGroup withBlur>
                    <VoteItem readOnly>
                      <VoteItem.Radio disabled />
                      <VoteItem.Text>5만원</VoteItem.Text>
                    </VoteItem>
                    <VoteItem readOnly>
                      <VoteItem.Radio disabled />
                      <VoteItem.Text>7만원</VoteItem.Text>
                    </VoteItem>
                  </VoteCard.VoteItemGroup>
                  <VoteCard.SubmitButton>
                    <Button variant="primary" width="full">
                      투표 참여하기
                    </Button>
                  </VoteCard.SubmitButton>
                  <VoteCard.Footer likes={48} view={48} voter={451} />
                </VoteCard>
                <VoteCard className="shadow-thumb">
                  <VoteCard.Header categories="축의금" remainingDay={2} />
                  <VoteCard.Description
                    title="갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다."
                    content=" 제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
        되었어요. 옛날..."
                  />
                  <VoteCard.VoteItemGroup withBlur>
                    <VoteItem readOnly>
                      <VoteItem.Radio disabled />
                      <VoteItem.Text>5만원</VoteItem.Text>
                    </VoteItem>
                    <VoteItem readOnly>
                      <VoteItem.Radio disabled />
                      <VoteItem.Text>7만원</VoteItem.Text>
                    </VoteItem>
                  </VoteCard.VoteItemGroup>
                  <VoteCard.SubmitButton>
                    <Button variant="primary" width="full">
                      투표 참여하기
                    </Button>
                  </VoteCard.SubmitButton>
                  <VoteCard.Footer likes={48} view={48} voter={451} />
                </VoteCard>
              </ul>
            </div>
          ) : (
            <EmptyVote />
          )}
        </>
      }
      footer={
        <>
          {isVoteExist ? (
            <Button
              icon="add"
              iconOnly
              className=" h-[56px] w-xl rounded-[100%] bg-primary-500"
              iconColor="white"
            />
          ) : null}
        </>
      }
    />
  );
};

export default VotePage;
