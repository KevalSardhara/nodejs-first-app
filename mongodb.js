import express from "express"; // nodeJS fream work
import path from "path";
import mongoose from "mongoose"; // It's a mongodb freamwork.
import e from "express";

mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: "college", // write as it is here fore the database connection to be the here
}).then(() => {
    console.log("database connected successfully");
}).catch((e) => {
    console.log("error", e);
});

// make the mongoose schema to be the here
// which field to be the make here it's like the schema write here
// Schema is like the structure of the collection's data/row

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Student = mongoose.model("student", studentSchema);


const PORT = 5000;
const app = express();
const user = [];

app.use(express.static(path.join(path.resolve(), "./public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

console.log(mongoose);

app.get("/login", (req, res, next) => {
    // res.end("added successfully!");
    res.render("login");
});

app.post("/index", (req, res, next) => {
    res.redirect("login");
});

app.get("/success", (req, res, next) => {
    res.json("user");
    // res.json(JSON.parse(Student.find()));
});
app.post("/home", async (req, res, next) => {
    await console.log(req.body);
    await Student.create({ name: req.body.name, email: req.body.email });
    res.redirect("success");
});

app.listen(PORT, () => {
    console.log("server is run now!", PORT);
});



// New NOTE for the databases

// app.get("/about", (req, res, next) => {
//     // console.log("data");
//     // res.render("index", { name: "India" });

//     Student.create({ name: "Keval", email: "kevalsardhara7@gmail.com" })
//         .then(() => {
//             console.log("data add successfully");
//             res.end("data add successfully");
//         }).catch(() => {
//             console.log("error accured");
//             res.end("error accured");
//         });


// Student.create({ name: "Keval", email: "kevalsardhara7@gmail.com" })
// .then(() => {
//     console.log("data add successfully");
//     res.end("data add successfully");
// }).catch((e) => {
//     console.log("error accured", e);
//     res.end("error accured");
// });
// });





// app.get("/about", (req, res, next) => {
//     console.log("data");
//     res.render("index", { name: "India" });
// });

// app.post("/home", (req, res, next) => {
//     console.log(req.body);
//     // res.redirect("success");
//     res.render("success");
// });
// app.get("/about", (req, res, next) => {
//     console.log("/home data");
//     // res.sendFile("index");
//     res.render("index.ejs");
// });
// app.get("/home", (req, res, next) => {
//     console.log("home");
//     res.send("<h1>home asdfghjkl</h1>");
// });
// app.get("/about", (req, res, next) => {
//     console.log("about");
//     // res.sendFile("index"); // not work here
//     res.send("<h1>Information asdfghjkl</h1>");
// });





// const app = express();
// app.get("/", (req, res, next) => {
//     console.log("home", req.url);
// });
// app.get("/about", (req, res, next) => {
//     console.log("about", req.url, req.query);
//     const abp = path.resolve(); // console.log(abp); E:\nodeJS\NodeJs 04_04_2024\demo
//     res.sendFile(path.join(abp, "./demo/file.js"));
// });


