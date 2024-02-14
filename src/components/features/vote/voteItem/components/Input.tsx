import { cn } from '@/lib/core';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
  return (
    <input type="text" className={cn('w-full text-sm focus:outline-none', className)} {...props} />
  );
};

export default Input;
