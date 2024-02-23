export type TestFormType = {
  buddy: string;
  gender: string;
  age: string;
  trust: number;
  love: number;
  talk: number;
};

export type TestFormResponseType = TestFormType & {
  id: number;
  temperature: number;
  imageUrl: string;
  description: string;
  title: string;
  createdAt: string;
};
