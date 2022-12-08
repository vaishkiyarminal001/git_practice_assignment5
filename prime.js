let a = 13;
let count = 0;

for (let i=2; i<a.length; i++){
if (a%i!==9){
count++;
}
if (count==0){
console.log("True");
} else {
console.log("No");

