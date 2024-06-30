/*
// ....01....Declare Array
    const numbers = [12, 22, 54, 65]
    const friends = ['abul', 'babul', 'kabul', 'tabul']
    const passed = [true, false, true, false]
    const mixedArray = [12, 'abul', true, 45.66]


// ....02....Length of Array
    const numbers = [12, 22, 54, 65, 34]
    console.log(numbers.length);


// ....03....index of Array
    let numbers = [12, 22, 54, 65, 34];
    console.log(numbers[2]);
    console.log(numbers[1]);
    console.log(numbers[0]);

    numbers[1] = 999;
    console.log(numbers[1]);


// ....04....push_pop-1
    const numbers = [12, 22, 54, 65, 34]
    console.log(numbers);
    numbers.push(12)
    console.log(numbers);
    numbers.push(65, 11, 9)
    console.log(numbers);

    numbers.pop();
    console.log(numbers);
    numbers.pop();
    console.log(numbers);


// ....05....push_pop-2
    const friends = ['abul', 'babul', 'kabul', 'tabul']

    friends.push('sabul');
    console.log(friends);

    const out = friends.pop();
    console.log(friends);
    console.log(out);


// ....06....shift-unshift() function
    const friends = ['abul', 'babul', 'kabul', 'tabul']
    friends.shift();
    console.log(friends);

    friends.unshift('mabul');
    console.log(friends);


// ....07....includes() function
    const friends = ['abul', 'babul', 'kabul', 'tabul']
    console.log(friends.includes('gelam'));
    console.log(friends.includes('tabul'));

    if (friends.includes('abul')) {
        console.log("party");
    } else {
        console.log("No party");
    }


// ....07....indexOf() function
    const friends = ['abul', 'babul', 'kabul', 'tabul']

    console.log(friends.indexOf('tabul'))
    console.log(friends.indexOf('tomato'))


// ....08....Array.isArray() function
    const friends = ['abul', 'babul', 'kabul', 'tabul']
    const nums = []
    const food = 'alo borta'
    console.log(Array.isArray(friends))
    console.log(Array.isArray(nums))
    console.log(Array.isArray(food))

*/
// ....09....concat() function
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(arr1.concat(arr2));

