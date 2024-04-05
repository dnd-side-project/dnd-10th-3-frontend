
/**
 * 분자와 분모를 받아 백분율을 구해주는 유틸 함수
 * @param numerator 분자
 * @param denominator 분모
 * @returns 정수
 */

export const calculateFloorPercentage = (numerator: number, denominator: number) => {
    return Math.floor((numerator / denominator) * 100);
};