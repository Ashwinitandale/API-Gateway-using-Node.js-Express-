const express = require('express');
const rateLimit =require('../api-gateway/middleware/rateLimit.middleware');
const app = express();

app.use(rateLimit);

app.get('/', (req, res) => {
  res.json({ service: 'Product Service' });
});

app.listen(4003, () => console.log('Product Service running on port 4003'));
