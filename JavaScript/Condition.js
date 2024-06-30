/*
//....01....Compare
    console.log(5 > 10)
    console.log(5 < 10)
    console.log(5 == 10)
    console.log(10 == 10)
    console.log(15 >= 10)
    console.log(5 >= 10)
    console.log(5 <= 10)
    console.log(10 <= 10)
    console.log(100 <= 10)
    console.log(10 == 10.1)


//....02....Compare with type
    console.log(10 == '10')
    console.log(10 === '10')
    console.log(10 != '10')
    console.log(10 !== '10')


//....03....condition
    var a = 10;
    var b = 20;
    if (a > b) {
        console.log("a is big number")
    } else if (b > a) {
        console.log("b is big number")
    } else {
        console.log("Two number are equal")
    }


//....04....Multiple condition
    const salary = 25001;
    const isBcs = true;
    const height = 68;

    if ((salary > 25000 || height > 72) && isBcs == true) {
        console.log('eso baba kobul')
    } else {
        console.log('Vag tui mokbul')
    }


//....04....Multi level condition
    var price = 4000;
    if (price >= 5000) {
        //---->10% discount
        const discount = price * 10 / 100;
        const payAmount = price - discount;
        console.log(payAmount);
    } else if (price > 2500) {
        //---->5% discount
        const discount = price * 5 / 100;
        const payAmount = price - discount;
        console.log(payAmount);
    } else {
        console.log(price);
    }


//....05....Nested condition
    const money = 1000;
    if (money > 300) {
        console.log('bro you are rich')
    } else {
        if (money > 100) {
            console.log('Toi gorib o na boro lok o na');
        } else {
            if (money > 0) {
                console.log('dosto kola kha,calcium bara');
            } else {
                console.log('Toi gorib');
            }
        }
    }


//....06....Ternary condition 1
    const age = 9;
    age >= 18 ? console.log('vote dio') : console.log('gomai thak')


//....07....Ternary condition 2
    let price = 500;
    const isLeader = false;
    price = isLeader === true ? 0 : price + 100;
    console.log(price);


//....08....Nested Ternary condition
    let price = 1200;
    const isLeader = true;

    // if (isLeader === true) {
    //     if (price > 1000) {
    //         price = price / 2;
    //     } else {
    //         price = 0
    //     }
    // } else {
    //     price = price + 100;
    // }

    price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100;
    console.log(price);


//....09....Bool
    const isPassed = true;
    if (!isPassed) {
        console.log('Toke biya dia dibo')
    } else {
        console.log('Tomi amader noyon er moni')
    }

*/
//....10....BMI
const w = 60;
const h = 1.5;
const BMI = w / (h * h);
console.log(BMI);
if (BMI < 18.5) {
    console.log('underweght')
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log('normal')
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log('overweight')
} else {
    console.log('obese')
}