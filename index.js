// A constant variable to store a fixed tax rate
const taxRate = 0.08;

// A function that takes a price and adds tax
const addTax = (price) => {
  return price + (price * taxRate);
};

// Testing our function
console.log(addTax(100)); // Expected output: 108
console.log(addTax(50));  // Expected output: 54

// Trying to change taxRate would cause an error
// taxRate = 0.1; //❌ This will throw an error because taxRate is a const variable


//💻You will code below:

// A variable to keep track of the total spent (this will change over time)

let totalSpent = 0;

// A function that adds an item price (with tax) to our total amount spent
const buyItem = (price) => {
	//You should use the addTax function and totalSpent variable here
};

// 🧪 Test your function below with the following inputs 
buyItem(20)  // "You bought an item for $21.60. Total so far: $21.60"
buyItem(10) // "You bought an item for $10.80. Total so far: $32.40"
