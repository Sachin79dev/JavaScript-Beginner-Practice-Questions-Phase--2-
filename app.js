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


// 15. Remove first element from array.


usernames.shift()


console.log(usernames); // (6) ['Brijesh', 'Mukul', 'Santosh', 'Sachin', 'Vijay', 'Priyanka']



// 16. Remove first element repeatedly until only 2 elements remain.


let j = 0 

while(j < usernames.length - 2) {
    usernames.shift()
}


console.log(usernames); // (2) ['Vijay', 'Priyanka']




// 17. Remove 2 elements from middle of array.


let midd = [1, 2, 3, 4, 5, 6, 7, 8]


midd.splice(3, 2)


console.log(midd); // (6) [1, 2, 3, 6, 7, 8]


// 18. Replace 3 middle elements with 5 new values.


let mid2 = [1, 2, 3, 6, 7]

mid2.splice(1, 3, 5, 4, 3, 2, 1)


console.log(mid2);


// 19. Reverse an array using method.


let rev = [1, 2, 4, 5]

reversing = rev.reverse()

console.log(reversing); // (5) [5, 4, 2, 1]



// 20. Reverse only first half of array.


let half = Math.floor(rev.length / 2);

for (let i = 0; i < half / 2; i++) {
    let temp = rev[i];
    rev[i] = rev[half - 1 - i];
    rev[half - 1 - i] = temp;
}

console.log(rev);



// 21. Sort numbers in ascending order.

let sorted = [1, 9, 8, 3, 5, 6, 4, 2, 7]

sorted.sort()

console.log(sorted); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]



// 22. Sort array so even numbers come first and odd later.
sorted.sort((a, b) => (a % 2) - (b % 2));


console.log(sorted); // (9) [2, 4, 6, 8, 1, 3, 5, 7, 9]



// 23. Extract first 4 elements into new array.


let extract = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8]


let extract2 = extract.slice(0, 4);


console.log(extract2);


// 24. Create a copy excluding first and last element.


let firstnlast = extract.slice(1, -1)


console.log(firstnlast);



// 25. Merge two arrays.

let alpha = ["a", "b"]
let numbers = [1, 2]


let combined = alpha.concat(numbers)


console.log(combined); // (4) ['a', 'b', 1, 2]


// 26. Merge 3 arrays and remove duplicate values.


let one = [1, 2, 3]
let two = [2, 3, 4]
let three = [4, 5, 6]


let combine = one.concat(two, three)

let unique = []

for (i = 0; i < combine.length; i++) {
    if (!unique.includes(combine[i])) {
        unique.push(combine[i])
    }
}

console.log(unique); // (6) [1, 2, 3, 4, 5, 6]




// 27. Check whether "apple" exists in array.

let fruits = ["apple", "banana", "grapes", "pomo", "apple"]


console.log(fruits.includes("apple"));

