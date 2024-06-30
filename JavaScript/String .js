/*
//....01....Basic String
    const country='Bangladesh'
    const division='Chittagong'
    const district=`B-Baria`
    const thana=new String('Demra')
    console.log(typeof country);
    console.log(typeof thana);

    const capital='Dhaka'
    console.log(capital.length)
    console.log(capital[3])
    console.log(capital)
    capital[0]='F';
    console.log(capital)//------>string is immutable


//....02....To upper & To lower
    const school='RAJ UK Uttara Model School';
    console.log(school);
    console.log(school.toLowerCase());
    console.log(school.toUpperCase());


//....03....Compare string
    const sub='Chemistry';
    const book='chemistry';
    if(sub.toLowerCase()===book.toUpperCase()){
        console.log("Two book are same");
    }
    else
    {
        console.log("Not same");
    }

    const drink=' Water'
    const liquid='Water '

    if(drink.trim()===liquid.trim()){
        console.log("Two Water are same");
    }
    else
    {
        console.log("Not same");
    }


//....04....string slice
    const address="Andorkilla";
    const part=address.slice(2,5)
    console.log(part);


//....05....string split
    const sentence='I am a good student hardworking person'
    console.log(sentence.split(' '));

    console.log(sentence.split('a'));

    const friends='Rahim,Karim,Fahim,sahim';
    console.log(friends.split(','));


//....06....string Join
    const friends=['Rahim','Fahim','Karim','Sahim'];
    console.log(friends.join());
    console.log(friends.join('-'));


//....07....string concat
    const first='Abid'
    const last='Nabid'
    const fullName=first+' '+last;
    console.log(fullName)
    const fullName2=first.concat(' ').concat(last)
    console.log(fullName2)


//....08....includes function
    const last='Nabid'
    console.log(last.includes('x'))


//....09....int to string
    const num=123;
    const res=num + ''
    console.log(typeof res)

*/
//....10....string reverse
const sentence='I am learning web Dev.'
let reverse1='';
let reverse2='';
for(const letter of sentence){
    reverse1=letter+reverse1;
}
console.log(reverse1);

for(let i=0;i<sentence.length;i++){
     const letter=sentence[i];
     reverse2=letter+reverse2
}
console.log(reverse2);

const reverse3=sentence.split('').reverse().join('');
console.log(reverse3)
