import { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/core';

import { radioVariant } from './Radio.variant';

type Props = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof radioVariant>;

const Radio = ({ checked, color, className, disabled, ...props }: Props) => {
  return (
    <input
      type="radio"
      checked={checked}
      disabled={disabled}
      className={cn(radioVariant({ color }), className)}
      {...props}
    />
  );
};

export default Radio;
