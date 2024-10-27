import {HashMap} from './Types';
interface HashMapOptions {
  include?: string[];
  exclude?: string[];
}

export const toHashMap = (
  obj: Record<string, any>,
  options: HashMapOptions = {}
): HashMap => {
  const { include, exclude } = options;

  return Object.entries(obj).reduce((data: HashMap, [key, value]) => {
    // Include only specified keys if `include` is defined at the top level
    if (include && !include.includes(key)) {
      return data;
    }

    // Exclude specified keys if `exclude` is defined
    if (exclude && exclude.includes(key)) {
      return data;
    }

    // Exclude undefined and function values
    if (typeof value === 'undefined' || typeof value === 'function') {
      return data;
    }

    // Recursively process nested objects without filtering by `include` or `exclude`
    data[key] = typeof value === 'object' && !Array.isArray(value)
      ? toHashMap(value) // Call without `options` for nested objects
      : value;

    return data;
  }, {});
};

export const toView = (
  data: any | any[],
  options: HashMapOptions = {}
): HashMap | HashMap[] => {
  return Array.isArray(data)
    ? data.map((item) => toHashMap(item, options))
    : toHashMap(data, options);
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
