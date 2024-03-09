import FirstResultType from '@/assets/images/result/firstResultType.svg';
import ForthResultType from '@/assets/images/result/forthResultType.svg';
import SecondResultType from '@/assets/images/result/secondResultType.svg';
import ThirdResultType from '@/assets/images/result/thirdResultType.svg';

export const RESULT_TYPE_LIST = [
  {
    id: 0,
    image: <FirstResultType width={100} />,
    text: {
      firstLine: '내 결혼식날',
      secondLine: '나타나지 않을 원수',
      firstHash: '#축하_이모티콘_한_큰술',
      secondHash: '#불참이지만_괜찮아',
    },
  },
  {
    id: 1,
    image: <SecondResultType width={100} />,
    text: {
      firstLine: '내 결혼식날 자리에서',
      secondLine: '유튜브만 볼 남남',
      firstHash: '#최소한_성의표시만',
      secondHash: '#이구역_프로참석러',
    },
  },
  {
    id: 2,
    image: <ThirdResultType width={100} />,
    text: {
      firstLine: '내 결혼식날 단체사진',
      secondLine: '플래시를 켜 줄 지인',
      firstHash: '#식사값은_낼게요',
      secondHash: '#단체사진_1인분',
    },
  },
  {
    id: 3,
    image: <ForthResultType width={100} />,
    text: {
      firstLine: '내 결혼식날 내 부모님',
      secondLine: '뒷자리에 앉을 친구',
      firstHash: '#아낌없이_주는_축의금',
      secondHash: '#둘도없는사이',
    },
  },
];
