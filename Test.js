const word = 'water'
let middleWordIndex
if(word.length%2 === 1){
  middleWordIndex = (Math.floor(word.length/2))
}
let firstHalf = word.slice(0, middleWordIndex)
const firstHalfRemoved = word.replace(firstHalf, '')
const addedInLast = firstHalfRemoved+firstHalf
let i
for(i=0; i<=word.length; i++){
  console.log(addedInLast.substr(0, i))
}