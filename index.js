// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../', 'index.js'));
// });

// app.listen(process.env.PORT || 8080);

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));