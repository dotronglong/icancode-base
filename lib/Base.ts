import {HashMap} from './Types';

export const toHashMap = function(
    o: any,
    only?: string[],
    ignore?: string[],
): HashMap {
  // Early return if 'only' is defined but empty, resulting in an empty object.
  if (only && only.length === 0) return {};

  return Object.entries(o).reduce((data: HashMap, [key, value]) => {
    // Skip keys not in 'only' list or present in 'ignore' list
    if ((only && !only.includes(key)) || (ignore && ignore.includes(key))) {
      return data;
    }

    // Exclude undefined and function values
    if (typeof value === 'undefined' || typeof value === 'function') {
      return data;
    }

    // Recursively process nested objects, skip if it's an array
    data[key] = typeof value === 'object' && !Array.isArray(value) ?
      toHashMap(value) :
      value;

    return data;
  }, {});
};

export const toView = (
    data: any | any[],
    only?: string[],
    ignore?: string[],
): HashMap | HashMap[] => {
  return Array.isArray(data) ?
    data.map((item) => toHashMap(item, only, ignore)) :
    toHashMap(data, only, ignore);
};

export const setNestedValue = (
    data: any, path: string | string[], value: string,
): void => {
  if (Array.isArray(path)) {
    path.forEach((p) => setNestedValue(data, p, value));
    return;
  }

  const keys = path.split('.');
  let current = data;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
};

export const removeNestedValue = (data: any, path: string | string[]): void => {
  if (Array.isArray(path)) {
    path.forEach((p) => removeNestedValue(data, p));
    return;
  }

  const keys = path.split('.');
  let current = data;

  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]]) {
      current = current[keys[i]];
    } else {
      return;
    }
  }

  delete current[keys[keys.length - 1]];
};
