let originalPrice=110.10;
let discount=10;
let discountPricecalculate=()=> {
    let discountPrice=originalPrice-(originalPrice*discount)/100;
    discountPrice=Math.round(discountPrice);
    console.log("originalPrice :"+originalPrice);
    console.log("discount :"+discount);
    console.log("discountPrice :"+discountPrice);
}
discountPricecalculate();