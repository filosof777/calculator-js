let elBtnClear = document.getElementById('btn-clear');
let elBtnDivide = document.getElementById('btn-divide');
let elBtnMultiply = document.getElementById('btn-multiply');
let elBtnRemove = document.getElementById('btn-remove');
let elBtn7 = document.getElementById('btn-7');
let elBtn8 = document.getElementById('btn-8');
let elBtn9 = document.getElementById('btn-9');
let elBtnMultipl = document.getElementById('btn-multipl');
let elBtn4 = document.getElementById('btn-4');
let elBtn5 = document.getElementById('btn-5');
let elBtn6 = document.getElementById('btn-6');
let elBtnAdd = document.getElementById('btn-add');
let elBtn1 = document.getElementById('btn-1');
let elBtn2 = document.getElementById('btn-2');
let elBtn3 = document.getElementById('btn-3');
let elBtnProcent = document.getElementById('btn-procent');
let elBtnPoint = document.getElementById('btn-point');
let elBtn0 = document.getElementById('btn-0');

let elBtnBarobar = document.getElementById('btn-barobar');
let elInput = document.querySelector('.calc-input');
let elJavob = document.querySelector('.calc-answer');

elBtnClear.addEventListener('click', () => {
  elInput.value = '';
  elAnswerList.firstChild.remove(0);
});

elBtnDivide.addEventListener('click', () => {
  if (elInput.value.slice(- 1) != "/" && elInput.value.slice(- 1) != "*" && elInput.value.slice(- 1) != "+" && elInput.value.slice(- 1) != "-" && elInput.value != "") {
    elInput.value += '/';
  }
});

elBtnMultiply.addEventListener('click', () => {
  if (elInput.value.slice(- 1) != "/" && elInput.value.slice(- 1) != "*" && elInput.value.slice(- 1) != "+" && elInput.value.slice(- 1) != "-" && elInput.value != "") {
    elInput.value += '*'
  }
});

elBtnMultipl.addEventListener('click', () => {
  if (elInput.value.slice(- 1) != "/" && elInput.value.slice(- 1) != "*" && elInput.value.slice(- 1) != "+" && elInput.value.slice(- 1) != "-") {
    elInput.value += '-'
  }
});

elBtnAdd.addEventListener('click', () => {
  if (elInput.value.slice(- 1) != "/" && elInput.value.slice(- 1) != "*" && elInput.value.slice(- 1) != "+" && elInput.value.slice(- 1) != "-") {
    elInput.value += '+'
  }
});

elBtnProcent.addEventListener('click', () => {
  if (elInput.value.slice(- 1) != "/" && elInput.value.slice(- 1) != "*" && elInput.value.slice(- 1) != "+" && elInput.value.slice(- 1) != "-") {
    elInput.value += '%'
  }
});

elBtnRemove.addEventListener('click', () => {
  elInput.value = elInput.value.slice(0,- 1);
});

elBtn1.addEventListener('click', () => {
  elInput.value += '1';
});

elBtn2.addEventListener('click', () => {
  elInput.value += '2';
});

elBtn3.addEventListener('click', () => {
  elInput.value += '3';
});

elBtn4.addEventListener('click', () => {
  elInput.value += '4';
});

elBtn5.addEventListener('click', () => {
  elInput.value += '5';
});

elBtn6.addEventListener('click', () => {
  elInput.value += '6';
});

elBtn7.addEventListener('click', () => {
  elInput.value += '7';
});

elBtn8.addEventListener('click', () => {
  elInput.value += '8';
});

elBtn9.addEventListener('click', () => {
  elInput.value += '9';
});

elBtn0.addEventListener('click', () => {
  elInput.value += '0';
});

elBtnPoint.addEventListener('click', () => {
  if (elInput.value.slice(- 1) != ".") {
    elInput.value += '.';
  }
});

let elAnswerList = document.querySelector('.answer-list');

elBtnBarobar.addEventListener('click', () => {
  let input = document.createElement('input');
  input.className = 'calc-answer';
  // input.value = eval(elInput.value);
  input.setAttribute('disabled', 'disabled');
  input.value = elInput.value + '=' + eval(elInput.value);
  elAnswerList.appendChild(input);

  if (elInput.value == '') {
    input.value = 'Error'
  }
});