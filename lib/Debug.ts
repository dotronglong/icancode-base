type DebugFunction = (...args: unknown[]) => void;
const emptyDebugFunction: DebugFunction = () => {};

/**
 * Creates a debug function to log messages.
 * @param {string} module - The module name to include in the debug namespace.
 * @return {DebugFunction} A debug function for logging.
 */
export const createDebug = (module: string): DebugFunction => {
  let debugFunction: DebugFunction = emptyDebugFunction;

  if (process.env.DEBUG) {
    try {
      // Directly call require('debug') with the module name
      debugFunction = require('debug')(module);
    } catch (error) {
      console.warn(`Failed to load 'debug' module. Using console fallback.`, error);
      debugFunction = (...args: unknown[]): void => {
        console.log(`[${module}]`, ...args);
      };
    }
  }

  return debugFunction;
};
