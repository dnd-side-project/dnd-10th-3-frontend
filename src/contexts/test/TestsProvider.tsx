'use client';

import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react';

import { initialTestState, reducer, TestAction } from '@/app/test/_helper/reducer';
import { TestFormType } from '@/types/test';

export const TestsContext = createContext<TestFormType>(initialTestState);
export const TestsDispatchContext = createContext<Dispatch<TestAction>>(() => {});

export const TestsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialTestState);

  return (
    <TestsContext.Provider value={state}>
      <TestsDispatchContext.Provider value={dispatch}>{children}</TestsDispatchContext.Provider>
    </TestsContext.Provider>
  );
};

export function useTestState() {
  return useContext(TestsContext);
}

export function useTestDispatch() {
  return useContext(TestsDispatchContext);
}
