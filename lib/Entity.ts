import {HashMapImportable} from './HashMap';
import {HashMap} from './Types';

/**
 * Entity
 */
export class Entity implements HashMapImportable {
  /**
   * Import data from HashMap
   * @param {HashMap} data
   */
  fromHashMap(data: HashMap): void {
    for (const key in data) {
      if (key in this) {
        (this as any)[key] = data[key];
      }
    }
  }
}
