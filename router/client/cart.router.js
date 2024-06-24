const express = require("express")
const router = express.Router()
const controller = require("../../controller/client/cart.controller.js")

router.get("/",controller.index)

router.post('/add/:productId',controller.addPost )


module.exports = router