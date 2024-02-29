import { Input } from '@/components/common/input';

const SearchInput = () => {
  return (
    <div className="w-full p-3xs">
      <div className="py-4xs">
        <Input
          type="search"
          placeholder="무엇이 고민이신가요?"
          icon="search"
          borderRadius="large"
          bgcolor="lightGray"
          height="large"
          className=" placeholder:text-gray-500 "
        />
      </div>
    </div>
  );
};

export default SearchInput;
