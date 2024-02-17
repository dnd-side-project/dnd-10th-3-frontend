import { Button } from '@/components/common/button';
import { CharCounter } from '@/components/shared';
import { Typography } from '@/foundations/typography';
import { MAX_NICK_LENGTH } from '@/schema/NicknameSchema';

const NicknameForm = () => {
  return (
    <form className="mt-2xs">
      <div className="mb-xs flex flex-col gap-5xs">
        <div className="flex justify-between">
          <Typography type="body3">
            닉네임<span className="text-warning">*</span>
          </Typography>
          <CharCounter maxLength={MAX_NICK_LENGTH} targetString={''} />
        </div>
        <input
          className="rounded-lg border border-gray-100 p-3xs"
          placeholder="닉네임을 입력해 주세요"
        />
        <Typography type="body3" className="text-gray-400">
          닉네임을 입력해 주세요. (특수문자 제외)
        </Typography>
      </div>

      <Button type="submit" width="full" disabled>
        확인
      </Button>
    </form>
  );
};

export default NicknameForm;
