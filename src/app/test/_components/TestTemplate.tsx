import type { PropsWithChildren, ReactNode } from 'react';

interface FormLayoutProps {
  header: ReactNode;
  comment: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

const TestLayout = ({ header, comment, body, footer }: PropsWithChildren<FormLayoutProps>) => {
  return (
    <div className="flex h-dvh w-full flex-col px-2xs py-4xs">
      <div className="flex h-1/3 flex-col">
        <header className=" pt-2xl 390:pt-sm">{header}</header>
        <div className="relative flex h-[40%] flex-col py-xs">{comment}</div>
      </div>
      <div className="flex h-1/2 flex-col">{body}</div>
      {footer}
    </div>
  );
};

export default TestLayout;
