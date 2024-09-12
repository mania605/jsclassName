/*
배열전용 내장 함수인 forEach vs map 차이점
-forEach 
    순수배열, 유사배열 모두 반복 가능
    원본 배열 복사기능 없음, 반복기능만 있음

-map
    순수배열만 반복가능(유사배열 반복불가:DOM반복처리 불가)
    원본 배열 복사기능(deep copy) 불변성유지 가능(Immutable)
    (Immutable)란 참조형 자료를 변경할 때 원본데이터를 훼손시키지 않으면서 복사본 생성
    리액트에서는 데이터 변경처리 할 때 무조건 원본과 복사본이 같이 있어야 함
    원본이 있어야지 원본대비 변경할 내용을 인지가능하기 때문

forEach는 직업 DOM제어해야 되는 작업환경에서 주로 쓰임
map은 실제 DOM이 아닌 가상DOM이라는 순수배열을 다뤄야 하는 리액트에서 주로 쓰임

*/
/*
const lis = document.querySelectorAll("ul,li");
console.log(lis); //Node List (Static DOM 해당 요소를 선텍한 시점으로 값이 고정)
//const lis = document.getElementsByTagName('li')
//HTMLCollection LiveDOM: 이미 변수에 담았다고 하더라도 이후에 특정 조작이 일어나면 실시간으로 해당 값이 갱신됨

//유사배열(Nodelist, HTMLCollection도 반복처리가능)
lis.forEach((data) => console.log(data));

//순수 배열 q반복처리 가능(DOM반복 불가능)
const abc = lis.map((data) => data);
console.log(abc);
*/

const odd = [1, 3, 5];
const newArr = odd;

//map은 원본 배열을 완전복사(Deep copy)새로운 배열 반환
//원본은 유지된 상태에서 복사본 수정할 수 있는 immuable상태 유지 가능
const newArr1 = odd.map((data) => data);
newArr1[0] = 0;
console.log(newArr1);
console.log(odd);



//수업중 실습 원본 배열 생성
const even = [2, 4, 6];

//원본 배열을 새로운 변수인 newEven1에 담아서 복사
const newEven1 = even;

//복사된 newEven1 배열의 첫번째 값 수정
newEven1[0] = 0;

//복사된 배열의 첫번째값이 변경됨
console.log(newEven1); // [0, 4, 6]


//수정하지 않은 원본 배열 확인
//수정하지 않았어도 원본도 같이 수정됨(데이터 훼손)
console.log(even);    // [0, 4, 6]  


//위와 똑같은 방법으로 이번엔 원시형 자료 복사
//원시형 자료는 변수값을 복사하는 식으로 완전복사(Deep copy)가능 불변성 유지됨
let num = 0;
let newNum = num;
newNum++;
console.log(newNum);
console.log(num);


