import {HashMap} from './Types';

export interface HashMapConvertible {
  /**
   * Convert to HashMap
   * @return {HashMap}
   */
  toHashMap(): HashMap;
}

export interface HashMapImportable {
  /**
   * Import data from HashMap
   * @param {HashMap} data
   */
  fromHashMap(data: HashMap): void;
}
