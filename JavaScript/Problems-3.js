/*
//....01....Max Number
    const height=[11,2,3,55,2,3,7]
    function getMax(numbers){
        let max=numbers[0];
        for(const num of numbers){
            if(num>max){
                max=num;
            }
        }
        return max;
    }
    const max=getMax(height)
    console.log(max);


//....02.... To calculate wood needed
    function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
        const perChairWood=3;
        const perTableWood=10;
        const perBedWood=50;

        const chairTotalWood=chairQuantity*perChairWood;
        const tableTotalWood=tableQuantity*perTableWood;
        const bedTotalWood=bedQuantity*perBedWood;

        const totalWood=chairTotalWood+tableTotalWood+bedTotalWood;
        return totalWood;

    }

    const wood=woodQuantity(3,3,3)
    console.log('wood needed', wood)


//....03....Cheapest phone
    const phones=[
        {name:'samsung',price:20000,camera:'12mp',color:'black'},
        {name:'xoami',price:30000,camera:'12mp',color:'black'},
        {name:'Oppo',price:10000,camera:'12mp',color:'black'},
        {name:'Walton',price:24000,camera:'12mp',color:'black'},
        {name:'iphone',price:60000,camera:'12mp',color:'black'}
    ]

    function getCheapestPhone(phones){
        let min=phones[0];
        for(const phone of phones){
            if(phone.price<min.price){
                min=phone;
            }
        }
        return min;
    }
    const cheap=getCheapestPhone(phones)
    console.log('Cheapest phone', cheap)


//....04....total cost
    const products=[
        {name:'shart',price:200,quantity:2},
        {name:'genji',price:100,quantity:2},
        {name:'pantt',price:300,quantity:2}
    
    ]

    function getShoppingTotal(products){
        let total=0;
        for(const product of products){
                const thisItemCost=product.price*product.quantity
                total+=thisItemCost;
        }
        return total;
    }    
    const total=getShoppingTotal(products)
    console.log('Total Price', total)


//....05....Multi layer Discount Price
    function discountPrice(quantity){
        const first100price=100;
        const second100price=90;
        const above200rice=70;

        if(quantity<=100){
            const total=quantity*first100price;
        }
        else if(quantity<=200){
            const first100total=100*first100price;
            const remainingQuantity=quantity-100;
            const remainingTotal=remainingQuantity*second100price;
            const total=first100total+remainingTotal;
            return total;
       }
       else{
            const first100total=100*first100price;
            const second100total=100*second100price;
            const remainingQuantity=quantity-200;
            const remainingTotal=remainingQuantity*above200rice;
            const total=first100total+second100total+remainingTotal;
            return total;
       }
    }

    const val=discountPrice(200);
    console.log(val)


//....06....Handle unexpected function input-01
    function multiply(num1,num2){
        if(typeof num1!=='number' || typeof num2!=='number'){
            return 'please provide number'
        }
        const mult=num1*num2;
        return mult;
    }

    const result=multiply('5','seven')
    console.log(result);


//....07....Handle unexpected function input-02
    function fullName(first,second){
        if(typeof first != 'string'){
            return 'first name should be string'
        }
        else if(typeof second != 'string'){
            return 'second name should be string'
        }
        const full=first+' '+second;
        return full;
    }
    const res=fullName('quddos', 6)
    console.log(res);

*/
//....08....Handle unexpected function input-03
function getSecond(Numbers){
    if(Array.isArray(Numbers)==false){
        return 'please provide an array'
    }
    const second=Numbers[1];
    return second;
}
const second=getSecond([1,2,3])
console.log(second);

const val=getSecond(5)
console.log(val);

