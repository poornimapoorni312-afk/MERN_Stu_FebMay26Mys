function invoice(gstRate = 0.18, ...items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.name === "STOP") break;
      if (!item.price || !item.qty || item.price <= 0 || item.qty <= 0) continue;
      subtotal += item.price * item.qty;
    }
    const gst = subtotal * gstRate;
    return { subtotal, gst, total: subtotal + gst };
  }
  
  
  const result = invoice(0.18, 
    { name: "Pen", price: 10, qty: 3 }, 
    { name: "Invalid", price: 5, qty: 1 }, 
    { name: "STOP" },                       
    { name: "Paper", price: 50, qty: 1 }    
  );
  
  console.log(result);