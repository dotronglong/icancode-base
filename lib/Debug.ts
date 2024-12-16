type DebugFunction = (...args: unknown[]) => void;

/**
 * Creates a namespaced debug function.
 * @param {string} module - The module name to include in the debug namespace.
 * @param {string} [namespace='icancode'] - The global namespace.
 * @return {DebugFunction} A debug function for logging.
 */
export const debug = (module: string, namespace: string = 'icancode'): DebugFunction => {
  let debugFunction: DebugFunction = () => {};

  if (process.env.DEBUG) {
    const name = `${namespace}:${module}`;
    try {
      // Dynamically require 'debug' only when needed
      const createDebug = require('debug');
      debugFunction = createDebug(name);
    } catch (error) {
      console.warn(`Failed to load 'debug' module. Using console fallback.`, error);
      debugFunction = (...args: unknown[]): void => {
        console.log(`[${name}]`, ...args);
      };
    }
  }

  return debugFunction;
};
