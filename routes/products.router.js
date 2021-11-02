const express = require('express')
const faker = require('faker')

const router = express.Router();

router.get('/', async (req, res)=> {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  await res.json(products)
  // .catch(err => res.status(500).json(err))
});

router.get('/filter', async (req, res) => {
  await res.send('yo soy un filter')
  .catch(err => res.status(500).json(err))
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  await res.json({
    id,
    name: 'Producto 2',
    price: 800
  })
  .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

module.exports = router;
