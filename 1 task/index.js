const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let second;

// подбирает подходяшее слово
const checkNumber = (number, word1, word2, word3) =>{
  if(number === 0 || (number >= 5 && number < 21)){
    return word3
  }else if(number === 1){
    return word1
  }else if(number >= 2  && number <= 5){
    return word2
  }
}

const changeEndWord = (number, word1, word2, word3) => {
  const saveInitial = number;
  if(number >= 21){
    let lastNumber = number % 10;
    console.log(lastNumber);
    const word = checkNumber(lastNumber, word1, word2, word3)
    return  word
  }else{
    return checkNumber(number, word1, word2, word3)
  }
}



// анимирование таймера 
const createTimerAnimator = (time) => {
  
  const arrNumbers = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 
  'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 
  'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать', 'двадцать', 
  'двадцать один', 'двадцать два', 'двадцать три', 'двадцать четыре']
  
  time -= 1;

  const hour = Math.floor(time / 60 / 60) > 0 ? Math.floor(time / 60 / 60) : 0
  console.log(hour)
  const min = Math.floor(time / 60) > 0 ? Math.floor(time / 60) % 60 : 0
  console.log(min)
  const sec = Math.floor(time) > 0 ? Math.floor(time) % 60 : 0
  console.log(sec)

  timerEl.innerHTML = `${arrNumbers[(hour % 24)]} ${changeEndWord(hour, "час", "часа", "часов")}, ${min < 10 ? '0' + min : min} ${changeEndWord(min, "минута", "минуты", "минут")}, ${sec < 10 ? '0' + sec : sec} ${sec, "секунда", "секунды", "секунд"} `
  
  if(Number(time) < 0){
    clearTimeout(createTimerAnimator)
  }else{ 
    setTimeout(createTimerAnimator, 1000, time)
  }
  
};



const animateTimer = createTimerAnimator;

// В импуте перевотит числа в минуты 
inputEl.addEventListener('input', (e) => {
  const splitTime =  typeof e.target.value === 'string' ? e.target.value.split(':') : e.target.value;
  second = (parseInt(splitTime[0]) * 60 * 60) + (parseInt(splitTime[1]) * 60) + parseInt(splitTime[2]);
});


buttonEl.addEventListener('click', () => {
  if(typeof +inputEl.value !== 'number'){
    const warning = document.createElement('p')
    warning.textContent = 'Введите пожайлуста время по формату: 01:12:59'
    warning.style.color = "red"
    setTimeout(() =>{
      warning.textContent = ''
    }, 5000)
    document.body.appendChild(warning)
  }else{
    inputEl.value = second
    const seconds = inputEl.value;
    console.log(seconds);
    createTimerAnimator(seconds);
    inputEl.value = '';
  }
  
});
