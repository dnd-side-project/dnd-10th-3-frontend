 // TODO : TestState 변수 프로퍼티 백엔드와 논의 예정, 변경해야함

 type TestState = {
    buddy: string;
    firstPreQuestion: string;
    secondPreQuestion: string;
    trust: number;
    love: number;
    talk: number;
  };



export type TestAction =
    | { type: 'setBuddyName'; value: string }
    | { type: 'setFirstPreQuestion'; value: string }
    | { type: 'setSecondPreQuestion'; value: string }
    | { type: 'love'}
    | { type: 'talk'}
    | { type: 'trust'}

export type TestActionType = TestAction['type'];

  

export function reducer(state: TestState, action: TestAction): TestState {
    switch (action.type) {
      case 'setBuddyName': {
        return {
        ...state,
        buddy: action.value,
        };
      }
      case 'setFirstPreQuestion': {
        return {
         ...state,
         firstPreQuestion: action.value,
        };
      }
      case 'setSecondPreQuestion': {
        return {
          ...state,
          secondPreQuestion: action.value,
        };
      }
      case 'trust': {
        return {
          ...state,
          trust: state.trust + 1
        };
      }
      case 'love': {
        return {
          ...state,
          love: state.love + 1
        };
      }
      case 'talk': {
        return {
          ...state,
          talk: state.talk + 1
        };
      }
    }
  }
  
export const initialState = {
    buddy: '',
    firstPreQuestion: '',
    secondPreQuestion: '',
    trust: 0,
    love: 0,
    talk: 0,
  };