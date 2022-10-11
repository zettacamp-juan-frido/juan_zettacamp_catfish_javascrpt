let book = 60000;
let amDiscount = 5.0;
let amTax = 2000;
let buy = 10;

let price = 0;
let discount = 0;
let total = 0;
let bookStock = 10;

const stock = [bookStock];
// const stock = 8;

// for (let i = 0; i <= stock.length; i++) {
//   if (i < buy) {
//     price = book * buy;
//     discount = price / amDiscount;
//     total = discount - amTax;
//   }
// }
// if (condition) {
// } else {
//   const alert = "Out off stock";
//   console.log(alert);
// }

if (buy <= bookStock) {
  for (let i = 0; i <= stock.length; i++) {
    price = book * buy;
    discount = price / amDiscount;
    total = discount - amTax;
  }
  console.log(total);
} else {
  const alert = "Out off stock";
  console.log(alert);
}

// const priceDiscount = book / amDiscount;
// const priceTax = priceDiscount - amTax;
// console.log(priceDiscount);
// console.log(priceTax);
