const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const {signup, signupForm,loginForm, login, logout} = require("../controllers/user.js");

router.route("/signup")
.get(signupForm)
.post(wrapAsync(signup));

router.route("/login")
.get(loginForm)
.post(saveRedirectUrl,passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}),login);

router.get("/logout",logout);
module.exports = router;