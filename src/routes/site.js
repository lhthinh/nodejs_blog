const express = require('express')
const router = express.Router()
//đối tượng đc khởi tạo nên ko cần viết hoa
const siteController = require('../app/controllers/SiteController')

router.use('/search', siteController.search)


router.use('/', siteController.index) // tuyến đường luôn lọt vào cuối cùng

module.exports = router