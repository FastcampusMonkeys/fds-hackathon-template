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
  randomNumber = this.randomNumCreate()

    userNumber = document.getElementsByName("userNumber");
    userNumber1 = document.querySelector(".userNumber1").value; 
    userNumber2 = document.querySelector(".userNumber2").value;
    userNumber3 = document.querySelector(".userNumber3").value;
  
 

  // userNumber = [userNumber1, userNumber2, userNumber3]; // random number와 비교하기 위해 배열로 지정

  Checker() {
    // 비교시작
    let s = 0,
      b = 0; // 이중포문을 통해 인수값과 결과같이 같으면 strike, 결과값만 같으면 ball 둘다 같지 않으면 아웃으로 처리.
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (this.randomNumber[i] == this.userNumber[j].value && i == j) {
          s++;
        } else if (this.randomNumber[i] == this.userNumber[j].value && i != j) {
          b++;
        } else {
        }
      }
    }
    return `${s}` + " strike " + `${b}`+ " ball";
  }
}
const game = new baseBallGame();
console.log(game.randomNumCreate())
console.log(game.Checker())

// 변경사항
const select = document.querySelector(".input-box__try"); // DOM 설정  시작!! 박스로 userNumber값 넘기기

select.addEventListener("click", (num1,num2,num3) => {
  
  
  
  
  
  
  
  num1 = document.querySelector('.userNumber1').value;
  num2 = document.querySelector('.userNumber2').value;
  num3 = document.querySelector('.userNumber3').value;
 document.querySelector('.turn-list').textContent = num1+num2+num3;
 num1 = '';
 num2 = '';
 num3 = '';
 
});



// 세자리수가 랜덤으로 0~9 까지나오고

// 같은 번호가 아닌

// 정답 3자리수를 컴퓨터가 저장

// —————————————————————

// 시도하는 숫자랑 비교해서 맞는 것을 판단

// 숫자가 위치는 맞지않고 존재하면 ball 개념

// 숫자가 위치까지 맞으면 strikt

// 아무것도 안맞을시  out

// 다맞으면 게임끝
