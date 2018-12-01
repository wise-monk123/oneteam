const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/items')
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback){
  console.log("Connection Succeeded")
})
var Items = require("../models/items")
app.post('/items', (req, res) => {
    var db = req.db;
    console.log(req)
    var item_text = req.body.itemText.text;
    var item_Id = req.body.itemId;
    var item_status = req.body.status;
    var new_item = new Items({
      itemId:item_Id,
      text: item_text,
      status: item_status
    })
  
    new_item.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Item saved successfully!',
        itemNumber:new_item.itemId
      })
    })
  })
app.get('/items', (req, res) => {
    Items.find({}, 'itemId text status', function (error, items) {
        if (error) { console.error(error); }
        res.send({
          items: items
        })
      }).sort({itemId:-1}) 
    console.log(res)
  })
// Fetch single task
app.get('/items/:itemId', (req, res) => {
    console.log('tracy')
    console.log(req.params.itemId)
    Items.findOne({"itemId":req.params.itemId},'itemId text status', function (error, items) {
      if (error) { console.error(error); }
      console.log(res)
      console.log('this is me')
      console.log(items)
      res.send(items)
    })
  })
  
  // Update a task
app.put('/items/:itemId', (req, res) => {
    Items.findOne({"itemId":req.params.itemId}, 'text status', function (error, items) {
      if (error) { console.error(error); }  
      items.text = req.body.textParam
      items.status = req.body.statusParam
      items.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  })
  
  
app.delete('/items/:id', (req, res) => {
    Items.remove({
    "itemId": req.params.id
    }, function(err, post){
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })
app.listen(process.env.PORT || 8081)