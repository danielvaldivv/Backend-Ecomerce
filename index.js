const express = require('express')
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res)=> {
  res.send('Hola, soy un nuevo endpoint');
});

routerApi(app);

// app.get('/users', (req,res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else{
//     res.send('no hay parámetros');
//   }
// })

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId
//   });
// });

app.listen(port, () => {
  console.log('My port ' + port);
});;
