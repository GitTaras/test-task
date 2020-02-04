const express = require('express');
const cors = require('cors');
const faker = require('faker');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const items = [];
let totalPrice = 0;
for(i = 0; i < 5; i++) {
  items.push({
    "id": faker.random.uuid(),
    "image": faker.image.imageUrl(),
    "title": faker.commerce.productName(),
    "description": faker.lorem.sentences(), 
    "quantity": Math.floor(Math.random() * 50) + 1,
    "price": Math.round( ((Math.random() * 5) + 1) * 100 ) / 100,
  });
  totalPrice += Math.round(items[i].price * parseInt(items[i].quantity) * 100) / 100;
}

app.get('/api/cart', (req, res)=>{
  res.send({items, totalPrice});
});

app.listen(PORT, () => console.log(`listen on ${PORT}`));