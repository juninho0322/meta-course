const dishData = [
  {
    name: "Biryani",
    price: 100,
  },
  {
    name: "Pasta",
    price: 80,
  },
  {
    name: "Pizza",
    price: 150,
  },
  {
    name: "Burger",
    price: 50,
  },
  {
    name: "Sandwich",
    price: 30,
  },
];

const tax = 1.2;

function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;
    if (taxBoolean === true) {
      finalPrice = dishData[i].price * tax;
    } else if (taxBoolean === false) {
      finalPrice = dishData[i].price;
    } else {
      console.log("you need to passa a boolean to the getPrices call");
      return "jump out";
    }
    console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
  }
}

function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  if (typeof guests == "number" && guests > 0 && guests <= 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) { 
    }
    console.log(`Discount: ${discount}%`);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

getDiscount(true, 10);

getDiscount(false, 10);
