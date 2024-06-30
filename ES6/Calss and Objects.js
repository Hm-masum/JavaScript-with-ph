/*
//.....01.....Class and Objects
    const products=[
        {id: 1, name: 'lenovo', price:6500},
        {id: 2, name: 'dell', price:7500},
        {id: 3, name: 'hp', price:8500},
        {id: 4, name: 'mac', price:9500}
    ]

    class product{
        country='Bangladesh'; 
        constructor(name){
            this.name=name;
        } 
        speak(talk){
            console.log(`Talking abouy ${talk}`)
        }
    }
    const lenovo=new product('le le lenovo')
    console.log(lenovo)


//.....02.....inheritance
    class Vahicle{
        constructor(name,price){
            this.name=name;
            this.price=price;
        }
        move(){
            console.log('gari chole na')
        }
    }
    class Bus extends Vahicle{
        constructor(name,price,seat,ticketPrice){
            super(name,price);
            this.seat=seat;
            this.ticketPrice=ticketPrice;
        }
    }
    class Truck extends Vahicle{
        constructor(name,price,load){
            super(name,price);
            this.load=load;
        }
    }

*/
//.....03.....This
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const kodom=new Person('Kodom ali', 21)
console.log(kodom);
kodom.sleep();



const nums=[1,2,3,4,5]
let output=nums.fill(n =>n%2)
console.log(output)