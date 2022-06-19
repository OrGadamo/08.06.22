//TimeOut tasks
//1
function printMyNameInDelay() {
  setTimeout(() => {
    printer_h1.innerText = "Hi Or Gadamo";
  }, 7000);
}
//2
function printMessageInDelay() {
  setTimeout(() => {
    printer_h1.innerText += "Hello" + "\n";
  }, 5000);
  printer_h1.innerText += "Bye" + "\n";
}
//3
function printTime() {
  var dateObj = new Date();
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  printer_h1.innerText = `${hours}:${minutes}`;
}
function printTimeInDelay() {
  setTimeout(() => {
    printTime();
  }, 90000);
}
//4
// var timeoutId;
function shufflePrint() {
  if (timeoutId == null) {
    printLoveMessageInDelay();
    shuffle_btn.innerText = "STOP PRINT";
    return;
  }
  stopPrint();
  shuffle_btn.innerText = "PRINT";
}
function printLoveMessageInDelay() {
  timeoutId = setTimeout(() => {
    printer_h1.innerText = "I Love Timers";
  }, 10000);
}
function stopPrint() {
  clearTimeout(timeoutId);
  timeoutId = null;
}
//5
// onload = () => {
//   printer_h1.innerText = "Welcome To My Site";
//   printer_h1.style.color = "blue";
//   setTimeout(() => {
//     printer_h1.style.color = "red";
//   }, 3000);
// };
