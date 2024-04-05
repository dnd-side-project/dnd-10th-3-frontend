/**
 * 최소값과 최댓값을 기반으로 값을 퍼센트로 전환해주는 함수.
 * 
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */
export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min)
}