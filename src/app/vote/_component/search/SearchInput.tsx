'use client';

import { Input } from '@/components/common/input';

type Props = {
  onChangeInputHandler: (e: string) => void;
  searchValue: string;
  onKeyUpHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ onChangeInputHandler, searchValue, onKeyUpHandler }: Props) => {
  return (
    <div className="w-full p-3xs">
      <div className="py-4xs">
        <Input
          type="search"
          placeholder="무엇이 고민이신가요?"
          onChange={(e) => onChangeInputHandler(e.target.value)}
          onKeyUp={onKeyUpHandler}
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
