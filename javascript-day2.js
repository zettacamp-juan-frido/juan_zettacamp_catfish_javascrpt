// let book = 60000;
// let amDiscount = 0.5;
// let amTax = 2000;
// let stock = 6;

// let priceBook = 0;
// let discount = 0;
// let total = 0;
// let bookStock = 10;

// const stock = [bookStock];

// const stock = 8;
// const buy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= buy.length; i++) {
//   if (i < stock) {
//     console.log(buy[i]);
//     priceBook += book;
//     discount = priceBook * amDiscount;
//     total = discount + amTax;
//     console.log(total);
//   } else {
//     const alert = "Out off stock";
//     console.log(alert);
//   }
// }

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

// function price(buying) {
//   for (let i = 0; i <= buy.length; i++) {
//     if (i < stock) {
//       console.log(buy[i]);
//       priceBook += book;
//       discount = priceBook * amDiscount;
//       total = discount + amTax;
//       return total;
//       // console.log(total);
//     } else {
//       const alert = "Out off stock";
//       return alert;
//       // console.log(alert);
//     }
//   }
// }
// const totalPrice = price();
// console.log(totalPrice);

const listOfBook = ["Buku A", "Buku B", "Buku C"];
const stock = [10, 5, 9];

// function buyBooks(bookName, totalBuy) {
//   for (i = 0; i <= listOfBook.length; i ++) {
//     console.log(listOfBook[i]); // i = 3 ; Buku C
//     console.log(i);
//     if (listOfBook[i] == bookName) {
//       let currentStock = stock[i];
//       console.log(currentStock); // i = 3 ; 9
//       if (totalBuy <= currentStock) {
//         const price = 5000;
//         let total;
//         total = totalBuy * price;
//         return total;
//       } else {
//         return "Out of stock";
//       }
//     } else {
//       return "Book not found";
//     }
//   }
// }

// let buy = buyBooks("Buku C", 9);
// console.log(buy);

function buyBooks(bookName, totalBuy) {
  for (let i = 0; i < listOfBook.length; i++) {
    if (bookName == listOfBook[i]) {
      console.log(bookName); // log name book
      let currentStock = stock[i];
      console.log(currentStock); // log stock book
      if (totalBuy <= currentStock) {
        console.log(totalBuy); // log total buy
        const price = 5000;
        let total;
        total = totalBuy * price;
        return total;
      } else {
        return "Out of Stock";
      }
    } else {
      return "Book not found";
    }
  }
}

let buy = buyBooks("Buku Z", 11);
console.log(buy);
