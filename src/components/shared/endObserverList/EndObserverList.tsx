import { ComponentProps } from 'react';
import { InView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  isEndHandler: () => void;
} & ComponentProps<'ul'>;

const EndObserverList = ({ isEndHandler, children, ...props }: Props) => {
  return (
    <ul {...props}>
      {children}
      <InView
        as="li"
        onChange={(inView) => {
          if (!inView) return;
          isEndHandler();
        }}
      />
    </ul>
  );
};

export default EndObserverList;
