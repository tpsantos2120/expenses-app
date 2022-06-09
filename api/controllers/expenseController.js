// import Expense Model
const Expense = require('../models/expenseModel')

// DEFINE CONTROLLER FUNCTIONS

// listAllExpenses function - To list all todos
exports.listAllExpenses = (req, res) => {
    Expense.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(todo)
    })
}

// createNewExpense function - To create new todo
exports.createNewExpense = (req, res) => {
    let newExpense = new Expense(req.body)
    newExpense.save((err, todo) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).json(todo)
    })
}

// updateExpense function - To update todo status by id
exports.updateExpense = (req, res) => {
    Expense.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, todo) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).json(todo)
        }
    )
}

// deleteExpense function - To delete todo by id
exports.deleteExpense = async (req, res) => {
    await Expense.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(404).send(err)
        }
        res.status(200).json({ message: 'Expense successfully deleted' })
    })
}
