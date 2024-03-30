import MainLogo from '@/assets/images/mainLogo.svg';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/layout/header';
import { useTestDispatch, useTestState } from '@/contexts/test/TestsProvider';
import { useFunnelContext } from '@/contexts/test/useFunnelContext';
import { useToast } from '@/hooks';

const TestHomePage = () => {
  const toast = useToast();
  const { toNext } = useFunnelContext();
  const test = useTestState();
  const dispatch = useTestDispatch();

  const handleTestFormInvalid = () => {
    if (test.buddy) {
      toNext();
      return;
    }
    return toast({ message: 'NICKNAME_REQUIRED', above: 'button' });
  };

  const handleOnKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTestFormInvalid();
    }
  };
  return (
    <div className="relative flex size-full h-dvh flex-col items-center bg-mainGradient pb-2xs">
      <Header>
        <Header.Logo />
        <Header.ToggleNav />
        <Header.IconLink href="/mypage" icon="mypage" />
      </Header>

      <main className="flex size-full flex-col items-center">
        <div className="flex flex-col items-center justify-center py-sm">
          <h1 className="text-[32px] font-semibold">축의금 얼마 내지?</h1>
          <div className="h-md  rounded-md border-2 border-primary-700 text-center">
            <div className="flex items-center justify-between gap-2 px-4xs text-[24px] font-bold leading-[145%] text-primary-700">
              <span>₩</span>
              <p>??,???</p>
            </div>
          </div>
          <Typography type="title4" className="pt-4xs text-gray-500">
            상대와의 친밀도 알아보고 축의금 결정해보세요
          </Typography>
        </div>
        <section className=" flex w-full flex-1 flex-col items-center">
          <MainLogo width="100%" height="70%" />
          <div className="w-[70%]">
            <Input
              type="fit"
              placeholder=" 상대 이름을 입력해주세요"
              className="text-center placeholder:text-gray-1000"
              bgcolor="lightGray"
              value={test.buddy}
              onChange={(e) => dispatch({ type: 'setBuddyName', value: e.target.value })}
              onKeyUp={handleOnKeyEnter}
            />
          </div>
        </section>

        <footer className="w-full px-2xs">
          <Button width="full" onClick={handleTestFormInvalid}>
            테스트하고 축의금 알아보기
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default TestHomePage;
