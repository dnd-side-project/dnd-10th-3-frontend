import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { EmptyVoteLayout } from '@/components/layout/errors';
import { Typography } from '@/foundations/typography';

import VoteCard from './_component/VoteCard';
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
            <div className="flex flex-col">
              <div className="w-full p-xs">
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
              <ul className="flex flex-col gap-3xs">
                <VoteCard />
                <VoteCard />
                <VoteCard />
              </ul>
            </div>
          ) : (
            <EmptyVoteLayout />
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
