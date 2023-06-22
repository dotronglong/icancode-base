export interface Getter {
  /**
   * Get value by name
   * @param {string} name
   * @returns {any | undefined}
   */
  get(name: string): any | undefined;

  /**
   * Get value as string by name
   * @param {string} name
   * @return {string | undefined}
   */
  getString(name: string): string | undefined;

  /**
   * Get value as boolean by name
   * @param {string} name
   * @return {boolean | undefined}
   */
  getBoolean(name: string): boolean | undefined;

  /**
   * Get value as number by name
   * @param {string} name
   * @return {number | undefined}
   */
  getNumber(name: string): number | undefined;
}
