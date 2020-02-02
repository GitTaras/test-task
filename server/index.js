const express = require('express');
const cors = require('cors');
const faker = require('faker');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const items = [];
let totalPrice = 0;
for(i = 0; i<10; i++) {
  items.push({
    "id": faker.random.uuid(),
    "image": faker.image.imageUrl(),
    "title": faker.commerce.productName(),
    "description": faker.lorem.sentences(), 
    "quantity": Math.floor(Math.random() * 50) + 1,
    "price": faker.commerce.price(),
  });
  totalPrice += parseFloat(items[i].price);
  console.log(totalPrice);
}

// console.log("data",items);

app.get('/api/cart', (req, res)=>{
  //res.status(404).send();
  res.send({items, totalPrice});
});

app.listen(PORT, () => console.log(`listen on ${PORT}`));