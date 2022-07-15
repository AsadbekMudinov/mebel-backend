const express=require('express')
const router =express.Router()
const adminController=require('./admin.controller')

router.route('/').post(adminController.addAdmin)



module.exports=router