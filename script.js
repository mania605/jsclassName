/*
참조형 자료를 변수에 옮겨담으면 왜 에러가 나는지

*/
//기존 원본 배열 콜스택 상에서 originArr 라는 변수
const originArr = [1, 2, 3];

//기존 원본 배열을 새로운 newArr1에 옮겨담아서 복사
//callstack상에서 originArr라는 변수에 있던 참조링크값을 보가새허 newArr1에 할당
//Heap메모리상의 원본데이터는 그대로 있고, 해당 값을 가리키는 참조링크만 복사되어 각각newArr1, originArr에 있음
//shallow copy(얕은 복사) : 원본데이터는 그대로고 참조 링크가 복사된 형태
const newArr1 = originArr; //  [1, 2, 3]

console.log(newArr1); // [1, 2, 3]
console.log(originArr); // [1, 2, 3]  


//매우매우 중요//
//새로운 참조링크가 복사된 newArr1을 불러와서 값을 변경하면 
//결국 가리키고 있는 heap상의 값은 동일하기 때문에 
//원본의 훼손이 일어남(불변성 유지 안됨)
newArr1[0] = 0;  //이제 원본도 바뀜 첫번째 숫자는 0

console.log(newArr1); // [0, 2, 3]
console.log(originArr); // [0, 2, 3] (같은 배열을 참조하므로 함께 변경됨)



/* 
*/
