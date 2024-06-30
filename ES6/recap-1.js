// .....01.....Temp. string
const a=22;
const numbers=[11,22,33];
const person={
    name: 'sakib khan'
}
const message=`Hi, ${person.name} has a: ${a} access tp ${numbers[2]}`
console.log(message)


// .....02.....Arrow Function
const square = x => x*x;
const sum = (a,b) => a+b;


// .....03.....Destructor
const {age,z,...others}={x:2, y:5, z:3, name:'kotob', age:55}
console.log(others)
