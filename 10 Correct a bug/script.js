let cart=[2,4,5,3,6];

 function doublecartQuantity(){
for(let i=0;i<cart.length;i++){
    cart[i]*=2;
}
return cart;}
    cart=doublecartQuantity(cart);
console.log(cart);