const express = require('express');
const router = express.Router();
const orderController = require('./order.controller')


// Get  http://localhost:5000/order
router.route('/').get(orderController.getOrder)


// post  http://localhost:5000/order
router.route('/').post(orderController.addOrder)


//Put http:localhost:5000/order/:order_id
router.route('/:order_id').patch(orderController.updateOrder)


//delete http:localhost:5000/order/:order_id
router.route('/:order_id').delete(orderController.deleteOrder)

module.exports = router