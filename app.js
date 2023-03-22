const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/call', async (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
  try {
    const response = await axios.get(data.url, req.body);
    res.send(response.data);
    console.log('Received data:', response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
