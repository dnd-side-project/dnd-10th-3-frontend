import ErrorImage from '@/assets/images/error.svg';
import { Button } from '@/components/common/button';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonClickHandler: () => void;
};

const Fallback = ({ title, description, buttonText, buttonClickHandler }: Props) => {
  return (
    <div className="flex h-dvh flex-col pb-2xs">
      <Header>
        <Header.Previous />
      </Header>

      <main className="flex grow flex-col px-2xs">
        <div className="flex grow flex-col items-center py-[25%]">
          <div className="flex flex-col items-center gap-3xs">
            <Typography type="heading2">{title}</Typography>
            <Typography type="body2" className="text-center text-gray-500">
              {description}
            </Typography>
          </div>
          <div className="flex grow items-center justify-center">
            <ErrorImage />
          </div>
        </div>
        <Button width="full" onClick={buttonClickHandler}>
          {buttonText}
        </Button>
      </main>
    </div>
  );
};

export default Fallback;
