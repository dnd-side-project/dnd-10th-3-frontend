import { ReactNode } from 'react';

import { TestActionType } from '@/app/test/_helper/reducer';

type Question = {
  id: number;
  type: TestActionType;
  badgeStatus?: string;
  question: ReactNode;
  image: string;
  progress: number;
  answerList: string[];
};

export const QUESTIONS_ORDERS = {
  home: 0,
  lastPage: 10,
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'setGender',
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
    type: 'setAge',
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
    type: 'love',
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
    type: 'talk',
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
    id: 5,
    type: 'trust',
    question: (
      <>
        지인의 결혼식과 <br /> 상대의 결혼식이 겹쳤다.
        <br />
        나의 반응은?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 5,
    answerList: ['상대방 결혼식에 참석해 얼굴 비춘다.', '미안하지만 송금으로 마음을 전한다.'],
  },
  {
    id: 6,
    type: 'talk',
    question: (
      <>
        나는 상대와 <br /> 단둘이 식사를 할 수 있다.
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 6,
    answerList: ['예', '아니오'],
  },
  {
    id: 7,
    type: 'love',
    question: (
      <>
        상대의 생일날 <br /> 나의 반응은?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 7,
    answerList: ['연락해서 축하라도 해줘야겠다.', '알아서 잘 보내겠지라는 생각으로 넘긴다.'],
  },
  {
    id: 8,
    type: 'trust',
    question: (
      <>
        상대가 결혼할 사람이라며
        <br /> 인사를 시켜준다. <br /> 나의 반응은?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 8,
    answerList: ['예전부터 이상형이 한결 같다.', '왜 나에게 인사를 시켜주는 지 모르겠다.'],
  },
  {
    id: 9,
    type: 'trust',
    question: (
      <>
        상대에게 다수가 모르는 <br /> 나의 비밀이나 고민을
        <br /> 말할 수 있다.
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 9,
    answerList: ['예', '아니오'],
  },
  {
    id: 10,
    type: 'trust',
    question: (
      <>
        상대와 만나기로 약속한 당일 <br /> 갑자기 연락이 없다. <br /> 나의 반응은?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 10,
    answerList: [
      '무슨 사정이 있겠지. 연락오기를 기다린다.',
      '잠수탄 것 아닐까? 의심하며 귀가 준비한다.',
    ],
  },
  {
    id: 11,
    type: 'trust',
    question: (
      <>
        상대가 연락와서
        <br /> 축사를 하기로 약속했다. <br />
        이때 나는?
      </>
    ),
    image: `/images/testWorry.png`,
    progress: 11,
    answerList: [
      '어떻게 쓸 지 고민되지만 연락줘서 고맙다.',
      '쓸 말이 없어 막막하고 스트레스 받는다.',
    ],
  },
];
