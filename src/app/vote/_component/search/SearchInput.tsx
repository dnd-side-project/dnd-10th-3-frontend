'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Input } from '@/components/common/input';
import { useDebounce } from '@/hooks/useDebounce';

const SearchInput = ({ searchQueryStringValue }: { searchQueryStringValue: string }) => {
  const router = useRouter();
  const [searchValueState, setSearchValueState] = useState('');
  const debouncedValue = useDebounce(searchValueState);

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //의도 : 중복 엔터 방지 queryString과 비교하여 동일하면 EnterKey 방지
      if (searchQueryStringValue === searchValueState) return;
      router.push(`?q=${searchValueState}`);
    }
  };

  useEffect(() => {
    router.push(`?q=${debouncedValue}`);
  }, [router, debouncedValue]);

  return (
    <div className="w-full p-3xs">
      <div className="py-4xs">
        <Input
          type="search"
          placeholder="무엇이 고민이신가요?"
          onChange={(e) => {
            setSearchValueState(e.target.value);
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
