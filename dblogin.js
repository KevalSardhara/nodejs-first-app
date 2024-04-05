import express from "express"; // nodeJS fream work
import path from "path";
import mongoose from "mongoose"; // It's a mongodb freamwork.
import cookieParser from "cookie-parser"; // It's a mongodb freamwork.
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // It's a mongodb freamwork.

const PORT = 5000;
const app = express();

// console.log(mongoose);
// Middleware use here
app.use(express.static(path.join(path.resolve(), "./public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

console.log(bcrypt);

mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: "college", // write as it is here fore the database connection to be the here
}).then(() => {
    console.log("database connected successfully");
}).catch((e) => {
    console.log("error", e);
});
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const Student = mongoose.model("student", studentSchema);


const isAuthonticate = async (req, res, next) => {
    const { token } = req.cookies;
    console.log(token);
    if (token != undefined) {
        const decoded = jwt.verify(token, "KJHJKH561564651");

        req.studentId = await Student.findById(decoded._id);
        console.log(decoded, '---');
        next();
    } else {
        res.render("login");
    }
};

// call to nest req, res function to call it here
app.get("/", (req, res, next) => {
    next();
}, (req, res, next) => {
    next()
}, (req, res, next) => {
    console.log("done");
});

app.get("/login", isAuthonticate, (req, res, next) => {
    console.log("login");
    console.log(req.studentId, "#######");

    // write to be the here make the system to be the make the data
    // view js file to access very easily to work it here
    res.render("success", req.studentId);
});

app.get("/index", (req, res, next) => {
    res.render("index");
});


app.post("/index", (req, res, next) => {
    // res.header();
    res.redirect("index");
});


app.get("/success", (req, res, next) => {
    // res.render("index");
    console.log(req.studentId, "#######");
    res.json("user add successfully");
});

app.post("/home", async (req, res, next) => {
    const { name, email } = req.body;
    const studentEmail = await Student.findOne({ email });
    // if (!studentEmail) {
    //     return res.redirect("index");
    // }

    const hashPassword = await bcrypt.hash(email, 10);

    // const bcryptPasswordMatch = await bcrypt.compare(email, studentEmail.email); 

    // const std_data = await Student.create({ name: name, email: email });
    const std_data = await Student.create({ name, email: hashPassword });

    var token = jwt.sign({ _id: std_data._id }, 'KJHJKH561564651');
    console.log(token);

    // res.cookie("token", std_data._id, {});

    res.cookie("token", token, {
        httpOnly: true,
        // expires : new Date(Date.now() + (60 * 1000)),
        // expires : new Date(Date.now()),  
    });
    console.log(std_data);
    res.redirect("success");
});

app.listen(PORT, () => {
    console.log("server is run now!", PORT);
});



// import express from "express"; // nodeJS fream work
// import path from "path";
// import mongoose from "mongoose"; // It's a mongodb freamwork.
// import cookieParser from "cookie-parser"; // It's a mongodb freamwork.

// const PORT = 5000;
// const app = express();

// // console.log(mongoose);
// // Middleware use here
// app.use(express.static(path.join(path.resolve(), "./public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.set("view engine", "ejs");

// mongoose.connect("mongodb://127.0.0.1:27017/", {
//     dbName: "college", // write as it is here fore the database connection to be the here
// }).then(() => {
//     console.log("database connected successfully");
// }).catch((e) => {
//     console.log("error", e);
// });
// const studentSchema = new mongoose.Schema({
//     name: String,
//     email: String,
// });
// const Student = mongoose.model("student", studentSchema);





// app.get("/login", (req, res, next) => {
//     // res.end("added successfully!");
//     console.log("run data");
//     const {token} = req.cookies;
//     // const cookiesData = req.cookies.token;
//     console.log(token);
//     if (token != undefined) {
//         console.log("run --------------------------------");
//         res.render("index");
//     } else {
//         res.render("login");
//     }
// });

// app.get("/index", (req, res, next) => {
//     res.render("index");
// });


// app.post("/index", (req, res, next) => {
//     // res.header();
//     res.cookie("token", "FDFGHH4564565", {
//         httpOnly: true,
//         // expires : new Date(Date.now() + (60 * 1000)),
//         // expires : new Date(Date.now()),
//     });
//     // res.cookie("token", null, {
//     //     httpOnly: true,
//     //     // expires : new Date(Date.now() + (60 * 1000)),
//     //     // expires : new Date(Date.now()),
//     // });
//     res.redirect("index");
// });


// app.get("/success", (req, res, next) => {
//     res.json("user add successfully");
// });

// app.post("/home", async (req, res, next) => {
//     await Student.create({ name: req.body.name, email: req.body.email });
//     res.redirect("success");
// });

// app.listen(PORT, () => {
//     console.log("server is run now!", PORT);
// });
