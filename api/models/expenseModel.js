'use strict'
// Import mongoose
const mongoose = require('mongoose')

// Declare schema and assign Schema class
const Schema = mongoose.Schema

// Create Schema Instance and add schema properties
const ExpenseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

// Ensure virtual fields are serialised.
ExpenseSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    },
})

// create and export model
module.exports = mongoose.model('expenseModel', ExpenseSchema)
