/*
//....01....make cube of a provided number
    function cubeNumber(number){
        if(typeof number !== 'number'){
            return 'error'
        }
        const result=Math.pow(number,3)
        return result
    }

    const ans=cubeNumber(5);
    console.log(ans)


//....02....Find the string from another string
    function matchFinder(string1,string2){
        if(typeof string1 !== 'string' || typeof string2 !== 'string'){
            return "please enter the string"
        }

        const result=string1.includes(string2);
        return result;
    }

    console.log(matchFinder('john dou','Dou'))
    console.log(matchFinder('Thefox','The'))
    console.log(matchFinder('Thefox',11))


//....03....sort the number
    function sortMaker(arr){
        const[num1,num2]=arr;
        if(num1<0 || num2<0){
            return 'invalid input';
        }
        else if(num1===num2){
            return 'equal';
        }
        else{
            if(num1>num2){
                return [num1,num2];
            }
            else{
                return [num2,num1];
            }
        }
    }
    console.log(sortMaker([3,4]));
    console.log(sortMaker([4,1]));
    console.log(sortMaker([4,4]));
    console.log(sortMaker([3,-1]));


//....04....Find address form object
    function findAddress(obj){
        const street=obj.street || "__";
        const house=obj.house || "__";
        const society=obj.society || "__";

        const str=street+','+house+','+society;
        return str;
    }

    console.log(findAddress({street:10,house:'15A',society:'earth ctg'}))
    console.log(findAddress({house:'15A',society:'earth ctg'}))
    console.log(findAddress({house:'15A'}))


//....05....check the sum of array is equal or greater then number
    function canPay(arr,number){
        if(arr.length==0){
            return "your array is empty";
        }

        let sum =0;
        for(const num of arr){
            sum+=num;
        }
        if(sum>=number){
            return true;
        }
        else{
            return false;
        }
    }

    console.log(canPay([1,2,3],6));
    console.log(canPay([1,2,1,1],8));
    console.log(canPay([],8));


//....06....Help The Zoo Manager(assignment-01)
    function calculateMoney(ticketSale) {
        if(ticketSale<0){
            return "“Invalid Number”"
        }
        const ans=ticketSale*120-(500+(8*50));
        return ans;
    }    

    console.log(calculateMoney(-130));


//....07.... Good Name , Bad Name(assignment-02)
    function checkName(name) {

        if(typeof name !=='string'){
            return "invalid";
        }

        const val=name.length-1;
        name=name.toLowerCase();

        const str="aeiouwy"
        if(str.includes(name[val])){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }

    console.log(checkName('RAFEE'))
    console.log(checkName('Jhankar'))
    console.log(checkName(199))
    console.log(checkName(['Rashed']))


//....08....Virus in my Array(assignment-03)
    function deleteInvalids(array) {

        if(Array.isArray(array)==false){
            return '“Invalid Array”'
        }
        const ans=[];
        for(const val of array){
            if(typeof val=== 'number' && !isNaN(val) ){
                ans.push(val);
            }
        }
        return ans;
    }

    console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ))
    console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))
    console.log(deleteInvalids(["1" , {num:2} , NaN ] ))


//....09....Make A Great Password(assignment-04)
    function password(obj) {
        const name= obj.name || false;
        const birthYear= obj.birthYear || false;
        let siteName= obj.siteName || false;

        if(name===false || birthYear===false || siteName===false){
            return "invalid"
        }
        if(birthYear<1000){
            return "invalid"
        }

        let validName='';
        for(let i=0;i<siteName.length;i++){
            if(i==0){
                let temp=siteName[0];
                temp=temp.toUpperCase();
                validName+=temp;
            }
            else{
                validName+=siteName[i];
            }
        }

        const str= validName+"#"+birthYear+"@"+name;
        return str;
    }

    console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' } ))
    console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'Facebook' }))
    console.log(password({ name: 'toky' , birthYear: 999, siteName: 'Facebook' } ))
    console.log(password({ name: 'maisha' , birthYear: 2002 }))

*/
//....10....Monthly Savings of a Freelance
function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr)==false || typeof livingCost!=='number'){
        return "invalid input"
    }

    let sum=0;

    for(const value of arr){
        if(value>=3000){
            const discount=value*20/100;
            const res=value-discount;
            sum+=res;
        }
        else{
            sum+=value;
        }
    }
    
    if(sum<livingCost){
        return "“earn more”"
    }
    else{
        return sum-livingCost;
    }
}

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))