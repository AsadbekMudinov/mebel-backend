const ExpenseModel = require('./expense.model')


async function getExpense(req,res) {
    try{
        const expense=await ExpenseModel.find({})
        return res.status(200).send(expense)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addExpense(req,res) {
    try{
        const subject = await ExpenseModel.create(req.body)
        return res.status(200).send(subject)
      
    }catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}


async function deletesubject(req, res) {
    try {
        let subjectId = req.params.id
        let result = await ExpenseModel.findByIdAndRemove(subjectId)
        return res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports={
    getExpense,
   addExpense,
   deletesubject
}