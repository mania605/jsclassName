/*
ECTMA6 전개연산자(Spread Operator)
쉘로우 카피 방지를 위해 아예 [메모리 힙상의 값]을 꺼내와서 펼친 뒤 [새로운 값]으로 복사
새로운 배열, 객체로 다시 묶어주는 형태
-> 완전복사(Deep Copy)

*/


const originArr = [1, 2, 3];
console.log(...originArr);
//해당 값을 꺼내서 복사한다. 배열도 아니고 객체도 아님. 그냥 펼쳐진 상태.
//Heap메모리상에 있는 값 자체를 꺼내서 펼친 뒤 복사한 형태
//그렇게 복사된 형태의 데이터를 다시 새롭게 배열로 그룹화
//힙메모리상에 새로운 값이 복사되고, 새로운 참조값이 생기므로 복사된 배열의 저용 참조값이 newArr에 할당됨
const newArr = [...originArr];
console.log(newArr);
console.log(originArr);


//newArr에는 물리적으로 새로운 메모리 힙상의 데이터를 참조하고 있기 때문에
//해당 참조값이 가리키는 메모리힙상의 값을 고쳐도 원본훼손안됨(불변성 유지됨)
newArr[0] = 0;
console.log(newArr);
console.log(originArr);


//작년 수강생 정보
const first_year = {
    name: 'Michael',
    age: 20,
    isFemale: false,
};

console.log(first_year);

const second_year = { ...first_year };
second_year.age = 21;
console.log(second_year);
console.log(first_year);

