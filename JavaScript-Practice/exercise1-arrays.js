// ═══════════════════════════════════════════════════════════════════
// 📝 EXERCISE 1: Array Methods (map, filter, reduce, find)
// ⏱️  Time: 20 minutes
// ═══════════════════════════════════════════════════════════════════

console.log('\n');
console.log('═'.repeat(60));
console.log('🎯 EXERCISE 1: JavaScript Array Methods');
console.log('═'.repeat(60));
console.log('\n');

// ───────────────────────────────────────────────────────────────────
// 📦 Sample Data
// ───────────────────────────────────────────────────────────────────
const products = [
  { id: 1, name: 'Laptop', price: 50000, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, category: 'electronics' },
  { id: 3, name: 'Shirt', price: 500, category: 'clothing' },
  { id: 4, name: 'Jeans', price: 1200, category: 'clothing' }
];

console.log('📦 Original Products:', products);
console.log('\n' + '─'.repeat(60) + '\n');

// ═══════════════════════════════════════════════════════════════════
// ✅ TODO 1: MAP - Get all product names
// Expected output: ['Laptop', 'Phone', 'Shirt', 'Jeans']
// ═══════════════════════════════════════════════════════════════════

console.log('🗺️  MAP EXAMPLES:\n');

const productNames = products.map((item) => item.name);
console.log('1️⃣  Product Names:', productNames);

const productPrices = products.map((item) => item.price);
console.log('2️⃣  Product Prices:', productPrices);

const productPricesIncreased = products.map((item) => item.price + 500);
console.log('3️⃣  Prices + ₹500:', productPricesIncreased);

const productIdArray = products.map((item) => item.id);
console.log('4️⃣  Product IDs:', productIdArray);

const productStock = products.map((item) => 'SOLD: ' + item.name);
console.log('5️⃣  Stock Status:', productStock);

const category = products.map((item) => item.category);
console.log('6️⃣  Categories:', category);

// ⭐ ADVANCED: Add calculated fields (discount, final price)
const productsWithDiscount = products.map((item) => ({
  ...item,                        // ✅ Spread individual item (not array!)
  discount: item.price * 0.1,     // 10% discount
  finalPrice: item.price * 0.9    // Price after discount
}));
console.log('7️⃣  Products with Discount:', productsWithDiscount);

console.log('\n' + '─'.repeat(60) + '\n');

// ═══════════════════════════════════════════════════════════════════
// ✅ TODO 2: FILTER - Get only electronics
// Expected output: [{ id: 1, ...}, { id: 2, ...}]
// ═══════════════════════════════════════════════════════════════════

console.log('🔍 FILTER EXAMPLES:\n');

const electronics = products.filter((item) => item.category === "electronics");
console.log('1️⃣  Electronics Items:', electronics);

const clothing = products.filter((item) => item.category === "clothing");
console.log('2️⃣  Clothing Items:', clothing);

const expensiveItems = products.filter((item) => item.price > 10000);
console.log('3️⃣  Expensive Items (> ₹10,000):', expensiveItems);

console.log('\n' + '─'.repeat(60) + '\n');

// ═══════════════════════════════════════════════════════════════════
// ✅ TODO 3: REDUCE - Find total price of all products
// Expected output: 81700
// ═══════════════════════════════════════════════════════════════════

console.log('🔢 REDUCE EXAMPLES:\n');

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log('1️⃣  Total Price of All Products: ₹' + totalPrice.toLocaleString('en-IN'));

const avgPrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
console.log('2️⃣  Average Price: ₹' + avgPrice.toLocaleString('en-IN'));

const productCount = products.reduce((count) => count + 1, 0);
console.log('3️⃣  Total Products Count:', productCount);

console.log('\n' + '─'.repeat(60) + '\n');

// ═══════════════════════════════════════════════════════════════════
// ✅ TODO 4: FIND - Find product with id=3
// Expected output: { id: 3, name: 'Shirt', ...}
// ═══════════════════════════════════════════════════════════════════

console.log('🔎 FIND EXAMPLES:\n');

const product = products.find((item) => item.id === 3);
console.log('1️⃣  Product with id=3:', product);

const expensiveProduct = products.find((item) => item.price > 40000);
console.log('2️⃣  First Expensive Product (> ₹40,000):', expensiveProduct);

const clothingItem = products.find((item) => item.category === 'clothing');
console.log('3️⃣  First Clothing Item:', clothingItem);

console.log('\n' + '─'.repeat(60) + '\n');

