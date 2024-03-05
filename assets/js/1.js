let numbers=[12,34,56,78,23,19,45,32,56,75];
function Sorting(arr){
return arr.sort((a, b) => a - b);
}
console.log(Sorting(numbers));

const str="salam sagol necesen";
function gettingItsLettersCount(str){
    let emptyArray=[];
let splitted=str.split(" ");
for(let i=0;i<splitted.length;i++){
emptyArray.push(splitted[i].length);
}
return emptyArray
}
console.log(gettingItsLettersCount(str));

const gettingItsLettersCount2 = str.split(" ").map(myFunction);
function myFunction(value) {
    return value.length;
}

console.log(gettingItsLettersCount2);
const gettingItsLettersCount3 = str.split(" ").map(value => value.length);
console.log(gettingItsLettersCount3);
let lengthArray=[];
const gettingItsLettersCount4 = str.split(" ").forEach(value =>{
    lengthArray.push(value.length);
});

console.log(lengthArray);

let gettingItsLettersCount5=str.split(" ").reduce((initialValue,value)=>{
    initialValue.push(value.length);
    return initialValue;
},[]);
console.log(gettingItsLettersCount5);