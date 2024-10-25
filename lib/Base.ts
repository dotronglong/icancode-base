import {HashMap} from './Types';

export const toHashMap = function(
    o: any,
    only?: string[],
    ignore?: string[],
): HashMap {
  const keys = Object.keys(o);
  const data: HashMap = {};
  keys.forEach((k) => {
    if ((only && Array.isArray(only) && only.indexOf(k) === -1) ||
    (ignore && Array.isArray(ignore) && ignore.indexOf(k) >= 0)) {
      // this key will not be exported
      return;
    }

    if (typeof o[k] === 'undefined' || typeof(o[k]) === 'function') {
      return;
    }

    if (typeof o[k] === 'object') {
      data[k] = Array.isArray(o[k]) ? o[k] : toHashMap(o[k]);
    } else {
      data[k] = o[k];
    }
  });

  return data;
};

export const toView = (data: any, only?: string[], ignore?: string[]): any => {
  if (Array.isArray(data)) {
    const items: HashMap[] = [];
    for (const item of data) {
      items.push(toHashMap(item, only, ignore));
    }

    return items;
  }

  return toHashMap(data, only, ignore);
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
