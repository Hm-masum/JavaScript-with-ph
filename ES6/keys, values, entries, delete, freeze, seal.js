const glass={
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
};

//console.log(glass)
const keys=Object.keys(glass);
console.log(keys)

const values=Object.values(glass);
console.log(values)

const entries=Object.entries(glass);
console.log(entries)

//*******delete********
//type-1
delete glass.isCleaned;
console.log(glass)

//type-2
const{price, ...shortGlass}=glass;
console.log(shortGlass)

//********Freeze********
Object.freeze(glass)
glass.source='Bangladesh';
glass.price=5000;
delete glass.name;
console.log(glass)

//*******Seal********
Object.seal(glass)
glass.source='Bangladesh';
glass.price=5000;
delete glass.name;
console.log(glass)



const x={f:1};
x.y=2;
console.log(x)