/*
// ....01....Access in Array
    const friends=['Elon','Bill','Mark','Waren'];
    for(const friend of friends){
        //console.log(friend)
    }

    for(let i=0;i<friends.length;i++){
        //console.log(friends[i])
    }

    let i=0;
    while(i<friends.length){
        console.log(friends[i])
        i++;
    }


// ....02....Reverse in Array
    const numbers=[1,2,3,4,5,6,7]
    numbers.reverse();
    console.log(numbers);

    const nums=[1,2,3,4,5,6,7]
    const rev_nums=[];
    for(const num of nums){
        rev_nums.unshift(num)
    }
    console.log(rev_nums)

*/
// ....03....Sort an Array
const persons=['rakib','nokib','sakib','akib','dakib']
const sortedPersons=persons.sort();
console.log(sortedPersons)

const numbers=[4,7,2,9,3,12,38,1]
//const sortedNumbers=numbers.sort();----->not working properly
const asc_sortedNumbers=[...numbers].sort(function(a,b){return a-b });
const dsc_sortedNumbers=[...numbers].sort(function(a,b){return b-a });
console.log(asc_sortedNumbers)
console.log(dsc_sortedNumbers)
