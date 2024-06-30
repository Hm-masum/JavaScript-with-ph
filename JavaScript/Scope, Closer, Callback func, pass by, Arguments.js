/*
//.....01.....Scope
    function add(a,b){
        const total=a+b;
        if(b>5){
            const sum=25+a+b;
        }
        else{
            const sum=5+a+b;
            var current=sum
        }
        console.log(current)
    }
    add(5,3)


//.....02.....closer
    function kitchen(){
        let roast=0;
        return function(){
            roast++;
            return roast;
        }
    }
    const firstServer=kitchen();
    console.log(firstServer());
    console.log(firstServer());
    console.log(firstServer());


//.....03.....call back function
    function greeting(greetingHandler,name){
        greetingHandler(name)
    }
    function  greetingHandler(name){
        console.log('good morning', name)
    }

    function  greetingEvening(name){
        console.log('good Evening', name)
    }
    
    greeting(greetingHandler,'masum')
    greeting(greetingHandler,'hasan')
    greeting(greetingEvening,'rokib')


//.....04.....Arguments
    function sum(a,b,c,d){
        console.log(arguments)
        const args=[...arguments]
        console.log(args)
        const result=a+b+c+d
    }
    const total=sum(11,22,33,44)

*/
//.....05.....pass by 
//primitive type(pass by value)
let num1=5;
let num2=3
function multiply(a,b){
    a=20;
    result=a*b;
    return result
}
multiply(num1,num2)
console.log(num1)

//Non primitive type(pass by reference)
let student1={name:'jalil',partner:'bosha'}
let student2={name:'raj',partner:'porimoni'}

function makeMovie(cople1,cople2){
    cople1.name='onontho';
    cople2.partner='mim';
}
console.log(student1)
console.log(student2)
makeMovie(student1,student2)
console.log(student1)
console.log(student2)
