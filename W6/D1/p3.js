// Using a custom CommonJS module
const { calculateTax, applyDiscount, formatCurrency } = require("./p2");

const itemName = "Laptop";
const basePrice = 60000;

// Apply discount correctly
const discountedPrice = applyDiscount(basePrice, 10);

// Calculate tax
const taxAmount = calculateTax(discountedPrice);

// Final price
const finalPrice = discountedPrice + taxAmount;

// Output
console.log("Item:", itemName);
console.log("Base Price:", formatCurrency(basePrice));
console.log("Discounted Price:", formatCurrency(discountedPrice));
console.log(" GST Tax @18%: ", formatCurrency(taxAmount));
console.log("Final Price:", formatCurrency(finalPrice));