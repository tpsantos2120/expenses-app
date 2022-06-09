'use strict'

// create App function
module.exports = function (app) {
    const expenseList = require('../controllers/expenseController')

    // todoList Routes

    // get and post request for /todos endpoints
    app.route('/expenses')
        .get(expenseList.listAllExpenses)
        .post(expenseList.createNewExpense)

    // put and delete request for /todos endpoints
    app.route('/expense/:id')
        .put(expenseList.updateExpense)
        .delete(expenseList.deleteExpense)
}