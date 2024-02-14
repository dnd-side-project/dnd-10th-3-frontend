import { Button } from '@/components/common/button';
import { Divider } from '@/components/common/divider';
import { Textarea } from '@/components/common/textarea';
import { Header } from '@/components/layout/header';
import { LetterCounter } from '@/components/shared';
import { Typography } from '@/foundations/typography';

import { CategorySelector, VoteDateForm, VoteForm } from '.';

const CreateVoteForm = () => {
  return (
    <>
      <Header className="z-auto bg-white">
        <Button
          icon="x"
          iconOnly
          variant="empty"
          iconColor="gray-1000"
          iconSize={15}
          className="!p-0"
        />
        <Typography type="body1">투표 만들기</Typography>
        <Button variant="empty" className="!p-0">
          완료
        </Button>
      </Header>

      <CategorySelector />
      <Divider color="gray-100" />
      <div className="flex grow flex-col gap-3xs px-2xs py-3xs">
        <div className="flex gap-3xs">
          <input
            placeholder="제목을 입력해 주세요"
            className="w-full text-lg placeholder:text-gray-400 focus:outline-none"
          />
          <LetterCounter maxCount={40} letters="" />
        </div>
        <Textarea
          placeholder="고민 내용을 입력해 주세요"
          maxLength={150}
          className="max-h-[340px] min-h-[88px] grow"
        />
        <VoteForm />
        <VoteDateForm />
      </div>
    </>
  );
};

export default CreateVoteForm;
