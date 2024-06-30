/*
//....01....Declare of function
    const number=40;

    function fanOffkor(){
        console.log('bosa tekeh uthe dara')
        console.log('Walk towards the switch')
    }

    fanOffkor()


//....02....Function parameters
    function square(number){
        const borgo=number*number
        console.log(borgo)
    }
    square(4)
    square(5)

    function add(num1,num2){
        const sum=num1+num2
        console.log(sum)
    }
    add(5,10)
    add(10,10)
    add(3)
    add(3,1,7)


//....03....Function Arguments
    function difference(num1,num2){
        const diff=num1-num2
        console.log(num1,num2, 'difference is', diff)
    }
    const fatherAge=40;
    const myAge=10;
    difference(fatherAge,myAge)


//....04....Function return
    function TenTimes(number){
        const result= number*10;
        return result;
    }

    const res=TenTimes(5);
    console.log(res)


//....05....Function return-2
    function doMath(num1,num2){
        const sum=num1+num2;
        const diff=num1-num2;
        const multiply=sum*diff;
        const result=multiply/2;
        return result;
    }

    const result=doMath(10,6)
    console.log(result)


//....06....Conditional return
    function isEven(number){
        if(number%2==0){
            return true;
        }
        else{
            return false;
        }
    }
    console.log(isEven(5))
    console.log(isEven(110))


//....07....Difference types of parameter-1
    function evenSizedString(str){
        const len=str.length;
        console.log(str,len)
        if(len%2==0){
            console.log('Even size');
            return true;
        }
        else{
            console.log('Odd size')
            return false;
        }
    }

    console.log(evenSizedString('Dhaka'))
    console.log(evenSizedString('iiuc'))


//....08....Difference types of parameter-2
    function numOfElement(numbers){
        const len=numbers.length;
        return len;
    }
    console.log(numOfElement([1,2,3,4,5,6,1]));


//....09....array operation
    function sumOfNumbers(numbers){
        let sum=0;
        for(const num of numbers){
            sum+=num;
        }
        return sum
    }
    const nums=[11,22,33,44]
    const sum=sumOfNumbers(nums);
    console.log(sum)

*/
//....10....even numbers only
function evenNumbers(numbers){
    const evens=[]
    for(const num of numbers){
        if(num%2==0){
            evens.push(num)
        }
    }
    return evens
    
}
const nums=[11,22,33,44]
const even=evenNumbers(nums);
console.log(even)