/*
//....01....inch to feet conversion
    function inchToFeet(inch){
        const feet=inch/12;
        return feet;
    }

    function inchToFeet2(inch){
        const feetFraction=inch/12;
        const feet=parseInt(feetFraction);
        const inchRemaining=inch%12;
        const res=feet + ' ft ' + inchRemaining + ' inch '
        return res;
    }

    const val1=inchToFeet(75)
    const val2=inchToFeet2(75)
    console.log(val1)
    console.log(val2)


//....02....miles to kilometer conversion
    function milesToKilometer(mile){
        const kilo=mile*1.60934;
        return kilo;
    }

    const val=milesToKilometer(12);
    console.log(val)


//....03....Leap Year or not
    function isLeapYear(year){
        if(year%100!==0 && year%4==0){
            return true;
        }
        else if(year % 100 === 0 && year % 400===0){
            return true;
        }
        else{
            return false;
        }
    }

    const year=isLeapYear(2044);
    console.log(year)


//....04....Calculate Average of the odd num
    function oddAverage(numbers){
        let cnt =0;
        let sum=0;
        for(const num of numbers){
            if(num%2==1){
                sum+=num;
                cnt++;
            }
        }
        const res= sum / cnt;
        return res;
    }

    const numbers=[1,2,3,4,5,6,7,8,9];
    const avg=oddAverage(numbers)
    console.log(avg)


//....05....Unique Array
    const arr=['abul','babul','kabul','babul','abul','tabul'];
    const numbers=[1,2,3,4,5,1,2,6,4,7];

    function noDuplicate(array){
        const unique=[];
        for(const item of array){
            if(unique.includes(item)===false){
                unique.push(item);
            }
        }
    return unique;
    }

    const uniqueArray1=noDuplicate(arr)
    console.log(uniqueArray1)

    const uniqueArray2=noDuplicate(numbers)
    console.log(uniqueArray2)


//....06....Min,Max,PI,Absulate,Round,Ceil,Floor,Random
    const min=Math.min(24,33,67,4,556);
    console.log('min value : ' , min);

    const max=Math.max(24,33,67,4,556);
    console.log('max value : ' , max);

    console.log(Math.PI);
    console.log(Math.abs(5-10));
    console.log(Math.PI);

    console.log(Math.round(2.23));
    console.log(Math.round(2.83));
    console.log(Math.ceil(2.33));
    console.log(Math.floor(2.83));

    console.log(Math.random());
    console.log(Math.random()*10);

    const rand=Math.round(Math.random()*10);
    console.log(rand)


//....07....SWAP
    let x=5;
    let y=7;
    console.log(x,y);

    [x,y]=[y,x];
    console.log(x,y);

*/
//....08....Date and Time 
const today=new Date();
console.log(today)

const date=new Date('2062-10-19');
console.log(date.getMonth())
console.log(date.getDay())
