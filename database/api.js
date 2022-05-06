"use strict";
const router = require("express").Router();
const apiController = require("./apiController.js");
// Middleware to authorize a user request
// const authUser = require('../middleware/auth');

// const { upload } = require('../middleware/upload');
// const { singleFileUpload } = require('../controllers/upload');
router.post("/login", apiController.login);

router.get("/users", apiController.getUsers);
router.post("/register", apiController.register);
router.delete("/removeuser");

router.get("/products", apiController.getProducts);
router.put("/updateproduct");
router.delete("/removeproduct", apiController.removeProduct);

// router.get('/user', authUser, apiController.getLoggedInUser);
// router.get('/userproduct', authUser, apiController.getLoggedInUserProduct);
//router.get('/category', apiController.getCategories)

// router.post(
//   '/addproduct',
//   authUser,
//   upload.single('productImage'),
//   apiController.addProduct
// );

module.exports = router;
