var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  updated_date: {type: Date, default: Date.now},
});
/**
 * @class Book
 * @typeof Model<BookSchema>
 */
const Customer = mongoose.model('asecollection',CustomerSchema);
module.exports = Customer;
