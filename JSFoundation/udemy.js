

// function printMultiplicationTable(n) {
//     let arr = [];
//  for (let i = 1; i <=10 ; i++) {
//     arr[i] = i*n ;
    
// }
 
//   return arr;
// }

// let table = printMultiplicationTable(5)
// console.log(table);

// function countVowels(str){
//     let count = 0;
//     const vowels ="aieouAEIOU";
    
//     for (let char of str) {
//         if(vowels.includes(char)){
//             count++;
//         }
        
//     }

//     return count;
// }

// let count = countVowels("eshwar")
// console.log(count);
// let sqnum;
// const squareNumbers = arr.map(item,index) => {
//       sqnum = item * item
// };

// arr.filter((ele)=> ele%2==0)

// const sumPositiveNumbers = (arr) => 
//   arr.filter(ele => ele > 0).
//   reduce((sum,num)=>sum+num,0);

 


// const getNames = (arr) => arr.map(item => item.name);
const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");

// 1. Create an array of words
const myWords = ["cat", "elephant", "dog"];

// 2. Call the function and store the result
const result = findLongestWord(myWords);

// 3. Print the result
console.log(result); 

introduce()