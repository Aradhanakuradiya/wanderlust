if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 8080;
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const path = require("path");
const Expresserror = require("./utils/Expresserror.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const MONGO_URL = process.env.URL;
app.set("view engine", "ejs");
// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter: 24 *3600,
})
store.on("error",()=>{
    console.log("error",err);
})
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.use("/", userRouter); 
// app.get("/", (req, res) => {
//     res.send("all good");
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

app.all("*", (req, res, next) => {
    next(new Expresserror(404, "Page not Found!"));
});

app.use((err, req, res, next) => {
    let { statuscode = 500, message = "something went wrong" } = err;
    res.status(statuscode).render("error.ejs", { message });
});

app.listen(port, (req, res) => {
    console.log(`server is listening to ${port}`);
});