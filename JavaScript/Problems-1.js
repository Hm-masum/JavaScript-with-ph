
/*
//....01....Multiplication table
    let n=5;
    for(let i=1;i<=10;i++){
        console.log(n,' * ', i, ' = ', n*i);
    }


//....02....Reverse array
    const fruits=['apple','mango','orange','banana','coconut']
    for(let i=fruits.length-1;i>=0;i--){
        console.log(fruits[i]);
    }


//....03....Swap array element
    const nums=[11,22,33,44,55]

    let temp=nums[3];
    nums[3]=nums[1];
    nums[1]=temp;

    console.log(nums)


//....04....Find array element
    const fruits=['apple','mango','orange','banana','coconut']

    const target='banana';
    let flag=0;
    for(let i=0;i<fruits.length;i++){
        if(fruits[i] == target){
            flag++;
           }
    }
    if(flag==0){
        console.log('Not Found');
    }
    else{
        console.log('Found');
    }


//....05....Max or Min number
    const nums=[31,22,24,44,55]

    let maxNum=nums[0];
    let minNum=nums[0];

    for(let i=0;i<nums.length;i++){
        if(maxNum<nums[i]){
            maxNum=nums[i];
        }
        if(minNum>nums[i]){
            minNum=nums[i];
        }
    }
    console.log(minNum, maxNum);


//....06....Filter function
    const nums=[100,200,300,500,150,125];
    const filterNums=nums.filter(function(currentNums) {
        return currentNums<=200;
    });
    console.log(filterNums);


//....07....Calculating Discount
    const price=[100,200,300,500,150,125,1000];
    const discountPrice=[];
    for(let i=0;i<price.length;i++){
        const currentPrice=price[i];
        if(currentPrice>200){
            const calculateDiscount= currentPrice-currentPrice*10/100;
            discountPrice.push(calculateDiscount);
        }
        else{
            discountPrice.push(currentPrice);
        }
    }
    console.log(discountPrice)


//....08....Calculating Discount using map
    const price=[100,200,300,500,150,125];
    const discountPriceMap=price.map(function(currentPrice){
        if(currentPrice>200){
            const calculateDiscount=currentPrice-currentPrice*10/100;
            return calculateDiscount;
        }
        else{
            return currentPrice;
        }
    })
    console.log(discountPriceMap)


//....09....Frequency Array
    const frequencyArray=[0,0,0,0,0,0,0,0,0,0];
    const sampleNum='98765543231234567899';

    for(var i=0;i<sampleNum.length;i++){
        const currDigit=sampleNum[i];

        frequencyArray[currDigit]=frequencyArray[currDigit]+1;

    }
    console.log(frequencyArray);

*/
//....10....Serial Change
const serial=[11,22,33,44,55,66,77];
const target=55;

while(true){
const firstElement=serial[0];
if(firstElement==target){
    break;
}
const extractedElement=serial.shift();
serial.push(extractedElement);
}
console.log(serial);


