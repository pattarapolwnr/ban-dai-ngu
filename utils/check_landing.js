export default function check_landing(index) {
  const cards = [2, 5, 8, 12, 16, 18, 23, 32, 36, 42, 44, 47];
  const traps = [10, 13, 17, 20, 22, 24, 26, 28, 30, 34, 38, 40, 46, 49];
  const mystery = [7, 19, 25, 31, 43];
  if (cards.includes(index)) {
    return 'cards';
  } else if (traps.includes(index)) {
    return 'traps';
  } else if (mystery.includes(index)) {
    return 'mystery';
  } else {
    return '';
  }
}
