import { cva } from "class-variance-authority";

export const searchResultVariants = cva('', {
    variants: {
      isSearchValue: {
        true: 'visible',
        false: 'invisible',
      },
    },
  });