//remove duplicate
let cart=[2,3,2,3,5,6];
var set=new Set();
for(let i=0;i<cart.length;i++){
set.add(cart[i]);
}
console.log(set);