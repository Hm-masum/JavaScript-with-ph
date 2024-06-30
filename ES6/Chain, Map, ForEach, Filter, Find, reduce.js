/*
//.....01.....Data access(data chain)
    const data=[{ id:1, name:'abul', address:'kochu khet' }]
    console.log(data[0].address)

    const products={
        count:5000,
        data:[
            { id:1, name:'ienovo laptop', price:7777},
            { id:2, name:'macbook', price:17777},
        ]
    }
    console.log(products.data[1].price)

    const user={
       id:5001,
       name:'shoriful raj',
       address:{
            street:{
                first: 'uttor side',
                second: 'dokkin side',
                third: 'purbo side'
            },
            city:'ctg'
        }
    }
    console.log(user.address.street.second)

    //optional chain
    const user2={
        id:5002,
        name:'shoriful raj',
        address:{
            city:'ctg',
           country:'Bangladesh'
       }
    }
    console.log(user.address.street?.second)
    console.log(user2.address.street?.second)


//.....02.....Maping
    const numbers=[4,5,2,6,7];

    function dobleIt(num){
        return num*2;
    }
    const result = numbers.map(dobleIt);
    console.log(result)

    const doble2 = n => n*2;
    const output= numbers.map(doble2);
    console.log(output)
    
    const output2=numbers.map(n => n*2)
    console.log(output2)

    const friends=['tom','john','michel','oliver'];
    const firstLetter=friends.map(friend => friend[0])
    console.log(firstLetter)


//.....03.....ForEach
    const numbers=[4,5,2,6,7];
    const result=numbers.forEach(n => console.log(n))


//.....04.....Filter
    const numbers=[4,5,2,6,7];
    const players=[75,65,67,72,59];
    const selected=players.filter(p => p>70);
    console.log(selected)

    const friends=['tom','john','michel','oliver'];
    const oddFriends=friends.filter(friend => friend.length>4)
    console.log(oddFriends)


//.....05.....Find
    const players=[75,65,67,72,59];
    const selected=players.find(player => player>70)
    console.log(selected)


//.....06.....Reduce
    const numbers=[4,5,2,6,7];
    const total=numbers.reduce((previous, current) => previous + current,0)
    console.log(total)

*/
//.....07.....Recup
const products=[
    {id: 1, name: 'lenovo', price:6500},
    {id: 2, name: 'dell', price:7500},
    {id: 3, name: 'hp', price:8500},
    {id: 4, name: 'mac', price:9500}
]

// map
const res1=products.map(product => product.name)
console.log(res1)

//forEach
const res2=products.forEach(p => console.log(p.id))
console.log(res2)

// filter
const res3=products.filter(product => product.price>7000)
console.log(res3)

const specificName=products.filter(p=>p.name.includes('h'))
console.log(specificName)

// find
const res4=products.find(p => p.price<7000)
console.log(res4)

// reduce
const res5=products.reduce((acum,current) => acum + current.price,0)
console.log(res5)