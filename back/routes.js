const express = require("express");
const router = express.Router();
const Controller = require("./src/controllers/Controller.js"); 
const { loginRequired } = require("./src/middlwares/middleware.js");
const auth = require("./src/middlwares/auth.js"); 

// Private routes
router.get("/users", auth, Controller.getUsers); 
router.delete("/users", auth, Controller.deletedUserAll); 



// Public routes
router.get("/", loginRequired, Controller.renderPage);
router.get("/login", loginRequired, Controller.getlogin);
router.get("/register", loginRequired, Controller.getregister);
router.post("/register", loginRequired, Controller.register); 
router.post("/login", loginRequired, Controller.login);

module.exports = router;