//user paths
//host + /api/auth

const {Router} = require("express");
const {check} = require("express-validator");
const router = Router();
const {createUser, userLogin, revalidateToken} = require("../controllers/auth");


router.post("/new",
[//middlewares
  check("name", "Name is required").not().isEmpty(),
  check("email", "Email is required").isEmail(),
  check("password", "Password must contain 6 characters").isLength({min: 6})
],
createUser);

router.post("/", userLogin );

router.get("/renew", revalidateToken );


module.exports = router;