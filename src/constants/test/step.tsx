import { ReactNode } from 'react';

type Question = {
  id: number;
  badgeStatus?: string;
  question: ReactNode;
  image: string;
  progress: number;
  answerList: string[];
};

export const QESTIONS_ORDERS = {
  home: 0,
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    badgeStatus: '사전',
    question: (
      <>
        보다 정확한 답변을 드리기 위해
        <br /> 성별을 선택해주세요.
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 1,
    answerList: ['남성', '여성'],
  },
  {
    id: 2,
    badgeStatus: '사전',
    question: (
      <>
        사전 질문 마지막 단계예요. <br />
        나이를 선택해주세요.
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 2,
    answerList: ['10대', '20대', '30대', '40대'],
  },
  {
    id: 3,
    question: (
      <>
        나는 상대에게 <br /> 마지막 남은 닭다리 하나를 <br />
        나눠줄 수 있다.
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 3,
    answerList: ['예', '아니요'],
  },
  {
    id: 4,
    question: (
      <>
        초췌한 몰골로 <br /> 짚 앞 슈퍼에 나온 나, <br />
        우연히 상대와 마주쳤다면?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 4,
    answerList: ['창피하지만 인사정도 나눌 수 있다.', '조용히 최대한 피한다.'],
  },
  {
    id: 4,
    question: (
      <>
        상대가 와서 <br /> 축사를 하기로 약속했다.
        <br />
        이때 나는?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 100,
    answerList: [
      '어떻게 쓸 지 고민되지만 연락줘서 고맙다.',
      '쓸 말이 없어 막막하고 스트레스 받는다.',
    ],
  },
];
