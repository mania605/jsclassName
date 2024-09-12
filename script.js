/* 
조건문
-비교연산자를 활용한 조건식 이용해서 특정 조건일 때 서로 다른 코드가 실행되도록 동기처리 

if(조건식){
조건식 1이 참이면 이곳의 구문이 실행 되고 종료
거짓이면 이곳의 구문을 무시하고 다음 조건으로 넘어감
}

else if(조건식2){
조건식 2가 참이면 이곳의 구문이 실행 되고 종료
거짓이면 이곳의 구문을 무시하고 다음 조건으로 넘어감
}

else {
위의 모든 조건이 참이 아닐때 이곳의 구문이 실행 되고 종료 
}
*/

/* 시간대별 색갈 다르게 적용
0-9 :lightblue
10-15: orange
16-20: pink
21-24: purple

const hour = new Date().getUTCHours();  // 현재 시간을 가져옴
console.log(hour);

if (hour >= 0 && hour < 10) {
    document.body.style.backgroundColor = "lightblue";
} else if (hour >= 10 && hour < 16) {
    document.body.style.backgroundColor = "orange";
} else if (hour >= 16 && hour < 21) {
    document.body.style.backgroundColor = "pink";
} else {
    document.body.style.backgroundColor = "purple";
}

console.log(document.body.style.backgroundColor);  // 현재 배경색 확인
*/
const hour = new Date().getHours();  // 현재 시간을 가져옴
if (hour >= 0 && hour < 10) document.body.style.backgroundColor = "lightblue";
if (hour >= 10 && hour < 16) document.body.style.backgroundColor = "orange";
if (hour >= 16 && hour < 21) document.body.style.backgroundColor = "pink";
if (hour >= 21 && hour < 24) document.body.style.backgroundColor = "purple";


//삼항연산자 
//위에 없으면 넣고 const hour = new Date().getHours();
document.body.style.backgroundColor = hour < 10 ? "lightblue" :
    hour < 16 ? "orange" :
        hour < 21 ? "pink" : "purple"

