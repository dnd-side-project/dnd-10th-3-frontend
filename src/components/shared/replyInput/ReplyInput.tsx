'use client';

import { useReducer } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Input } from '@/components/common/input';

import { replyReducer } from './helper/replyReducer';

type Props = {
  initialInput?: string;
  onSubmit: (content: string) => void;
};

const ReplyInput = ({ initialInput, onSubmit }: Props) => {
  const [{ input, isSubmitButtonDisabled }, dispatchReplyInputState] = useReducer(replyReducer, {
    input: initialInput || '',
    isSubmitButtonDisabled: initialInput ? false : true,
  });

  const onSubmitReply = async (input: string) => {
    dispatchReplyInputState({ type: 'submitting' });
    try {
      await onSubmit(input);
      dispatchReplyInputState({ type: 'beforeTyping' });
    } catch (e) {
      dispatchReplyInputState({ type: 'typing' });
    }
  };

  return (
    <div className="sticky bottom-0 flex items-center gap-5xs bg-white px-2xs pb-4xs pt-5xs shadow-reply-input">
      <Input
        borderRadius="large"
        placeholder="댓글을 입력해 주세요"
        value={input}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return;
          if (e.key === 'Enter' && input.length > 0) {
            onSubmitReply(input);
          }
        }}
        className="placeholder:text-gray-500"
        onChange={(e) => dispatchReplyInputState({ type: 'typing', input: e.target.value })}
      />
      {input.length > 0 && (
        <Button
          iconOnly
          Icon={<Icon icon="airplane" color="white" />}
          variant="accent"
          className="rounded-full !p-2"
          disabled={isSubmitButtonDisabled}
          onClick={() => {
            onSubmitReply(input);
          }}
        />
      )}
    </div>
  );
};

export default ReplyInput;
