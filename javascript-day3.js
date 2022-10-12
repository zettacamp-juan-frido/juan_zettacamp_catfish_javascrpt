// const bookPrice = (book, amDiscount, amTax, Credit) => {
//   let price = 60000;
//   let mount = 0;
//   let term = 2;
//   const Discount = (price * amDiscount) / 100;
//   const priceDiscount = price - Discount;
//   const Tax = (price * amTax) / 100;
//   total = priceDiscount + Tax;

//   for (let i = 0; i < term; i++) {
//     Credit = Credit * term;
//     hasil = total - Credit;
//     mount++;

//     const cicil = {
//       book,
//       price,
//       Discount,
//       priceDiscount,
//       Tax,
//       total,
//       mount,
//       Credit,
//       hasil,
//     };
//     console.log(cicil);

//     console.log(mount);
//   }

//   return `${book} have ${amDiscount}% discount, the discount is ${priceDiscount}, and tax ${Tax} Total is ${total}`;
// };

// let buy = bookPrice("Buku A", 10, 5, 20000);
// console.log(buy);

const listOfBook = ["Buku A", "Buku B", "Buku C"];
const stock = [10, 5, 9];
const mount = [
  {
    Mount: 0,
  },
];

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

        const term = mount.map((item) => {
          const container = {};
          container[item.Mount] = item.Mount;
          container.Mount = item.Mount.length++;
        });
        console.log(term);

        const cicil = {
          bookName,
          totalBuy,
          currentStock,
          price,
          total,
          mount,
        };

        return cicil;

        // const cicil = { ...listOfBook };
        // console.log(cicil);
      } else {
        return "Out of Stock";
      }
    } else {
      return "Book not found";
    }
  }
}

let buy = buyBooks("Buku A", 9);
console.log(buy); // total price
