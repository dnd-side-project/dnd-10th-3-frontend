'use client';

import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { Input } from '@/components/common/input';

const SearchInput = () => {
  const router = useRouter();
  const [searchValueState, setSearchValueState] = useState('');

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`?q=${searchValueState}`);
    }
  };

  const delayedSearchHandler = useMemo(
    () => debounce((targetValue) => router.push(`?q=${targetValue}`), 500),
    [router],
  );

  return (
    <div className="w-full p-3xs">
      <div className="py-4xs">
        <Input
          type="search"
          placeholder="무엇이 고민이신가요?"
          onChange={(e) => {
            setSearchValueState(e.target.value);
            delayedSearchHandler(e.target.value);
          }}
          onKeyUp={onKeyUpHandler}
          icon="search"
          borderRadius="large"
          bgcolor="lightGray"
          height="large"
          value={searchValueState}
          className=" placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchInput;
