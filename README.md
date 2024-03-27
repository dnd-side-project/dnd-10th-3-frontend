
<img width="100%" alt="donworry-main" src="https://github.com/dnd-side-project/dnd-10th-3-frontend/assets/69228045/ceb39cdf-a5da-4b1b-b757-0f7304835af7">

# 돈워리 (DonWorry)

**결혼식 축의금 얼마내지? 돈워리가 함께 해결해 줄게요!**

친밀도, 참석 여부, 물가 상승 등 고민할 부분이 너무 많은 축의금! 돈워리를 통해 언제 어디서나 손쉽게 축의금 고민을 나눠보세요.

## 목차
1. [주요 기능](#주요-기능)
2. [배포 링크](#배포-링크)
4. [시연 영상](#시연-영상)
5. [기술 스택](#기술-스택)
6. [폴더 구조](#폴더-구조)
7. [커밋 컨벤션](#커밋-컨벤션)
8. [팀 소개](#팀-소개)


## 주요 기능

### 1. 친밀도 테스트

**다양한 상황 테스트를 통해 상대방과의 친밀도를 알아보고, 축의금 금액을 결정해 보세요.**

- 테스트 진행
  - 2개의 사전 질문과 9개의 질문으로 구성된 친밀도 확인 테스트
  - 사용자 이탈률을 낮추기 위한 퍼널 UI
- 테스트 결과
  - 테스트 결과 비동기 통신 성공 전 로딩 기능
  - 테스트 결과 이미지 저장 및 공유 기능

### 2. 투표

**축의금 고민부터 결혼 축하 파티와 하객룩까지, 3초만에 로그인한 다음 투표를 만들고 참여하며 하객들의 다양한 고민을 해결해 보세요.**

- 투표 등록하기
  - 카테고리, 제목, 본문 내용, 투표 항목을 입력할 수 있는 투표 작성 폼
  - 각 항목 유효성 검사 기능
- 투표 참여하기
  - 커뮤니티에 등록된 투표의 항목을 선택해 투표 참여 및 결과 확인 가능
  - 투표 공감 기능
- 댓글 작성하기
  - 커뮤니티에 등록된 투표에 댓글 등록 및 삭제, 공감 기능
  - optimistic update 적용

## 배포 링크

- 돈워리 배포 링크: [https://donworry.vercel.app](https://donworry.vercel.app/)
- Storybook 배포 링크: [https://65abd47d09661c4e79c3c260-xxrkvzfeor.chromatic.com/](https://65abd47d09661c4e79c3c260-xxrkvzfeor.chromatic.com/)

## 시연 영상

준비중입니다.

## 기술 스택

<img width="560" alt="스크린샷 2024-03-15 오후 2 28 14" src="https://github.com/dnd-side-project/dnd-10th-3-frontend/assets/69228045/8a545878-9b81-42e8-8c61-3594597e646f">

## 폴더 구조

```markdown
.
└── src
    ├── api
    ├── app
    ├── assets
    ├── components
    │   ├── common
    │   ├── features
    │   ├── layout
    │   └── shared
    ├── constants
    ├── contexts
    ├── hooks
    ├── lib
    ├── schema
    ├── types
    └── utils
```

## 커밋 컨벤션

| type | description |
| --- | --- |
| ✨ | (feat) 새로운 기능 추가 |
| 🐛 | (fix) 버그 수정 |
| ⚡️ | (performance) 성능 향상 작업 |
| ♻️ | (refactor) 기능 추가가 없는 코드 리팩토링 |
| 📝 | (docs) 문서 수정 |
| 🚀 | (deploy) 배포 관련 작업 |
| 💄 | (design) 단순 css 디자인 수정 작업 |
| ✅ | (test) 테스트 관련 작업 |
| 🚧 | (wip) working in progress, 임시 커밋 |
| ➕ | (add file) 파일 추가 |
| ➖ | (remove file) 파일 삭제 |
| 🛠️ | (set) 프로젝트 셋팅 작업 및 라이브러리 설치/제거 |
| 🧹 | (chore) 기타 작업 |
| 💬 | (comment) 주석 추가 삭제 작업 |

## 팀 소개

| 이주영                                                                                                    | 성지현                                                                                                    | 이진호                                                                                                        | 이희건                                                                                                         | 길도현                                                                                                      | 길은진                                                                                                  |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/93697790?v=4" alt='@CodyMan0' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/69228045?v=4" alt='@jhsung23' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/118791679?v=4" alt='@wlshooo' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/81156109?v=4" alt='@dlrjs2360' width="130" height="130"> | <img src="https://ca.slack-edge.com/TK0T8KE4F-U06CKN2NM50-c81cd55d97ac-512" alt='@chaehaeun' width="130" height="130"> | <img src="https://ca.slack-edge.com/TK0T8KE4F-U06C9KMUSSD-c71d6b321133-512" alt='@ukssss' width="130" height="130"> |
| [@CodyMan0](https://github.com/CodyMan0/)                                                                 | [@jhsung23](https://github.com/jhsung23/)                                                                 | [@wlshooo](https://github.com/wlshooo/)                                                                   | [@dlrjs2360](https://github.com/dlrjs2360/)                                                              | [@]()                                                                 | [@e_unjin](https://notefolio.net/e_unjin/)                                                                   |
| <p style='text-align:center'>팀장, 프론트엔드</p>                                                             | <p style='text-align:center'>프론트엔드</p>                                                                  | <p style='text-align:center'>백엔드</p>                                                                    | <p style='text-align:center'>백엔드</p>                                         | <p style='text-align:center'>디자이너</p>                                        | <p style='text-align:center'>디자이너</p>                                           |

