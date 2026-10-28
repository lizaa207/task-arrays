export function arraySorting(str) {
  return str
    .split(',')
    .map(Number)
    .sort((a, b) => a - b)
    .join(',');
}

export function arrayFiltering(arr) {
  return arr.filter((num) => num <= 100);
}

export function arrayPushing(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i++) {
    result.push(first[i], second[i]);
  }

  return result;
}
