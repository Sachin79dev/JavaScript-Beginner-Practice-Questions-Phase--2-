// 40 Que series about array


// 1. Create an array of 5 favorite movies and print all values.


let movies = ["Fight Club", "Resident Evil", "Avengers", "Venom", "3 idiot"];


for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}



// 2. Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

let misle = [1, 2, "hello", true, false, [1, 2, 3, 4]]

for (let j = 0; j < misle[5].length; j++) {
    console.log(misle[5][j]);
}




// 3. Print the first and last element of an array.

let firstLast = ["hello", "good", "bad", "guys!"]


console.log(firstLast[0]);
console.log(firstLast[firstLast.length - 1]);


// 4. Swap the second and second-last element using indexing.

let norm = [1, 2, 3, 5, 7, 0]

let a = norm[1]
let b = (norm[1] = norm[norm.length - 2]) 
norm[norm.length - 2] = a;


console.log(norm);



// 5. Create a 2D array and print all first elements of inner arrays.

let twoD = [
    [10, 20, 30, 40],
    [11, 22, 33, 44],
    [2, 4, 5, 6, 7, 8]
]


console.log(twoD[0][0]);
console.log(twoD[1][0]);
console.log(twoD[2][0]);



// 6. Find the sum of all diagonal elements in a 3x3 matrix.


let two3x3 = [
    [10, 20, 30],
    [11, 22, 33],
    [99, 88, 77]
]


let sum = two3x3[0][0] + two3x3[0][2] + two3x3[1][1] + two3x3[2][0] + two3x3[2][2]

console.log(sum);


// 7. Find total elements in an array without counting manually.


let evens = [1, 2, 3, 4, 5, 6]

console.log(evens.length);


// 8. Create a function that checks whether array length is even or odd.

function check() {
    return (evens.length%2 === 0) ? "Even!" : "Odd";
}

console.log(check());


// 9. Add 3 new elements at the end of array.



let newarr = [10, 20, 30]
let upd = []


newarr.push(40)
newarr.push(50)
newarr.push(60)


console.log(newarr); // (6) [10, 20, 30, 40, 50, 60]


// 10. Add elements dynamically inside loop from another array.


for(let i = 0; i < newarr.length; i++) {
    upd.push(newarr[i])
}

console.log(upd); // (6) [10, 20, 30, 40, 50, 60]


// 11. Remove last element and print removed value.

let emp = [1, 2, 3, 4, 5, 6, 7]

console.log(emp.pop()); // 7



// 12. Keep removing elements until array becomes empty.


let i = 0
while(i < emp.length){
    emp.pop()
}


console.log(emp); // []





// 13. Add one username at beginning of array.

let usernames = ["Sachin", "Vijay", "Priyanka"]


usernames.unshift("Santosh")


console.log(usernames); // (4) ['Santosh', 'Sachin', 'Vijay', 'Priyanka']




// 14. Insert multiple elements at beginning without replacing existing ones.
usernames.unshift("Satish", "Brijesh", "Mukul")


console.log(usernames); // (7) ['Satish', 'Brijesh', 'Mukul', 'Santosh', 'Sachin', 'Vijay', 'Priyanka']
