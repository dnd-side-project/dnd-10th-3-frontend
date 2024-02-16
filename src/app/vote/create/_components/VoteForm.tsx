import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { VoteItem } from '@/components/features/vote/voteItem';
import { Typography } from '@/foundations/typography';

const VoteForm = () => {
  return (
    <section className="flex flex-col gap-3xs rounded-2xl border border-gray-100 p-3xs">
      <Typography type="title4" className="flex items-center gap-6xs text-gray-600">
        <Icon icon="votebox" size={18} color="gray-300" />
        투표
      </Typography>

      {/* TODO 로직 넣으면서 코드 정리 */}
      <div className="flex flex-col gap-5xs">
        <div className="flex gap-3xs">
          <Button variant="empty" iconOnly icon="remove" iconSize={20} className="!p-0" />
          <VoteItem>
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
        </div>
        <div className="flex gap-3xs">
          <Button variant="empty" iconOnly icon="remove" iconSize={20} className="!p-0" />
          <VoteItem>
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
        </div>
        <div className="flex gap-3xs">
          <Button variant="empty" iconOnly icon="remove" iconSize={20} className="!p-0" />
          <VoteItem>
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
        </div>
      </div>
      <Button
        icon="add"
        width="full"
        variant="secondary"
        iconColor="gray-1000"
        iconSize={14}
        className="text-sm"
      >
        항목 추가
      </Button>
    </section>
  );
};

export default VoteForm;
