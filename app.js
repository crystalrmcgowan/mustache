const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
    const data = {
      list: [
      { checked: false, label: 'Learn Node Basics' },
      { checked: "checked", label: 'Learn Express Basics' },
      { checked: "checked", label: 'Learn Mustache' },
      { checked: false, label: 'Learn HTML forms with Express' },
      { checked: false, label: 'Learn about Authentication' }
      ]
    }
    res.render('todo', data)
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
