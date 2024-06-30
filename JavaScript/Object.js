/*
//....01....Declare Object
    const bottle={
        brand:'apple',
        price:45,
        color:'white',
        isClean: false
    }
    //non-primitive
    const subject={
        name: 'biology',
        teacher: 'rased sir',
        examDate:'30 feb',
        chapters:['first','second','third'],
        exams:{
            name:'final exam',
            marks:'100'
        }
    }


//....02....Output of Object
    const bottle={
        brand:'apple',
        price:45,
        color:'white',
        isClean: false,
        'com pany':['RFL','Pran','Sky']
    }
    console.log(bottle);
    console.log(bottle.price)
    const val =bottle.price;
    console.log(val);
    console.log(bottle['color'])
    console.log(bottle['com pany'])


//....03....Value set
    const person={
        name: 'sodor uddun',
        age: 25,
        profession:'developer',
        salary: 25000,
        married: true,
        'fav places':['Bandorban','saintmartin','kuakata']
    }

    console.log(person)
    person.salary=30000;
    person['fav places']=['maldives','bali','patya']
    console.log(person)

    const keyName='profession';
    console.log(person[keyName])

    const propName='profession';
    person[propName]='devops';
    console.log(person)


//....04....object Keys
    const computer={
        brand:'lenovo',
        price:35000,
        processor:'intel',
        hdd:'512gb',
        monitor:'hp'
    }

    const keys=Object.keys(computer);
    console.log(keys)


//....05....object values
    const computer={
        brand:'lenovo',
        price:35000,
        processor:'intel',
        hdd:'512gb',
        monitor:'hp'
    }

    const values=Object.values(computer);
    console.log(values)


//....06....Nested Object
    const college={
        name:'VNC',
        class:['11','12'],
        events:['science fair','bijoy dibos','21 feb'],
        unique:{
            color:'blue',
            result:{
                gpa:5,
                merit:'top'
            }
        }
    }
    console.log(college.unique.color)
    console.log(college.unique.result.gpa)
    college.unique.result.merit='top top top most'
    console.log(college.unique.result.merit)
    console.log(college.events[1])
    college.events[1]='16 December'
    console.log(college.events[1])
    delete college.class
    console.log(college)


//....07....Loop an object
    const mobile={
        brand:'lenovo',
        price:35000,
        color:'black',
        camera:'12mp',
        isNew:true
    }

    for(const prop in mobile){
        console.log(prop)
        console.log(mobile[prop])
    }

    const keys=Object.keys(mobile);
    console.log(keys)

    for(const key of keys){
        console.log(key,'=',mobile[key])
    }

*/
//....08....Declare an Object
const pen ={brand:'econo',price:10,color:'black'}

const pencil=new Object();
console.log(pencil);

const rubber=Object.create({})
console.log(rubber);