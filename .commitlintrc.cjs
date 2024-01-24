const emojiType = /(:[a-zA-Z]+(?:_[a-zA-Z]+)*:)/;
const subject = /(\s.+)/;

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp('^' + emojiType.source + subject.source + '$'),
      headerCorrespondence: ['emojiType', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { emojiType, subject } = parsed;
          if (emojiType === null && subject === null) {
            return [false, '커밋은 ":sparkles: 새로운 기능" 형식이어야 합니다.'];
          }
          return [true, ''];
        },
        'explained-emoji-enum': (parsed, _when, emojisObject) => {
          const { emojiType } = parsed;
          if (emojiType && !Object.keys(emojisObject).includes(emojiType)) {
            return [
              false,
              `이모티콘은 다음 중 하나여야 합니다:
            ${Object.keys(emojisObject)
              .map((emoji) => `${emoji} - ${emojisObject[emoji]}`)
              .join('\n')}`,
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'explained-emoji-enum': [
      2,
      'always',
      {
        ':sparkles:': '✨ (feat) 새로운 기능 추가',
        ':bug:': '🐛 (fix) 버그 수정',
        ':zap:': '⚡️ (performance) 성능 향상 작업',
        ':recycle:': '♻️ (refactor) 기능 추가가 없는 코드 리팩토링',
        ':memo:': '📝 (docs) 문서 수정',
        ':rocket:': '🚀 (deploy) 배포 관련 작업',
        ':lipstick:': '💄 (design) 단순 css 디자인 수정 작업',
        ':white_check_mark:': '✅ (test) 테스트 관련 작업',
        ':construction:': '🚧 (wip) working in progress, 임시 커밋',
        ':heavy_plus_sign:': '➕ (add file) 파일 추가',
        ':heavy_minus_sign:': '➖ (remove file) 파일 삭제',
        ':hammer_and_wrench:': '🛠️ (set) 프로젝트 셋팅 작업 및 라이브러리 설치/제거',
        ':broom:': '🧹 (chore) 기타 작업',
        ':speech_balloon:': '💬 (comment) 주석 추가 삭제 작업',
      },
    ],
  },
};
