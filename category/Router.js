const app = require('express');
const router = app.Router();
const { getCat, postCategory, getCatbyID,DelCategory,updateCategory } = require('./controller'); 
router.get('/category', getCat); 
router.post('/category', postCategory);
router.get('/category/:_id', getCatbyID); 
router.delete('/category',DelCategory)
router.put('/category',updateCategory)

module.exports = router;
