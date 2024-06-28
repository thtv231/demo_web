const express = require("express")
const router = express.Router()
const controller = require("../../controller/client/user.controller")
const validate = require("../../validates/client/user.validate")

router.get("/register",controller.register)
router.post("/register",validate.registerPost,controller.registerPost)
router.get("/login",controller.login)
router.post("/login",validate.loginPost,controller.loginPost)
router.get("/logout",controller.logout)
router.get("/history",controller.history)








module.exports = router