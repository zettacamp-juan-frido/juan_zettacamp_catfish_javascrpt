let book = 60000;
let amDiscount = 5.0;
let amTax = 2000;

const priceDiscount = book / amDiscount;
const priceTax = priceDiscount - amTax;
console.log(priceDiscount);
console.log(priceTax);
