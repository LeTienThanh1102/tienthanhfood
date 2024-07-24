const router=require('express').Router();
const orderControllers=require('../controllers/orderControllers');

router.post('/',orderControllers.createOrder);
router.get('/user/:userId',orderControllers.getUserOrders);
router.get('/"orderId', orderControllers.getOrderById);
router.put('/:orderId/status',orderControllers.updateOrderStatus);

module.exports=router;
