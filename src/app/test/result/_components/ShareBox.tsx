'use client';

import { Button } from '@/components/common/button';
import { KakaoShareButton } from '@/components/shared';
import { Typography } from '@/foundations/typography';
import { shareLink } from '@/utils/share';

const ShareBox = ({ id }: { id: number }) => {
  // TODO : post시 바디에 담아 보내줄 예정
  console.log(id);

  const handleCopyClipboard = () => {
    shareLink({ url: location.href });
  };

  return (
    <>
      <Typography type="body2" className="pb-3xs text-center">
        내 결과 공유하기
      </Typography>
      <div className=" flex h-[52px] justify-center gap-3xs">
        <KakaoShareButton />
        <Button
          width="fit"
          icon="link"
          iconOnly
          className="rounded-[100%] bg-gray-600"
          iconColor="white"
          onClick={handleCopyClipboard}
        />
      </div>
    </>
  );
};

export default ShareBox;