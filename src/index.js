class baseBallGame {
  answerArr = [];
  randomNumCreate() {
    // 랜덤으로 컴퓨터에 저장되는 수 생성
    randomNumber1 = Math.round(Math.random() * 9);
    do randomNumber2 = Math.round(Math.random() * 9);
    while (randomNumber1 === randomNumber2);
    do randomNumber3 = Math.round(Math.random() * 9);
    while (randomNumber2 === randomNumber3 || randomNumber3 === randomNumber1);
    answerArr = [randomNumber1, randomNumber2, randomNumber3]
    return answerArr;
  }

  // 스코프 오류
  // randomNumber = [randomNumber1, randomNumber2, randomNumber3]; // 배열로 사용하여 비교하기 위해 배열로 정의

  // 정답숫자 변수에 저장.
  randomNumber = this.randomNumCreate()

  userNumber = document.getElementsByName('userNumber');


  // userNumber = [userNumber1, userNumber2, userNumber3]; // random number와 비교하기 위해 배열로 지정

  
  checker() {
    // 비교시작
    let s = 0,
      b = 0; // 이중포문을 통해 인수값과 결과같이 같으면 strike, 결과값만 같으면 ball 둘다 같지 않으면 아웃으로 처리.
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (this.randomNumber[i].toString() === this.userNumber[j].value && i === j) {
          s++;
        } else if (this.randomNumber[i].toString() === this.userNumber[j].value && i !== j) {
          b++;
        }
      }
    }
    return [s + "strike " + b + "ball", s];
  }

}

const game = new baseBallGame();

// 변경사항
const btnTry = document.querySelector(".input-box__try"); // DOM 설정  시작!! 박스로 userNumber값 넘기기

const btnReset = document.querySelector('.input-box__reset');

let num1 = document.getElementsByName('userNumber')[0];
let num2 = document.getElementsByName('userNumber')[1];
let num3 = document.getElementsByName('userNumber')[2];
let trial = document.getElementsByName('trial');
let answer = document.querySelector('.answer');
let count = 0;

console.log(randomNumber1,randomNumber2,randomNumber3);


btnTry.addEventListener('click', function () {
  let iDiv = document.createElement('div');
  iDiv.className = 'score-box';
  count++;
  document.querySelector('.turn-list').appendChild(iDiv);
  iDiv.textContent = count + '회 ====== ' + num1.value + ' ' + num2.value + ' ' + num3.value + ' ==== ' + game.checker()[0];

  // 이부분 코딩중입니다!
  if (game.checker()[1] === 3){ 
    alert("정답입니다");
    answer.textContent = "정답은 " + game.randomNumber + " 입니다.";
    btnTry.setAttribute("disabled", "disabled");

  }
  num1.value = "";
  num2.value = "";
  num3.value = "";
  
  num1.focus();

  if(count === 9){
    answer.textContent = '정답은 ' + game.randomNumber + ' 입니다.'
    alert("게임이 끝났습니다 그만 하시죠 사장님");
    btnTry.setAttribute("disabled", "disabled");
  }
 
});

num1.addEventListener('keypress', function () {
  numTest = /^[0-9]/g;
  if (num1.value !== '' || num1.value !== null || num1.value === numTest) {
    num2.focus();
  } else {
    num1.focus().value = '';
  }
});
num2.addEventListener('keypress', function () {
  if (num2.value !== '' || num2.value !== null) {
    num3.focus();
  }
});
 // 이부분 입니다!
// num3.addEventListener('keypress', function () {
//   if (num3.value !== '' || num3.value !== null) {
//     trial.focus();
//   }
// });
// 새로고침
btnReset.addEventListener('click', () => {
  location.replace('');
});



// console.log(game.randomNumCreate())
// console.log(game.checker())
// 세자리수가 랜덤으로 0~9 까지나오고

// 같은 번호가 아닌

// 정답 3자리수를 컴퓨터가 저장

// —————————————————————

// 시도하는 숫자랑 비교해서 맞는 것을 판단

// 숫자가 위치는 맞지않고 존재하면 ball 개념

// 숫자가 위치까지 맞으면 strikt

// 아무것도 안맞을시  out

// 다맞으면 게임끝