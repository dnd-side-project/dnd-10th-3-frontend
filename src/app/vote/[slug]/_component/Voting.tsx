'use client';

import { useState } from 'react';

import { Button } from '@/components/common/button';
import { VoteCard, VoteItem } from '@/components/features/vote';
import { useToast } from '@/hooks';
import { useVotingMutation } from '@/hooks/vote';
import { cn } from '@/lib/core';
import { SelectionType } from '@/types/vote';

type Props = {
  voteId: number;
  selected: number | null;
  selections: SelectionType[];
};

const Voting = ({ voteId, selections, selected }: Props) => {
  const [mode, setMode] = useState<'voting' | 'result'>(selected === null ? 'voting' : 'result');
  const [selectedItem, setSelectedItem] = useState(selected);
  const { mutate: vote, isPending } = useVotingMutation();
  const toast = useToast();

  const topVoteRate = Math.max(...selections.map((selection) => selection.votePercentage));

  const handleVote = () => {
    if (selectedItem === null) {
      toast({ message: 'SELECTION_REQUIRED', above: 'input' });
      return;
    }
    vote({ voteId, selectionId: selectedItem }, { onSuccess: () => setMode('result') });
  };

  const setVotingMode = () => {
    setMode('voting');
    setSelectedItem(null);
  };

  return (
    <>
      {mode === 'voting' ? (
        <>
          <VoteCard.VoteItemGroup>
            {selections.map((selection) => (
              <VoteItem key={selection.id} onClick={() => setSelectedItem(selection.id)}>
                <VoteItem.Radio checked={selection.id === selectedItem} />
                <VoteItem.Text>{selection.content}</VoteItem.Text>
                {selection.imagePath && (
                  <VoteItem.Img src={selection.imagePath} alt={selection.content} />
                )}
              </VoteItem>
            ))}
          </VoteCard.VoteItemGroup>
          <VoteCard.SubmitButton>
            <Button
              variant="primary"
              width="full"
              onClick={handleVote}
              isLoading={isPending}
              disabled={isPending}
            >
              {isPending ? '투표 반영 중' : '투표 참여하기'}
            </Button>
          </VoteCard.SubmitButton>
        </>
      ) : (
        <>
          {/* NOTE: mode === 'result' 인 경우 */}
          <VoteCard.VoteItemGroup>
            {selections.map((selection) => (
              <VoteItem key={selection.id}>
                <VoteItem.Progress
                  color={selection.votePercentage === topVoteRate ? 'primary' : 'gray'}
                  progress={selection.votePercentage}
                />
                <VoteItem.Radio disabled checked={selected === selection.id} />
                <VoteItem.Text doubleLine>
                  <div>{selection.content}</div>
                  <div
                    className={cn(selection.votePercentage === topVoteRate && 'text-primary-700')}
                  >
                    {selection.count}표 / {selection.votePercentage}%
                  </div>
                </VoteItem.Text>
                {selection.imagePath && (
                  <VoteItem.Img src={selection.imagePath} alt={selection.content} />
                )}
              </VoteItem>
            ))}
          </VoteCard.VoteItemGroup>
          <VoteCard.SubmitButton>
            <Button variant="secondary" width="full" onClick={setVotingMode}>
              다시 투표하기
            </Button>
          </VoteCard.SubmitButton>
        </>
      )}
    </>
  );
};

export default Voting;
