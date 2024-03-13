'use client';

import { Typography } from '@/components/common/typography';
import { cn } from '@/lib/core';

import { searchResultVariants } from './variant';

const SearchResults = ({ searchQueryStringValue }: { searchQueryStringValue: string }) => {
  const isSearchTyped = !!searchQueryStringValue;

  return (
    <div className="flex w-full justify-between p-6xs px-3xs">
      <Typography type="title1" className={cn(searchResultVariants({ isSearchTyped }))}>
        <span className="text-[#5382FF]">{searchQueryStringValue}</span> 검색 결과
      </Typography>

      <select defaultValue="최신순" className="text-gray-400">
        <option value="최신순">최신순</option>
        <option value="인기순">인기순</option>
      </select>
    </div>
  );
};

export default SearchResults;
