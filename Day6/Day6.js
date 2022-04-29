const currentValue = document.querySelector('.current-value');
const store  = document.querySelector('.store');

const numbers = Array.from(document.querySelectorAll('.number'));

numbers.map(number => {
  number.addEventListener('click', setNum);
})

function setNum() {
  currentValue.innerText += this.innerText;
}
const cals = Array.from(document.querySelectorAll('.cal'));

cals.map(cal => {
  cal.addEventListener('click', setCal);
})

function setCal() { 
  if (currentValue.innerText !== '') {
    if (store.innerText === '') {
      store.innerText = currentValue.innerText + ' ' + this.innerText
    } else {
      store.innerText = `${store.innerText} ${currentValue.innerText} ${this.innerText}`
    }
  } 
  
  clearValue(); 
}

const result = document.querySelector('.result');

result.addEventListener('click', getTotal);

function getTotal() {
  console.log(store.innerText + currentValue.innerText);
  if(currentValue.innerText !== '') { 
    currentValue.innerText = eval(store.innerText + currentValue.innerText);
  } 
  console.log("결과 : "+currentValue.innerText);
  clearStore();
}
const AC = document.querySelector('.ac');
AC.addEventListener('click', function(){
    clearValue();
    clearStore();
  });
  
  function clearValue() {
    currentValue.innerText = '';
  }
  
  function clearStore() {
    store.innerText = '';
  }