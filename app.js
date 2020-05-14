const express = require('express')

const app = express()

//serve files out of the public directory
app.use(express.static('public'))

const port = 7878

//set the template engine
app.set('view engine', 'hbs');

const dummyLists = [
  {
    uuid: 'adfhhkkkkhgh',
    name: 'Kevin'
  },
  {
    uuid: 'lhgkfgjfk',
    name: 'Howie'
  }
]

const dummyItems = [
  {
    uuid: 'adfhhkkkkhgh',
    description: 'wash tht dog',
    display_order: 1
  },
  {
    uuid: 'lhgkfgjfk',
    description: 'wash the car',
    display_order: 2
  }
]

// the homepage shows your lists
app.get('/', function (req, res) {
  res.render('index', { lists: dummyLists})
})

//the list page shows the items in the list
app.get('/list/:listUUID', function (req, res) {
  res.render('list_page', { listname: 'Dummy List', items: dummyItems})
})

app.listen(port, () => {
console.log('express is listening on port ' + port)
})

