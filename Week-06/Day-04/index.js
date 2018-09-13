const express = require('express'); // a node module mappából szeretném az expresst használni
const app = express();              //szeretnék egy express szervert
const PORT = 3000;                  //nagybetűvel, igen, mert állandónak tekintjük

app.get('/ping', (req, res) => {
  res.send('pong');
});

//console.log('hopsz'); helyett:
app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});

//kiírja: The server is up and running on port 3000
//url: localhost:3000/ping, kiírja nekem, hogy pong
