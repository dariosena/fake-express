let express = require('./src/express');

const app = express();

app.get('/', (request, response) => {
  response.writeHead(200);
  response.write('Hello World');
  response.end();
});

app.listen(3000, () => console.log('Example app listening on port 3000'));
