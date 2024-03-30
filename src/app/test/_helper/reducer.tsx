import { TestFormType } from '@/types/test';

export type TestAction =
  | { type: 'setBuddyName'; value: string }
  | { type: 'setGender'; value: string }
  | { type: 'setAge'; value: string }
  | { type: 'love' }
  | { type: 'talk' }
  | { type: 'trust' };

export type TestActionType = TestAction['type'];

export function reducer(state: TestFormType, action: TestAction) {
  switch (action.type) {
    case 'setBuddyName': {
      return {
        ...state,
        buddy: action.value,
      };
    }
    case 'setGender': {
      return {
        ...state,
        gender: action.value,
      };
    }
    case 'setAge': {
      return {
        ...state,
        age: action.value,
      };
    }
    case 'trust': {
      return {
        ...state,
        trust: state.trust + 1,
      };
    }
    case 'love': {
      return {
        ...state,
        love: state.love + 1,
      };
    }
    case 'talk': {
      return {
        ...state,
        talk: state.talk + 1,
      };
    }
  }
}

export const initialTestState = {
  buddy: '',
  gender: '',
  age: '',
  trust: 0,
  love: 0,
  talk: 0,
};
