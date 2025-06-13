// 1. array.sort

// Team Ranking
let eplteam = [9, 13, 14, 1, 2, 3, 4, 15, 16, 17, 10, 11, 12, 18, 19, 20, 5, 6, 7, 8];
let arrangedRanking = eplteam.sort((a,b)=> a - b);
console.log(arrangedRanking);

// Team Ranking with names
let top5eplTeams =[
  {rank: 3, team: 'ManCity'},
  {rank: 4, team: 'Chelsea'},
  {rank: 5, team: 'NewCastle'},
  {rank: 1, team:'Liverpool'},
  {rank: 2, team: 'Arsenal'}
];

let correctRanking = top5eplTeams.sort((a,b)=> a.rank-b.rank);
console.log(correctRanking);
// the 'rank' give an opportunity to input a comparable value , this is like putting a value to a box
// the 'team' holds the teams in strings that are assigned into different ranks



// 2. Sorting products from the cheapest to the most expepnsive. task: sort products by price (low to high)
let products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 },
  { name: "Keyboard", price: 75 }
];
const listedProducts = products.sort((a,b)=> a.price - b.price)
console.log(listedProducts);



// Advanced Exercise: Sort Students by Average Score (Descending)
let students = [
  { name: "Alice", scores: [88, 76, 92] },
  { name: "Bob", scores: [95, 90, 85] },
  { name: "Charlie", scores: [70, 80, 65] },
  { name: "Diana", scores: [100, 100, 90] }
];

function sumAllArr(arr){
    return arr.reduce((sum,val)=>sum + val,0)/arr.length;
}

const newResults = students.sort((a,b)=> sumAllArr(b.scores) - sumAllArr(a.scores));
console.log(newResults)




