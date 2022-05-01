function cubicBezier(x0: number, y0: number, x1: number, y1: number) {
  const foo = parseFloat('1.234');
  return true;
}

/**
 * Returns a list of the dates left in month
 *
 * @returns Array
 * @customfunction
 */
function daysLeftinMonth() {
  // calculate dates left in month from today, return as array
  const isLeap = (year: number) => (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  const range = (start: number, stop: number) => Array.from({ length: stop - start }, (_, i) => start + i);

  const today = new Date();
  const months = [31, isLeap(today.getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = today.getDate();

  return range(today.getDate(), months[today.getMonth()] + 1);
}
