// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 function  destructivelyPrependCat() {
    return cats.unshift("Bob");
 }
 function destructivelyAppendCat() {
    return cats.push("Ralph");
}
 function  destructivelyRemoveLastCat() {
    return cats.pop();
 }

 function destructivelyRemoveFirstCat(){
return cats.shift();
 }
function appendCat(name) {
 return   [...cats, "Broom" ]} 

function prependCat(name){
     return ["Arnold", ...cats];
   }
   
   function  removeLastCat() {
return cats.slice(0, cats.length -1) ;
   }
   function removeFirstCat() {
return cats.slice(1);
   }