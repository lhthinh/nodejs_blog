const express = require('express')
const router = express.Router()
//đối tượng đc khởi tạo nên ko cần viết hoa
const newsController = require('../app/controllers/NewsController')

router.use('/:slug', newsController.show)


router.use('/', newsController.index) // tuyến đường luôn lọt vào cuối cùng

module.exports = router