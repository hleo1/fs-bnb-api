const express = require("express");
const app = express();
var cors = require("cors");

//Body Parser Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors());

//Custom Middleware
app.use((req,res,next) =>{
    console.log("This is middleware");
    console.log(req.body);
    next();
});
//logger middleware!
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(logger);

// const multipartMiddleware = multipart({ uploadDir: './uploads' });

// app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/api/auth", require("./src/api/auth-routes"));
app.use("/api/users", require("./src/api/user-routes"));
app.use("/api/listing", require("./src/api/listings-routes"));
app.use("/api/listings", require("./src/api/listing-routes"));
app.use("/api/bookings", require("./src/api/booking-routes"));
app.use("/api/providers", require("./src/api/provider-routes"));


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));