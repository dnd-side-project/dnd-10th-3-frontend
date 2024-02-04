export const tabMap = { test: '테스트', vote: '투표' } as const;
export const tabs = Object.keys(tabMap) as (keyof typeof tabMap)[];
