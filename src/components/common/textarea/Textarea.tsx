import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

//TODO : bg-white가 읽히지 않아 우선 제외했습니다.
const textareaVariants = cva(
  'flex w-full resize-none rounded-md border border-gray-20 p-3xs shadow-thumb placeholder:text-gray-30 focus-visible:border-blue-20 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
);

interface TextareaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }: TextareaProps, ref) => {
    return <textarea className={textareaVariants({ className })} ref={ref} {...props} />;
  },
);
Textarea.displayName = 'Textarea';
