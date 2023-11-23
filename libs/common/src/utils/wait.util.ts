/**
 * wait promise function
 * @param ms {number}
 * @returns Promise<void>
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
