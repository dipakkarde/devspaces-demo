const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Mock database
const products = [
    { id: 1, name: "Cloud Native Hoodie", price: 49.99, stock: 12 },
    { id: 2, name: "Red Hat Travel Mug", price: 19.99, stock: 45 },
    { id: 3, name: "Dev Spaces Sticker Pack", price: 4.99, stock: 500 }
];

app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: sans-serif; background-color: #f4f6f9; text-align: center; padding: 50px;">
            <h1 style="color: #ee0000;">🚀 Welcome to the Dev Spaces Roadshow!</h1>
            <p style="font-size: 18px;">This application is running entirely inside an isolated OpenShift Dev Spaces container.</p>
            <div style="background: white; max-width: 500px; margin: 20px auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>Current Catalog Status: <span style="color: green;">ONLINE</span></h3>
                <a href="/api/products" style="color: #0066cc; font-weight: bold;">View JSON API Endpoint</a>
            </div>
        </body>
    `);
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Application started successfully on port ${PORT}`);
});
