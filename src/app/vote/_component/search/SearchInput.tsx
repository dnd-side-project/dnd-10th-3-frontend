'use client';

import { Input } from '@/components/common/input';

type Props = {
  inputValueHandler: (e: string) => void;
  searchValue: string;
};

const SearchInput = ({ inputValueHandler, searchValue }: Props) => {
  return (
    <div className="w-full p-3xs">
      <div className="py-4xs">
        <Input
          type="search"
          placeholder="무엇이 고민이신가요?"
          onChange={(e) => inputValueHandler(e.target.value)}
          icon="search"
          borderRadius="large"
          bgcolor="lightGray"
          height="large"
          value={searchValue}
          className=" placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchInput;
