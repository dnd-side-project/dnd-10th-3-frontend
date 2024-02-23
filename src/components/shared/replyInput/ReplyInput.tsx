import { Input } from '@/components/common/input';

const ReplyInput = () => {
  return (
    <div className="sticky bottom-0 bg-white px-2xs pb-4xs pt-5xs shadow-reply-input">
      <Input borderRadius="large" placeholder="댓글을 입력해 주세요" />
    </div>
  );
};

export default ReplyInput;
