import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

import TestWorry from '@/assets/images/error-worry.png';
import { Button } from '@/components/common/button';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

type ErrorPageLayoutProps = {
  statusCode: 404 | 500;
};

type ErrorValuesProps = {
  [key in ErrorPageLayoutProps['statusCode']]: {
    title: string | ReactNode;
    subTitle: string | ReactNode;
    statusImage: { src: StaticImport; width: number; height: number };
    buttonContent: '메인으로 돌아가기' | '다시 시도하기';
  };
};

const ErrorPageLayout = ({ statusCode }: ErrorPageLayoutProps) => {
  const ERROR_VALUES: ErrorValuesProps = {
    '404': {
      title: '페이지를 찾을 수 없어요.',
      subTitle: (
        <>
          페이지 주소가 사라졌거나 사용할 수 없어요.
          <br />
          입력하신 주소를 다시 확인해주세요.
        </>
      ),
      statusImage: {
        // TODO : 디자인 이미지 추가
        src: TestWorry,
        width: 108,
        height: 154,
      },
      buttonContent: '메인으로 돌아가기',
    },
    '500': {
      title: '잠시 후 다시 시도해주세요.',
      subTitle: (
        <>
          네트워크 연결상태를 확인해주세요.
          <br />
          문제가 계속된다면 잠시 후 다시 실행해주세요.
        </>
      ),
      statusImage: {
        // TODO : 디자인 이미지 추가
        src: TestWorry,
        width: 108,
        height: 154,
      },
      buttonContent: '다시 시도하기',
    },
  };
  return (
    <main className="relative h-[100dvh] w-full">
      <Header>
        <Header.Previous />
      </Header>
      <section className="flex w-full flex-col items-center justify-between">
        {statusCode === 500 && (
          <div className="flex flex-col items-center gap-3xs">
            <Typography type="heading1" className="pt-6xl text-center">
              {ERROR_VALUES[statusCode].title}
            </Typography>
            <Typography type="body1" className="text-center text-gray-500">
              {ERROR_VALUES[statusCode].subTitle}
            </Typography>
            <div className="mt-lg">
              <Image
                src={ERROR_VALUES[statusCode].statusImage.src}
                width={ERROR_VALUES[statusCode].statusImage.width}
                height={ERROR_VALUES[statusCode].statusImage.height}
                alt={`${statusCode}_error_image`}
                priority
              />
            </div>
          </div>
        )}

        {statusCode === 404 && (
          <div className="flex flex-col items-center gap-3xs">
            <div className="pt-6xl">
              <Image
                src={ERROR_VALUES[statusCode].statusImage.src}
                width={ERROR_VALUES[statusCode].statusImage.width}
                height={ERROR_VALUES[statusCode].statusImage.height}
                alt={`${statusCode}_error_image`}
                priority
              />
            </div>
            <Typography type="heading1" className=" text-center">
              {ERROR_VALUES[statusCode].title}
            </Typography>
            <Typography type="body1" className="text-center text-gray-500">
              {ERROR_VALUES[statusCode].subTitle}
            </Typography>
          </div>
        )}

        <div className="absolute bottom-[20px] flex w-[95%] flex-col ">
          <Button className=" bg-gray-1000" width="full">
            <Typography type={'body1'} className="text-white">
              {ERROR_VALUES[statusCode].buttonContent}
            </Typography>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ErrorPageLayout;
