let orders=[{unitPrice:100,quantity:2},{unitPrice:110,quantity:5},{unitPrice:45,quantity:4}];
calculateTotalcost=()=>{
    let totalPrice=0;
    orders.forEach((item) => {
        totalPrice +=item.quantity*item.unitPrice;
    });
    return totalPrice;
}
console.log(calculateTotalcost(orders));