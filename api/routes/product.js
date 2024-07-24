const productController=require('../controllers/productControllers');
const router=require('express').Router();

router.get('/', productController.getAllproduct);
router.post('/',productController.createProduct);
router.put('/:id',productController.updateProduct);
router.get('/:id',productController.getProductbuId);
router.delete('/:id', productController.deleteProduct);
router.get('/category/:id',productController.getProductbyCate); 
router.get('/top/name',productController.getProductTopSelling);
router.get('/more/sp', productController.getProductAddMore);

module.exports=router;