const { response } = require('express');
const express = require('express');
const {readFile} = require('fs');

const app = express();

app.get('/', (request, response) => {

  readFile('./home.html','utf8', (err,html) => {
    if (err){
      response.status(500).send('sorry!')
    }

    response.send(html);

  })
});


app.listen(process.env.PORT || 3000, () => console.log('app available on http://localhost:3000'));
