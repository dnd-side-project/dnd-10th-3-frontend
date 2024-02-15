export const TOAST_MESSAGES = Object.freeze({
  VOTE_UPLOAD_SUCCESS: { type: 'default', text: '투표 업로드가 완료되었습니다' },
  VOTE_UPLOAD_FAIL: { type: 'warning', text: '투표 업로드에 실패했습니다' },

  VOTE_MODIFY_SUCCESS: { type: 'default', text: '투표 내용 수정이 완료되었습니다' },
  VOTE_MODIFY_FAIL: { type: 'warning', text: '투표 내용 수정에 실패했습니다' },

  VOTE_DELETE_SUCCESS: { type: 'default', text: '투표 삭제가 완료되었습니다' },
  VOTE_DELETE_FAIL: { type: 'warning', text: '투표 삭제에 실패했습니다' },

  VOTE_TITLE_REQUIRED: { type: 'warning', text: '제목을 입력해 주세요' },
  VOTE_CONTENT_REQUIRED: { type: 'warning', text: '내용을 입력해 주세요' },
  LEAST_TWO_ITEMS_REQUIRED: { type: 'warning', text: '투표 항목을 2개 이상 입력해 주세요' },
  NAME_REQUIRED: { type: 'warning', text: '상대방의 이름을 입력해 주세요' },
  NICKNAME_REQUIRED: { type: 'warning', text: '닉네임을 입력해 주세요' },

  VOTING_SUCCESS: { type: 'default', text: '투표 참여가 완료되었습니다' },
  VOTING_FAIL: { type: 'warning', text: '투표 참여에 실패했습니다' },

  VOTING_MODIFY_SUCCESS: { type: 'default', text: '투표 응답 수정이 완료되었습니다' },
  VOTING_MODIFY_FAIL: { type: 'warning', text: '투표 응답 수정에 실패했습니다' },

  REPLY_REGISTER_SUCCESS: { type: 'default', text: '댓글 등록이 완료되었습니다' },
  REPLY_REGISTER_FAIL: { type: 'warning', text: '댓글 등록에 실패했습니다' },

  REPLY_DELETE_SUCCESS: { type: 'default', text: '댓글 삭제가 완료되었습니다' },
  REPLY_DELETE_FAIL: { type: 'warning', text: '댓글 삭제에 실패했습니다' },

  LINK_COPIED: { type: 'warning', text: '링크가 복사되었습니다' },
}) satisfies Record<string, { type: 'default' | 'warning'; text: string }>;
