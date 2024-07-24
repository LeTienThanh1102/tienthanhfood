const categoryController= require('../controllers/categoryControllers');

const router=require('express').Router();

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
router.get('/:id', categoryController.getCategoryById);
router.delete('/:id', categoryController.deleteCategory);

module.exports=router