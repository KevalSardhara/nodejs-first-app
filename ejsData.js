import express from "express";
import fs from "fs";
import path from "path";
import ejs from "ejs";

// ejs module to be the used here

const PORT = 5000;
const app = express();
const user = [];
// middleware
// express.static(express.static(path.join(path.resolve(), "./public")));
// console.log(path.join(path.resolve(), "./public"));
app.use(express.static(path.join(path.resolve(), "./public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// rout like this is the work here
app.get("/about", (req, res, next) => {
    console.log("data");
    res.render("index1", { name: "India" });
});

app.get("/success", (req, res, next) => {
    // res.render("success");
    // res.json({user : user});
    res.json(user);
});
app.post("/home", (req, res, next) => {
    console.log(req.body);
    user.push(req.body);
    res.redirect("/success");
});

app.listen(PORT, () => {
    console.log("server is run now!", PORT);
});

// app.get("/about", (req, res, next) => {
//     console.log("data");
//     res.render("index1", { name: "India" });
// });

// app.post("/home", (req, res, next) => {
//     console.log(req.body);
//     // res.redirect("success");
//     res.render("success");
// });
// app.get("/about", (req, res, next) => {
//     console.log("/home data");
//     // res.sendFile("index");
//     res.render("index1.ejs");
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


