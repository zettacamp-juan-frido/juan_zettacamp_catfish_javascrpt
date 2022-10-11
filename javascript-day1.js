let book = 60000;
let amDiscount = 0.5;
let amTax = 2000;

// const priceDiscount = book * amDiscount;
// const priceTax = priceDiscount + amTax;
// console.log(priceDiscount);
// console.log(priceTax);

function Discount() {
  const priceDiscount = book * amDiscount;
  return priceDiscount;
}

let priceAfter = Discount();
console.log(priceAfter);

function Tax() {
  const priceTax = priceAfter + amTax;
  return priceTax;
}
let total = Tax();
console.log(total);
