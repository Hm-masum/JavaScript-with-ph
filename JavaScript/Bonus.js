/*
//....01....Object overview
    const nayok={
        name: 'Sakib Khan',
        id:121,
        address:'movie',
        isSingle:true,
        friends:['Apu','Bubly','Reaz'],
        movies:[{name:'no. 1',year:2015},{name:'king khan',year:2025}],
        act: function(){
            console.log("acting like sakib khan")
        },
        car:{
            brand:'tesla',
            price:500000,
            made:2025,
            manufacturer:{
                name:'tesla',
                ceo:'elon',
                country:'USA'
            }
        }
    }

    console.log(nayok.act())


//....02....object like array
    const products=[
        {name:'phone', price:1200},
        {name:'Laptop', price:1900}
    ]
    console.log(products[0]);

    const product ={
        '0': 15,
        '1': 115,
        '2': 1115,
    }
    console.log(product[0]);


//....03....Arguments
    function add(num1,num2){
        console.log(num1,num2)    
        console.log(arguments)    
        console.log(arguments[4])    
    }

    add(12,13,14,15,16,17)
    
*/
//....04....Find the matching products by searching products
const products=[
    {id: 1, name:'walton laptop', price:1200},
    {id: 2, name:'iphone phone', price:11200},
    {id: 3, name:'samsung phone', price:5200},
    {id: 3, name:'nokia Phone', price:5200},
    {id: 4, name:'Dell laptop', price:11200},
    {id: 5, name:'hp laptop', price:21200}, 
]


function matchedProduct(products,search){
    const matched=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
const result=matchedProduct(products,'phone')
console.log(result)