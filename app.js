

const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const generateTrashWord = require('./generate_trash')
const bodyParser = require('body-parser')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// 設定路由

app.get('/', (req, res) => {

  res.render('index')
})


app.post('/', (req, res) => {
  const option = req.body
  console.log(option)
  const trashWord = generateTrashWord(option)
  console.log('垃圾話為:', trashWord)
  res.render('index', { trashWord: trashWord, option: option })
})



app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})