const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} =  require("../middleware.js");
const { createReview , destroyReview} = require("../controllers/review.js");

//Review route 
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));
//delete review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(destroyReview));

module.exports = router;