const mongoose = require('mongoose')
const expenseSchema = mongoose.Schema({
    name:String,
    surename:String,
    tel:String,
    title:String

})
const ExpenseModel = mongoose.model('ExpenseModel', expenseSchema)
module.exports = ExpenseModel