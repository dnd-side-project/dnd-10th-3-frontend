'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/components/common/button';

const KakaoShareButton = () => {
  const path = usePathname();

  const handleSendMessage = () => {
    const kakao = window.Kakao;
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `test`,
        description: `test`,
        imageUrl: '',
        link: {
          mobileWebUrl: ``,
          webUrl: ``,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: ``,
            webUrl: ``,
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={handleSendMessage}
      icon="kakaotalk"
      iconOnly
      className="rounded-[100%] bg-[#FEE500]"
      iconColor="gray-1000"
    />
  );
};

export default KakaoShareButton;
