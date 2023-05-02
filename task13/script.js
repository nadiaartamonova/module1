'use strict';

const lang = prompt('Language:');
if (lang.toUpperCase === 'ENG' || lang.toUpperCase('EN')) {
  console.log('scritp', lang);
  // eslint-disable-next-line new-cap
  const startGame = window.RPS('EN');
  startGame();
} else {
  console.log('scritp', lang);
  // eslint-disable-next-line new-cap
  const startGame = window.RPS('RUS');
  startGame();
}

