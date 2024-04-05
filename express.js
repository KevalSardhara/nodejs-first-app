import express from "express";
import fs from "fs";
import path from "path";

const PORT = 5000;

const app = express();
app.get("/", (req, res, next) => {
    console.log("deta", req.url);
});
app.get("/about", (req, res, next) => {
    console.log(path.resolve());
    const pathURL = path.resolve();
    // const value = fs.readFileSync("./index.html");
    // res.sendFile(value);
    // console.log(path.join(pathURL, "index.html"));

    // const value = fs.readFileSync(path.join(pathURL, "index.html"));
    // res.sendFile(path.join(pathURL, "index.html"));
    res.render();
});

app.listen(PORT, () => {
    console.log("server is run now!", PORT);
});


// express id give the divide and conquer techniques to use it here

// NOTE
// "start": "node express.js",// Production time
// "dev" : "nodemon express.js" // development time

// NOTE
// app.get("/about", (req, res, next) => {
//     // res.sendStatus(500);
//     // res.status(404).json({
//     //     id : 56,
//     //     name : "India"
//     // });
//     // res.status(200).send("India");
//     // res.status(404).send("India");
// });


// NOTE
// example of the below code to be the here
// app.get("/about", (req, res, next) => {
//     console.log("deta", req.url);
//     res.send(`about ${PORT} ${123}`);
// });
// res.send(new Buffer('wahoo'));
// res.send({ some: 'json' });
// res.send('<p>some html</p>');
// res.status(404).send('Sorry, cant find that');

// console.log(app);
// import http from "http";
// const server = http.createServer((req, res) => {
//     console.log("run");
// });
// server.listen(PORT);

// const quark = require('quarkhttp');
// const app = quark();
// app.get('/', (req, res) => res.send('hello world'))
// app.listen(3000, () => {
//   console.log('Server running on 3000');
// })