var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  updated_date: {type: Date, default: Date.now},
});
/**
 * @class Book
 * @typeof Model<BookSchema>
 */
const Book = mongoose.model('asecollection',BookSchema);
module.exports = Book;
