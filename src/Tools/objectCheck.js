export const isObject = (value) =>
  typeof value === "object" && !Array.isArray(value) && value !== null
    ? true
    : false;
