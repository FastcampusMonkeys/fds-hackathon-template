// 사용할 변수들 정리
const answer = document.querySelector('.answer');
const btnTry = document.querySelector(".input-box__try");
const btnReset = document.querySelector('.input-box__reset');
const num1 = document.getElementsByName('userNumber')[0];
const num2 = document.getElementsByName('userNumber')[1];
const num3 = document.getElementsByName('userNumber')[2];
const trial = document.getElementsByName('btnTry')[0];
const turnList = document.querySelector('.turn-list');
const guideBox = document.querySelector('.box-guide');
const audio = document.getElementById('audioSports');
let count = 0;

num1.focus();

// class 를 정의합니다
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

  // 정답숫자 변수에 저장.
  randomNumber = this.randomNumCreate();
  userNumber = document.getElementsByName('userNumber');

  checker() {
    // 비교시작
    let s = 0, b = 0;
    // 이중포문을 통해 인수값과 결과같이 같으면 strike, 결과값만 같으면 ball 둘다 같지 않으면 아웃으로 처리.
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (this.randomNumber[i].toString() === this.userNumber[j].value && i === j) {
          s++;
        } else if (this.randomNumber[i].toString() === this.userNumber[j].value && i !== j) {
          b++;
        }
      }
    }
    return [s + "S " + b + "B", s, b]; // 변수를 가져오기 위해 배열로 설정
  }
}

const game = new baseBallGame();

// alert('정답 : ' + game.randomNumber); // 정답 확인용

// 시도 버튼 이벤트
btnTry.addEventListener('click', function () {
  guideBox.remove();
  let iDiv = document.createElement('div');
  let iCount = document.createElement('div');
  let iScore = document.createElement('div');
  let iNumber1 = document.createElement('span');
  let iNumber2 = document.createElement('span');
  let iNumber3 = document.createElement('span');
  iDiv.className = 'score-box';
  iCount.className = 'count';
  iScore.className = 'score';
  iNumber1.className = 'inumber';
  iNumber2.className = 'inumber';
  iNumber3.className = 'inumber';
  
  document.querySelector('.turn-list').appendChild(iDiv); // css를 위한 자식 노드 생성
  iDiv.appendChild(iCount);
  iDiv.appendChild(iScore);
  iDiv.appendChild(iNumber1);
  iDiv.appendChild(iNumber2);
  iDiv.appendChild(iNumber3);

  count++;
  iCount.textContent = count + '회';

  iNumber1.textContent = num1.value;
  iNumber2.textContent = num2.value;
  iNumber3.textContent = num3.value;

  iScore.textContent = game.checker()[0]; // 스코어 체크 실시

  num1.focus();

  // strike와 ball이 한개도 없을 시 out을 return합니다.
  if (game.checker()[1] === 0 && game.checker()[2] === 0) {
    iScore.textContent = 'OUT';
  }

  // strike가 3개 일시 정답을 return 합니다
  if (game.checker()[1] === 3){ 
    alert("정답입니다");
    answer.className += ' on';
    answer.textContent = "정답은 " + game.randomNumber + " 입니다.";
    btnTry.setAttribute("disabled", "disabled");
    btnReset.focus();
  }

  // 9회가 넘어갈시 종료
  if(count === 9){
    alert("게임이 끝났습니다 그만 하시죠 사장님");
    answer.className += ' on';
    answer.textContent = '정답은 ' + game.randomNumber + ' 입니다.'
    btnTry.setAttribute("disabled", "disabled");
    btnReset.focus();
  }

  num1.value = "";
  num2.value = "";
  num3.value = "";

});

// focus 옮겨가는 부분입니다.
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
num3.addEventListener('keyup', function () {
  if (num3.value !== '' || num3.value === null) {
    trial.focus();
  }
});

// 다시시작 
btnReset.addEventListener('click', function(){
  location.replace('');
});

// BGM
const play = () => audio.play();
play();