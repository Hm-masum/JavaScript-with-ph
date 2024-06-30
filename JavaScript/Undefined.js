/*
===> 8 way to get undefined
1.variable that is not initialize will give undefined
2.function with no return
3.parameter that is not passed will be undefined
4.if return has nothing on the right side will return undefined
5.property that doesn't exists on an object will give you undefined
6.accessing array elements outside of the index range
7.deleting an element in side an array
8.set a value directly to undefined
*/
let first;

function second(a,b){
    const total=a+b;
}
second(1,2)

function third(a,b,c,d){
    const total=a+b+c+d;
    console.log(a,b,c,d)
}
third(2,5)

function noNegative(a,b){
    if(a<0 || b<0){
        return
    }
    return a+b;
}
const four=noNegative(2,-5)
console.log(four)

const fifth={id:2, name:'masum',age:77}
console.log(fifth.age, fifth.salary)

const sixth=[11,22,33,44]
console.log(sixth[1],sixth[3],sixth[33])

const seventh=[11,22,33,44]
delete seventh[1]
console.log(seventh[1],seventh[3],seventh[33])

const eighth=undefined;
const nine=null