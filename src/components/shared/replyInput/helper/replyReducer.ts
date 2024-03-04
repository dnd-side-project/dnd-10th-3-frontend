export type ReplyState = {
  input: string;
  isSubmitButtonDisabled: boolean;
};

export type ReplyAction =
  | { type: 'beforeTyping' }
  | { type: 'typing'; input?: string }
  | { type: 'submitting' };

export const replyReducer = (state: ReplyState, action: ReplyAction) => {
  switch (action.type) {
    case 'beforeTyping': {
      return { input: '', isSubmitButtonDisabled: true };
    }
    case 'typing': {
      return { input: action.input ?? state.input, isSubmitButtonDisabled: false };
    }
    case 'submitting': {
      return { ...state, isSubmitButtonDisabled: true };
    }
  }
};
