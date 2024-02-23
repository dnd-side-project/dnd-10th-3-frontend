import { ReactNode } from 'react';

import { TestActionType } from '@/app/test/_helper/reducer';

type Question = {
  id: number;
  type: TestActionType;
  badgeStatus?: string;
  question: (user?: string) => ReactNode;
  image?: string;
  answerList: string[];
};

export const QUESTIONS_ORDERS = {
  home: 0,
  lastPage: 11,
  loadingPage: 12,
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'setGender',
    badgeStatus: 'Q.사전질문',
    question: () => {
      return (
        <>
          정확한 테스트 결과를 위해
          <br /> <strong>당신의 성별이 궁금해요.</strong>
        </>
      );
    },
    answerList: ['남자', '여자'],
  },
  {
    id: 2,
    badgeStatus: 'Q.사전질문',
    type: 'setAge',
    question: () => {
      return (
        <>
          마지막으로 <br />
          <strong>당신의 나이를 선택해주세요.</strong>
        </>
      );
    },

    answerList: ['10대', '20대', '30대', '40대', '50대 이상'],
  },
  {
    id: 3,
    type: 'love',
    question: (user) => {
      return (
        <>
          나는 {user}에게 <br /> 마지막 남은 닭다리 하나를 <br />
          나눠줄 수 있다.
        </>
      );
    },
    image: `/images/testWorry.png`,
    answerList: ['예', '아니요'],
  },
  {
    id: 4,
    type: 'love',
    question: (user) => {
      return (
        <>
          초췌한 몰골로 <br /> 짚 앞 슈퍼에 나온 나, <br />
          우연히 {user}와 마주쳤다면?
        </>
      );
    },

    answerList: ['창피하지만 인사정도 나눌 수 있다.', '조용히 최대한 피한다.'],
  },
  {
    id: 5,
    type: 'talk',
    question: (user) => {
      return (
        <>
          지인의 결혼식과 <br /> {user}의 결혼식이 겹쳤다.
          <br />
          나의 반응은?
        </>
      );
    },
    answerList: ['상대방 결혼식에 참석해 얼굴 비춘다.', '미안하지만 송금으로 마음을 전한다.'],
  },
  {
    id: 6,
    type: 'talk',
    question: (user) => {
      return (
        <>
          나는 {user}와/과 <br /> 단둘이 식사를 할 수 있다.
        </>
      );
    },
    answerList: ['예', '아니오'],
  },
  {
    id: 7,
    type: 'love',
    question: (user) => {
      return (
        <>
          {user}의 생일날 <br /> 나의 반응은?
        </>
      );
    },
    answerList: ['연락해서 축하라도 해줘야겠다.', '알아서 잘 보내겠지라는 생각으로 넘긴다.'],
  },
  {
    id: 8,
    type: 'talk',
    question: (user) => {
      return (
        <>
          {user}가 결혼할 사람이라며
          <br /> 인사를 시켜준다. <br /> 나의 반응은?
        </>
      );
    },
    answerList: ['예전부터 이상형이 한결 같다.', '왜 나에게 인사를 시켜주는 지 모르겠다.'],
  },
  {
    id: 9,
    type: 'trust',
    question: (user) => {
      return (
        <>
          {user}에게 다수가 모르는 <br /> 나의 비밀이나 고민을
          <br /> 말할 수 있다.
        </>
      );
    },
    answerList: ['예', '아니오'],
  },
  {
    id: 10,
    type: 'trust',
    question: (user) => {
      return (
        <>
          {user}와 만나기로 약속한 당일 <br /> 갑자기 연락이 없다. <br /> 나의 반응은?
        </>
      );
    },
    answerList: [
      '무슨 사정이 있겠지. 연락오기를 기다린다.',
      '잠수탄 것 아닐까? 의심하며 귀가 준비한다.',
    ],
  },
  {
    id: 11,
    type: 'trust',
    question: (user) => {
      return (
        <>
          {user}가 연락와서
          <br /> 축사를 하기로 약속했다. <br />
          이때 나는?
        </>
      );
    },
    answerList: [
      '어떻게 쓸 지 고민되지만 연락줘서 고맙다.',
      '쓸 말이 없어 막막하고 스트레스 받는다.',
    ],
  },
];
