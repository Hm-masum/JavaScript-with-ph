/*
//....01....Template string
    const first='jaan';
    const last='pakhi';
    const great='potas potas';
    const name=first+' '+last+' '+great;
    console.log(name);
    const a=10;
    const b=20;
    const result='The sum of '+ a + ' and ' + b + ' is ' +(a+b);
    console.log(result);
    const math=`The sum of ${a} and ${b} is ${a+b}`;
    console.log(math)

    const email=`john cena
    cena naki ochena
    mair dimo prosor`;
    console.log(email)

    const numbers=[11,22,33,44,55]
    const students={name:'john cena',age:5}
    const res=`The sum of ${numbers[0]} and ${students.age} is ${a+b}`;
    console.log(res)


//....02....Arrow
    // function decleration
    function add1(a,b){
        return a+b;
    }
    // function expression
    const add2=function(a,b){
        return a+b;
    }
    // Arrow function
    const add3=(a,b) => a+b;
    const add4=(num1,num2,num3,num4) => num1+num2+num3+num4;


    const sum1=add1(5,90)
    const sum2=add2(5,90)
    const sum3=add3(5,90)
    const sum4=add4(5,9,5,3)
    console.log(sum1)
    console.log(sum2)
    console.log(sum3)
    console.log(sum4)

*/
//....03....More Arrow
const difference = (x,y) => x-y;
const multiply=(first,second,third) => first*second*third;

// single or one parameter
const getAge= (person) => person.age;
const student={name:'ananta', age:45}
const age=getAge(student);
console.log(age)

const getThird = numbers => numbers[2];
const third=getThird([1,2,3,4,56]);
console.log(third);

const doubleIt = num => num*2;

// no parameter
const getPI = () => Math.PI;
console.log(getPI())

// large arrow function
const doMath = (x,y,z)=>{
    const sum=x+y+z;
    const mult=x*y*z;
    const result=sum +mult;
    return result;
}