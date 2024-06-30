/*
//....01....Variable
   var weight = 10;
   var price = 10;

   // var age;
   // console.log(age);
   console.log(price);


//....02....Variable of types
   var name = "sadar uddin";
   var country = 'Bangladesh';

   var isRich = true;
   console.log(isRich);
   var passed = false;
   console.log(passed);
   console.log(typeof passed); //----->typeof
   console.log(typeof name);


//....03....Simple math
   var orangePrice = 20;
   var chocolate = 0.5;
   var applePrice = '20';

   console.log(typeof orangePrice);
   console.log(typeof applePrice);

   console.log(orangePrice + applePrice);


//....04....String to int & float
   var applePrice = parseInt('20');
   var orangePrice = parseFloat('20.6');
   console.log(orangePrice + applePrice);


//....05....Floting problem
   var a = 0.1;
   var b = 0.2;
   var total = a + b;
   console.log(total.toFixed(2)); //----->toFixed


//....06....operation
   var orangePrice = 20;
   var applePrice = 10;
   console.log(orangePrice + applePrice);
   console.log(orangePrice - applePrice);
   console.log(orangePrice * applePrice);
   console.log(orangePrice / applePrice);

   var a = 10;
   var b = 3
   console.log(a % b);

   var money = 550;
   var price = 35;
   price = price + 10;
   console.log(price);
   var newPrice = price + 50;
   var discountPrice = newPrice - 10;
   console.log(discountPrice);

   
//....07....Avarege
   var a = 75.25;
   var b = 65;
   var c = 80;
   var d = 35.45;
   var e = 99.50;

   var avg = (a + b + c + d + e) / 5;
   console.log(avg.toFixed(2));

*/
//....08....isNaN function
const num1 = isNaN('11')
console.log(num1);

const num2 = isNaN(2 - 10)
console.log(num2);