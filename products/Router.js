const app = require('express')
const router = app.Router()
const { getProducts, postProducts,getProductbyID,getProductbyCategory,getProductbyBrand,DelProduct,updateProducts } = require('./controller')

router.get('/products', getProducts)
router.post('/products', postProducts)
router.get('/products/:_id',getProductbyID)
router.get('/products',getProductbyCategory )
router.get('/products', getProductbyBrand)
router.delete('/products',DelProduct)
router.put('/products', updateProducts)


module.exports = router;