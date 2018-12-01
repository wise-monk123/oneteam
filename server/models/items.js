var mongoose = require("mongoose")
var Schema = mongoose.Schema
var autoIncrement = require('mongoose-auto-increment')
var connection = mongoose.createConnection('mongodb://localhost:27017/items')

autoIncrement.initialize(connection);
var ItemsSchema = new Schema({
  itemId:Number, 
  text: String,
  status: String
})

// ItemsSchema.plugin(autoIncrement.plugin, {
//     model: 'Items',
//     field: 'itemId',
//     startAt: 1,
//     incrementBy: 1
// })

var Items = mongoose.model("Items", ItemsSchema)
module.exports = Items