var num = 0;
var chances = 3;
var i = 0;
var min = 1;
var max = 10;


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numOfComp = getRandomNum(min, max);
console.log('HINT: Guess number is ' + numOfComp);

while(i < chances) {
  num = prompt('Input a number from ' + min + ' to ' + max, '');
  i++;
  if(num - 0 == num) {
    if(num > numOfComp) {
      alert('Less... ' + 'You have ' + (chances - i) + ' chances left');
    } else if(num < numOfComp) {
      alert('More... ' + 'You have ' + (chances - i) + ' chances left');
    } else {
      alert('You are win! Guess number is ' + numOfComp);
      break;
    }
  }
  if(num == null) {
    break;
  }
}

alert('The end of game');
