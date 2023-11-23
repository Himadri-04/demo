import { BinaryLike, createHash } from 'node:crypto';

/**
 * createHash a hash tag
 * @param content {BinaryLike}
 * @returns content
 */
export function md5(content: BinaryLike) {
  return createHash('md5').update(content).digest('hex');
}
