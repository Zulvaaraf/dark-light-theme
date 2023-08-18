const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      display.innerHTML = '';
    } else if (item.id == 'double') {
      display.innerHTML += '00';
    } else if (item.id == 'zero') {
      display.innerHTML += '0';
    } else if (item.id == 'delete') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equal') {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && item.id == 'equal') {
      display.innerText = 'Empty';
      setTimeout(() => (display.innerText = ''), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeBtn = document.querySelector('.theme');
const calculator = document.querySelector('.calculator');
const icon = document.querySelector('.icon');
const bodyColor = document.querySelector('body');
let isDark = true;
themeBtn.onclick = () => {
  calculator.classList.toggle('dark');
  bodyColor.classList.toggle('dark');
  themeBtn.classList.toggle('active');
  isDark = !isDark;
};