// ═══════════════════════════════════════════════════════════════════
// ✅ TODO 5: CHAIN - Get electronics with price > 25000
// Expected output: [{ id: 1, ...}, { id: 2, ...}]
// ═══════════════════════════════════════════════════════════════════

console.log('⛓️  CHAINING EXAMPLES:\n');

const expensiveElectronics = products
  .filter((item) => item.category === 'electronics')
  .filter((item) => item.price > 25000);
console.log('1️⃣  Expensive Electronics (> ₹25,000):', expensiveElectronics);

const cheapClothing = products
  .filter((item) => item.category === 'clothing')
  .filter((item) => item.price < 1000);
console.log('2️⃣  Cheap Clothing (< ₹1,000):', cheapClothing);

const affordableNames = products
  .filter((item) => item.price < 10000)
  .map((item) => item.name);
console.log('3️⃣  Affordable Product Names (< ₹10,000):', affordableNames);

console.log('\n' + '═'.repeat(60) + '\n');

// ═══════════════════════════════════════════════════════════════════
// 🎨 Function to Display Results in HTML
// ═══════════════════════════════════════════════════════════════════
function runExercise1() {
    const output = document.getElementById('output1');
    if (!output) {
        console.warn('⚠️  Element with id="output1" not found!');
        return;
    }
    
    output.innerHTML = `
<div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
    <h2 style="margin: 0 0 25px 0; font-size: 28px;">📊 Array Methods - Results</h2>
    
    <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 10px; color: #333; margin-bottom: 15px;">
        <h3 style="color: #667eea; margin-top: 0;">🗺️  MAP Results:</h3>
        <p><strong>1️⃣ Product Names:</strong> ${JSON.stringify(productNames)}</p>
        <p><strong>2️⃣ Product Prices:</strong> ${JSON.stringify(productPrices)}</p>
        <p><strong>3️⃣ Prices Increased (+₹500):</strong> ${JSON.stringify(productPricesIncreased)}</p>
        <p><strong>4️⃣ Product IDs:</strong> ${JSON.stringify(productIdArray)}</p>
        <p><strong>5️⃣ Stock Status:</strong> ${JSON.stringify(productStock)}</p>
        <p><strong>6️⃣ Categories:</strong> ${JSON.stringify(category)}</p>
        <p><strong>7️⃣ Products with Discount (10% off):</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 12px;">${JSON.stringify(productsWithDiscount, null, 2)}</pre>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 10px; color: #333; margin-bottom: 15px;">
        <h3 style="color: #667eea; margin-top: 0;">🔍 FILTER Results:</h3>
        <p><strong>1️⃣ Electronics:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 12px;">${JSON.stringify(electronics, null, 2)}</pre>
        <p><strong>2️⃣ Clothing:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 12px;">${JSON.stringify(clothing, null, 2)}</pre>
        <p><strong>3️⃣ Expensive Items (> ₹10,000):</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 12px;">${JSON.stringify(expensiveItems, null, 2)}</pre>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 10px; color: #333; margin-bottom: 15px;">
        <h3 style="color: #667eea; margin-top: 0;">🔢 REDUCE Results:</h3>
        <p style="font-size: 24px; font-weight: bold; color: #059669;">Total Price: ₹${totalPrice.toLocaleString('en-IN')}</p>
        <p><strong>Average Price:</strong> ₹${avgPrice.toLocaleString('en-IN')}</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 10px; color: #333; margin-bottom: 15px;">
        <h3 style="color: #667eea; margin-top: 0;">🔎 FIND Results:</h3>
        <p><strong>Product with id=3:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${JSON.stringify(product, null, 2)}</pre>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 10px; color: #333;">
        <h3 style="color: #667eea; margin-top: 0;">⛓️  CHAINING Results:</h3>
        <p><strong>Expensive Electronics:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto;">${JSON.stringify(expensiveElectronics, null, 2)}</pre>
    </div>
    
    <p style="margin-top: 20px; text-align: center; font-size: 14px;">✅ Check console (F12) for detailed output!</p>
</div>
    `;
    
    console.log('\n✅ HTML Results updated successfully!\n');
}

// ═══════════════════════════════════════════════════════════════════
// 💡 QUICK REFERENCE
// ═══════════════════════════════════════════════════════════════════
console.log('💡 ARRAY METHODS CHEAT SHEET:\n');
console.log('  🗺️  map()    → Transform each item (same length)');
console.log('  🔍 filter() → Keep items that match condition');
console.log('  🔢 reduce() → Combine all items into single value');
console.log('  🔎 find()   → Get first item that matches');
console.log('\n' + '═'.repeat(60) + '\n');

