const answer = document.querySelector('.answer');
const btnTry = document.querySelector(".input-box__try");
const btnReset = document.querySelector('.input-box__reset');
const num1 = document.getElementsByName('userNumber')[0];
const num2 = document.getElementsByName('userNumber')[1];
const num3 = document.getElementsByName('userNumber')[2];
const trial = document.getElementsByName('btnTry')[0];
const turnList = document.querySelector('.turn-list');
let count = 0;

class baseBallGame {
  answerArr = [];
  randomNumCreate() {
    // 랜덤으로 컴퓨터에 저장되는 수 생성
    randomNumber1 = Math.round(Math.random() * 9);
    do randomNumber2 = Math.round(Math.random() * 9);
    while (randomNumber1 === randomNumber2);
    do randomNumber3 = Math.round(Math.random() * 9);
    while (randomNumber2 === randomNumber3 || randomNumber3 === randomNumber1);
    answerArr = [randomNumber1,randomNumber2,randomNumber3]
    return answerArr;
  }
 
  // 스코프 오류
  // randomNumber = [randomNumber1, randomNumber2, randomNumber3]; // 배열로 사용하여 비교하기 위해 배열로 정의
 
  // 정답숫자 변수에 저장.
  randomNumber = this.randomNumCreate();
  userNumber = document.getElementsByName('userNumber');

  // userNumber = [userNumber1, userNumber2, userNumber3]; // random number와 비교하기 위해 배열로 지정
 
  checker() {
    // 비교시작
    let s = 0, b = 0, c='OUT'; // 이중포문을 통해 인수값과 결과같이 같으면 strike, 결과값만 같으면 ball 둘다 같지 않으면 아웃으로 처리.
    let answerMsg = '';
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (this.randomNumber[i].toString() === this.userNumber[j].value && i === j) {
          s++;
        } else if (this.randomNumber[i].toString() === this.userNumber[j].value && i !== j) {
          b++;
        }
        // else if(this.randomNumber[i].toString() !== this.userNumber[j].value && i !== j) {
        //   answerMsg = c;
        // }
        if(s === 3){
          answer.textContent = '정답입니다! 정답은' + this.randomNumber + ' 입니다.';
        }
      }
    }
    
    return answerMsg = s + "strike " + b + "ball";
  }

}

const game = new baseBallGame();

// 변경사항

btnTry.addEventListener('click', function (e) {
  let iDiv = document.createElement('div');
  count++;
  turnList.appendChild(iDiv);
  iDiv.textContent = count + '회 ====== ' + num1.value + ' ' + num2.value + ' ' + num3.value + ' ==== ' + game.checker();

  // 이부분 코딩중입니다!
  // if(iDiv.elmatches('3strikes')){ 
  //   let iDiv2 = document.createElement('div');
  //   iDiv2.textContent = "Finish! Congraturation!!"; 
  // }
  num1.value = "";
  num2.value = "";
  num3.value = "";
  num1.focus();

  if(count === 9){
    answer.textContent = '정답은 ' + game.randomNumber + ' 입니다.';
    btnTry.setAttribute('disabled','disabled');
    btnReset.focus();
  }
});

num1.addEventListener('keypress', function () {
  numTest = /^[0-9]/g;
  if(num1.value !== '' || num1.value !== null || num1.value === numTest){
    num2.focus();
  }
 });
 num2.addEventListener('keypress', function(){
  if(num2.value !== '' || num2.value !== null){
    num3.focus();
  }
});
// 이부분 입니다!
num3.addEventListener('keyup', function () {
  if (num3.value !== '' || num3.value === null) {
    
    trial.focus();
    }
});
//이부분 입니다!


// console.log(game.randomNumCreate())
// console.log(game.checker())
// 세자리수가 랜덤으로 0~9 까지나오고

// 같은 번호가 아닌

// 정답 3자리수를 컴퓨터가 저장

// —————————————————————

// 시도하는 숫자랑 비교해서 맞는 것을 판단

// 숫자가 위치는 맞지않고 존재하면 ball 개념

// 숫자가 위치까지 맞으면 strikt

 

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
