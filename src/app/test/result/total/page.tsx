import Image from 'next/image';

import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

const TotalPage = () => {
  return (
    <>
      <Header>
        <Header.Previous />
        <Header.Text text="전체유형" />
        {/* //FIXME : 고쳐주세요 */}
        <Header.Text text=" " />
      </Header>

      <section className="pb-10">
        {RESULT_TYPE_LIST.map((resultType) => {
          return (
            <article className="my-4xs flex w-full px-2xs" key={resultType.id}>
              <div className="flex w-full items-center rounded-xl border border-gray-100 p-3xs">
                <div className="flex w-full items-center justify-center">
                  <Typography type="heading2" className="pr-xs 390:pr-3xs">
                    {resultType.id}
                  </Typography>
                  <div className="flex w-full flex-1 justify-between">
                    <div className="flex flex-col gap-4xs">
                      <div>
                        <Typography type="heading3">{resultType.text.firstLine}</Typography>
                        <Typography type="heading3" className="text-primary-800">
                          {resultType.text.secondLine}
                        </Typography>
                      </div>
                      <div>
                        <Typography type="body3" className="text-gray-500">
                          {resultType.text.firstHash}
                        </Typography>
                        <Typography type="body3" className="text-gray-500">
                          {resultType.text.secondHash}
                        </Typography>
                      </div>
                    </div>

                    <Image
                      src={resultType.image}
                      alt="first_small_result_type"
                      width={100}
                      height={125}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default TotalPage;

// 임시 상수 설정입니다. constant에 만들었으나 undefined 에러가 나서 우선 이 파일에서 선언하였습니다.
const RESULT_TYPE_LIST = [
  {
    id: 1,
    image: '/images/firstSmallResultType.png',
    text: {
      firstLine: '내 결혼식날',
      secondLine: '나타나지 않을 원수',
      firstHash: '#축하_이모티콘_한_큰술',
      secondHash: '#불참이지만_괜찮아',
    },
  },
  {
    id: 2,
    image: '/images/secondSmallResultType.png',
    text: {
      firstLine: '내 결혼식날 자리에서',
      secondLine: '유튜브만 볼 남남',
      firstHash: '#최소한_성의표시만',
      secondHash: '#이구역_프로참석러',
    },
  },
  {
    id: 3,
    image: '/images/thirdSmallResultType.png',
    text: {
      firstLine: '내 결혼식날 단체사진',
      secondLine: '플래시를 켜 줄 지인',
      firstHash: '#식사값은_낼게요',
      secondHash: '#단체사진_1인분',
    },
  },
  {
    id: 4,
    image: '/images/forthSmallResultType.png',
    text: {
      firstLine: '내 결혼식날 내 부모님',
      secondLine: '뒷자리에 앉을 친구',
      firstHash: '#아낌없이_주는_축의금',
      secondHash: '#둘도없는사이',
    },
  },
];
