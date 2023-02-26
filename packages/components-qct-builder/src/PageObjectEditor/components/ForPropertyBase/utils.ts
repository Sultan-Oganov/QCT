export const parseData = (str: string = ''): number[] => {
  if (typeof str === 'string') {
    const newStr = str
      .trim()
      .split(' ')
      .map((el) => parseInt(el));

    const strLength = newStr.length;

    if (strLength === 3) {
      return [...newStr, 0];
    } else if (strLength === 0) {
      return [0];
    }

    return newStr;
  }
  return [0];
};
