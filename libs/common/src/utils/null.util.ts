/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

/**
 * Check the isNull or not
 * @param obj {any}
 * @returns boolean
 */
export function isNull(obj?: any): boolean {
  return _.isNull(obj) || _.isUndefined(obj);
}

/**
 * Check the isNotNull or not
 * @param obj {any}
 * @returns boolean
 */
export function isNotNull(obj?: any): boolean {
  return !_.isNull(obj) && !_.isUndefined(obj);
}
