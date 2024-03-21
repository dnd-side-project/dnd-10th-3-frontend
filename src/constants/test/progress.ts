import { allQuestionList, preQuestionList } from "./step";


export const QUESTIONS_ORDERS_LENGTH = allQuestionList.length
export const PRE_QUESTIONS_LENGTH = preQuestionList.length;
export const QUESTIONS_LENGTH_PER_TOPIC = 3

export const PROGRESS_RATE = (1 / QUESTIONS_ORDERS_LENGTH) * 100