/*
//....01....spread 
    const max= Math.max(6,23,45,1,89,23);
    const numbers=[3,4,90,88,6,23,4];
    const arrayMax=Math.max(...numbers);

    console.log(...numbers)
    console.log(arrayMax)

    const friends=[4,5,87,9]
    const bondhu=friends;
    const dosto=[...friends]
    friends.push(12);
    console.log(bondhu)
    console.log(friends)
    console.log(dosto)

    // advanced
    const sokina=[...friends,999]
    console.log(sokina)

*/
//....02....Destructure
const actor={
    name:'Ananta',
    age:30,
    phone:'1010100',
    money:1234
}
// const phone=actor.phone;
// const name=actor.name;
// const age=actor.age;
const {phone,age: boyos} = actor
console.log(phone)
console.log(phone)
console.log(boyos)

const numbers=[45,12]
const[first,second]=numbers;
console.log(first,second)

function dobleThem(a,b){
    return [a*2,b*2]
}
const[prothom,ditiyo]=dobleThem(6,9)
console.log(prothom,ditiyo)


// ADVANCE
const employee={
    ide:'vs code',
    designation:'developer',
    machine:'mac',
    language:['html','css','js'],
    specification:{
        height:66,
        address:'lohagara',
        drink:'water',
        watch:{
            color:'black',
            brand:'garmin'
        }
    }

}

const{machine,ide} =employee
const{height,address}=employee.specification;
const{brand}=employee.specification.watch

