import Image from 'next/image';

import TestImage from '@/assets/images/testWorry.png';
import { Button } from '@/components/common/button';
import { ProgressBar } from '@/components/common/progressBar';
import { Typography } from '@/foundations/typography';

import FormLayout from './components/FormLayout';
const Home = () => {
  const userName = '상대';
  return (
    <main className={'relative flex h-dvh w-full flex-col items-center px-4 pb-5'}>
      <FormLayout
        header={
          <>
            {'< 임시 아이콘'}
            <br />
            <ProgressBar progress={10} className="pt-3xs" />
          </>
        }
        comment={
          <div className="flex flex-col gap-4xs">
            <div className="flex w-2xl items-center justify-center rounded-2xl bg-primary-200 py-6xs">
              {/* TODO : Tag 디자인 시스템 추가 요망 */}
              <span className="text-primary-600">1/10</span>
            </div>
            {/* TODO : Typography 디자인 시스템 추가 요망 */}
            <Typography type={'heading2'}>
              나는 {userName}에게 <br /> 마지막 남은 닭다리 하나를 <br />
              나눠줄 수 있다.
            </Typography>
          </div>
        }
        body={
          <div className="absolute right-0">
            <Image src={TestImage} width={215} height={215} alt="testImage" />
          </div>
        }
        footer={
          <div className=" flex flex-col gap-3xs">
            <Button variant={'primary'} width="full">
              예
            </Button>
            <Button variant={'secondary'} width="full">
              아니오
            </Button>
          </div>
        }
      />
    </main>
  );
};

export default Home;
