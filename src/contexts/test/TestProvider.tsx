'use client';

import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

import { initialState, reducer, TestAction } from '@/app/test/_helper/reducer';
import { TestFormType } from '@/types/test';

type TestInterface = { state: TestFormType; dispatch: Dispatch<TestAction> };

export const TestContext = createContext<TestInterface | null>(null);

const TestProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <TestContext.Provider value={{ state, dispatch }}>{children}</TestContext.Provider>;
};

export default TestProvider;
