// 40 Que series about array


// 1.  Create an array of 5 favorite movies and print all values.


let movies = ["Fight Club", "Resident Evil", "Avengers", "Venom", "3 idiot"];


for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}



//Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

let misle = [1, 2, "hello", true, false, [1, 2, 3, 4]]

for (let j = 0; j < misle[5].length; j++) {
    console.log(misle[5][j]);
}


// Print the first and last element of an array.

let firstLast = ["hello", "good", "bad", "guys!"]


console.log(firstLast[0]);
console.log(firstLast[firstLast.length -1]);
