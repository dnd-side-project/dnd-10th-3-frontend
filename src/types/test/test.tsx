export type TestFormType = {
  buddy: string;
  gender: string;
  age: string;
  trust: number;
  love: number;
  talk: number;
};

// TODO : 엄격한 타입 설정하기
export type TestResultFormType = TestFormType & {
  id: number;
  temperature: number;
  imageUrl: string;
  description: string;
  title: string;
  createdAt: string;
};
