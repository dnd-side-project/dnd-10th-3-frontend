'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Input } from '@/components/common/input';

type Props = {
  onChangeInputHandler: (e: string) => void;
  searchValueState: string;
};

const SearchInput = ({ onChangeInputHandler, searchValueState }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQueryValue = searchParams.get('q') as string;
  // 서치 파라미터를 붙힌다.
  // 서치 파라티러 값은 부모에서 확인 가능
  // 부모에서 훅을 호출할때 서치 파라미터에서 꺼낸다.

  // 여기서?! useGetVoteBySearch ?!
  // 받은 상태는 상위 컴포넌트에서 렌더링해야한다.

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!searchValueState) {
        return router.push('/vote');
      }
      //의도 : 중복 엔터 방지 queryString과 비교하여 동일하면 EnterKey 방지
      if (searchQueryValue === searchValueState) return;
      router.push(`?q=${searchValueState}`);
    }
  };

  return (
    <div className="w-full p-3xs">
      <div className="py-4xs">
        <Input
          type="search"
          placeholder="무엇이 고민이신가요?"
          onChange={(e) => {
            onChangeInputHandler(e.target.value);
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
