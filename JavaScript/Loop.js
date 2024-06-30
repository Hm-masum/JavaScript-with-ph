/*
//....01....For Loop
    const numbers = [12, 98, 45, 63, 23]

    for (const num of numbers) {
        console.log(num);
    }


//....02....While Loop
    let num = 0;
    while (num < 5) {
        console.log('Looping', num);
        num += 1;
    }


//....03....1 to 10 number print
    let num = 1;
    while (num <= 10) {
        console.log(num);
        num += 1;
    }


//....04....sum of number
    let num = 1;
    let sum = 0;
    while (num <= 10) {
        sum += num;
        num++;
    }
    console.log(sum);


//....05....Even number
    let num = 1;
    while (num <= 10) {
        if (num % 2 == 0) {
            console.log('Even ', num);
        }
        num += 1;
    }


//....06....decremental for loop
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }


//....07....The number of divisible by 5
    for (let i = 1; i <= 30; i++) {
        if(i%5==0){
            console.log(i)
        }
    }


//....08....break function
    for (let i = 1; i <= 30; i++) {
        if(i%5==0){
            console.log(i)
        }
        if (i>=20){
            break;
        }
    }


//....09....continue function
    for (let i = 1; i <= 10; i++) {
        if(i%2==1){
            continue;
        }
        console.log(i);
    }

*/
//....10....Do while Loop
    let n=0;
    do{
        console.log(n);
        n++;
    }
    while(n<5)