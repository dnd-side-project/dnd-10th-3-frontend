import { cva } from "class-variance-authority";

export const searchResultVariants = cva('', {
    variants: {
      isSearchTyped: {
        true: 'visible',
        false: 'invisible',
      },
    },
  });