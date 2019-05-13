setInterval(realTime, 1000)

function realTime() {

  var tFull = new Date();
  var week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  var weekNow = week[tFull.getDay()];
  var monthNow = month[tFull.getMonth()];
  var day = tFull.getDate();
  var year = tFull.getFullYear();
  var hour = tFull.getHours();
  var minute = tFull.getMinutes();
  var sec = tFull.getSeconds();

  function rightTime(num, str1, str2, str3) {
    numEnd = num % 10;
    if (num>=11 && num<=19) {
      return num + ' ' + str2;
    } else if (num == 1 || numEnd == 1) {
      return num + ' ' + str1;
    } else if (num>=2 && num <=4) {
      return num + ' ' + str3;
    } else if (numEnd>=2 && numEnd<=4) {
      return num + ' ' + str3;
    } else {
      return num + ' ' + str2;
    }
  }

  var h = rightTime(hour, 'час', 'часов', 'часа');
  var m = rightTime(minute, 'минута', 'минут', 'минуты');
  var s = rightTime(sec, 'секунда', 'секунд', 'секунды');

  time.innerText = // Time output
    'Сегодня ' + day + ' ' + monthNow + ' ' + year + ' года, ' + weekNow + ', ' +
    h + ' ' + m + ' ' + s
}
