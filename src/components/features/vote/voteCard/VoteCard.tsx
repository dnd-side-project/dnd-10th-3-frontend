import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

import { Description, Footer, Header, SubmitButton, VoteItemGroup } from './components';
import { voteCardVariant } from './variants';

type Props = HTMLAttributes<HTMLElement> & VariantProps<typeof voteCardVariant>;

const VoteCard = ({ className, children }: Props) => {
  return <section className={cn(voteCardVariant({ className }))}>{children}</section>;
};

export default Object.assign(VoteCard, {
  Description,
  Header,
  Footer,
  VoteItemGroup,
  SubmitButton,
});
