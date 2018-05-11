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
    return [s + "S " + b + "B", s, b];
  }

}

const game = new baseBallGame();

// 변경사항



btnTry.addEventListener('click', function () {

  let iDiv = document.createElement('div');
  iDiv.className = 'score-box';
  let iCount = document.createElement('div');
  iCount.className = 'count';
  let iScore = document.createElement('div');
  iScore.className = 'score';
  let iNumber1 = document.createElement('span');
  let iNumber2 = document.createElement('span');
  let iNumber3 = document.createElement('span');
  iNumber1.className = 'inumber';
  iNumber2.className = 'inumber';
  iNumber3.className = 'inumber';
  count++;
  document.querySelector('.turn-list').appendChild(iDiv);
  iDiv.appendChild(iCount);
  iDiv.appendChild(iScore);
  iDiv.appendChild(iNumber1);
  iDiv.appendChild(iNumber2);
  iDiv.appendChild(iNumber3);
  //iDiv.textContent = count + '회 ====== ' + num1.value + ' ' + num2.value + ' ' + num3.value + ' ==== ' + game.checker()[0];
  iCount.textContent = count + '회';
  iNumber1.textContent = num1.value;
  iNumber2.textContent = num2.value;
  iNumber3.textContent = num3.value;

  iScore.textContent = game.checker()[0];

  // 이부분 코딩중입니다!
  if (game.checker()[1] === 3){ 
    alert("정답입니다");
    answer.textContent = "정답은 " + game.randomNumber + " 입니다.";
    btnTry.setAttribute("disabled", "disabled");
  }
  if (game.checker()[1] === 0 && game.checker()[2] === 0) {
    iScore.textContent = 'OUT';
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
//새로고침
btnReset.addEventListener('click', function(){
  location.replace('');
});