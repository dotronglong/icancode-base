import {HashMap} from './Types';

export interface HashMapConvertible {
  /**
   * Convert to HashMap
   * @param {string[]=} only Result contains only these fields
   * @param {string[]=} ignore Result will ignore these fields
   * @return {HashMap}
   */
  toHashMap(only?: string[], ignore?: string[]): HashMap;
}
