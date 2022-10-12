const bookPrice = (book, amDiscount, amTax, Credit) => {
  let price = 60000;
  let mount = 1;
  let term = 3;
  const Discount = (price * amDiscount) / 100;
  const priceDiscount = price - Discount;
  const Tax = (price * amTax) / 100;
  total = priceDiscount + Tax;

  const cicil = {
    book,
    price,
    Discount,
    priceDiscount,
    Tax,
    total,
    mount,
  };
  console.log(mount);
  for (let i = 0; i < term; i++) {
    // const newCicil = { ...cicil, mount: + };
    // console.log(newCicil);
    mount = +1;
    console.log(cicil);
  }

  return `${book} have ${amDiscount}% discount, the discount is ${priceDiscount}, and tax ${Tax} Total is ${total}`;
};

let buy = bookPrice("Buku A", 10, 5, 10);
console.log(buy);
