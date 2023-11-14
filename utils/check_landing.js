export default function check_landing(index, mode) {
  if (mode === 'easy') {
    let cards = [2, 5, 8, 12, 16, 23, 32, 36, 42, 44];
    let traps = [13, 17, 22, 28, 38];
    let monsters = [10, 24, 34, 40, 46];
    let mystery = [7, 19, 25, 31, 43, 49];
    if (cards.includes(index)) {
      return 'cards';
    } else if (traps.includes(index)) {
      return 'traps';
    } else if (monsters.includes(index)) {
      return 'monster';
    } else if (mystery.includes(index)) {
      return 'mystery';
    } else {
      return 'empty';
    }
  } else if (mode === 'medium') {
    let cards = [2, 5, 8, 12, 16, 23, 32, 36, 42, 44];
    let traps = [6, 13, 17, 22, 28, 30, 38];
    let monsters = [4, 10, 15, 24, 34, 40, 46];
    let mystery = [7, 19, 25, 31, 43, 49];
    if (cards.includes(index)) {
      return 'cards';
    } else if (traps.includes(index)) {
      return 'traps';
    } else if (monsters.includes(index)) {
      return 'monster';
    } else if (mystery.includes(index)) {
      return 'mystery';
    } else {
      return 'empty';
    }
  } else if (mode === 'hard') {
    let cards = [2, 5, 8, 12, 16, 23, 32, 36, 42, 44];
    let traps = [6, 13, 17, 22, 28, 30, 38, 47];
    let monsters = [4, 10, 15, 24, 29, 34, 40, 46];
    let mystery = [7, 19, 25, 31, 43, 49];
    if (cards.includes(index)) {
      return 'cards';
    } else if (traps.includes(index)) {
      return 'traps';
    } else if (monsters.includes(index)) {
      return 'monster';
    } else if (mystery.includes(index)) {
      return 'mystery';
    } else {
      return 'empty';
    }
  }
}

export function check_isTeleport(index, mode) {
  if (mode === 'easy') {
    if (index === 10) {
      const teleport = {
        isTeleport: true,
        teleport_to: 14,
      };
      return teleport;
    } else if (index === 21) {
      const teleport = {
        isTeleport: true,
        teleport_to: 27,
      };
      return teleport;
    } else if (index === 24) {
      const teleport = {
        isTeleport: true,
        teleport_to: 29,
      };
      return teleport;
    } else if (index === 30) {
      const teleport = {
        isTeleport: true,
        teleport_to: 39,
      };
      return teleport;
    } else if (index === 41) {
      const teleport = {
        isTeleport: true,
        teleport_to: 47,
      };
      return teleport;
    } else {
      const teleport = {
        isTeleport: false,
      };
      return teleport;
    }
  } else if (mode === 'medium') {
    if (index === 9) {
      const teleport = {
        isTeleport: true,
        teleport_to: 15,
      };
      return teleport;
    } else if (index === 20) {
      const teleport = {
        isTeleport: true,
        teleport_to: 26,
      };
      return teleport;
    } else if (index === 24) {
      const teleport = {
        isTeleport: true,
        teleport_to: 29,
      };
      return teleport;
    } else if (index === 33) {
      const teleport = {
        isTeleport: true,
        teleport_to: 37,
      };
      return teleport;
    } else if (index === 41) {
      const teleport = {
        isTeleport: true,
        teleport_to: 46,
      };
      return teleport;
    } else {
      const teleport = {
        isTeleport: false,
      };
      return teleport;
    }
  } else if (mode === 'hard') {
    if (index === 4) {
      const teleport = {
        isTeleport: true,
        teleport_to: 8,
      };
      return teleport;
    } else if (index === 21) {
      const teleport = {
        isTeleport: true,
        teleport_to: 24,
      };
      return teleport;
    } else if (index === 24) {
      const teleport = {
        isTeleport: true,
        teleport_to: 29,
      };
      return teleport;
    } else if (index === 30) {
      const teleport = {
        isTeleport: true,
        teleport_to: 36,
      };
      return teleport;
    } else if (index === 38) {
      const teleport = {
        isTeleport: true,
        teleport_to: 46,
      };
      return teleport;
    } else {
      const teleport = {
        isTeleport: false,
      };
      return teleport;
    }
  }
}
