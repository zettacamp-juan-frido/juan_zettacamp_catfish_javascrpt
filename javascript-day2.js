let book = 60000;
let amDiscount = 0.5;
let amTax = 2000;
let stock = 6;

let priceBook = 0;
let discount = 0;
let total = 0;
// let bookStock = 10;

// const stock = [bookStock];

// const stock = 8;
const buy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= buy.length; i++) {
  if (i < stock) {
    console.log(buy[i]);
    priceBook += book;
    discount = priceBook * amDiscount;
    total = discount + amTax;
    console.log(total);
  } else {
    const alert = "Out off stock";
    console.log(alert);
  }
}

// if (buy <= bookStock) {
//   for (let i = 0; i <= stock.length; i++) {
//     price = book * buy;
//     discount = price * amDiscount;
//     total = discount + amTax;
//   }
//   console.log(total);
// } else {
//   const alert = "Out off stock";
//   console.log(alert);
// }

// function price() {
//   for (let i = 0; i <= stock.length; i++) {
//     if (i < buy) {
//       console.log(stock[i]);
//       priceBook += book;
//       discount = priceBook * amDiscount;
//       total = discount + amTax;
//       return total;
//     } else {
//       const alert = "Out off stock";
//       return alert;
//     }
//   }
// }
// const totalPrice = price();
// console.log(totalPrice);
