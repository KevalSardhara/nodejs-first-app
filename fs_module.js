// import http from "http";
// import fs from "fs";
// import path from 'path';

// const PORT = 5000;

// // console.log(fs);
// console.log(path.dirname("./abc/def/ghi/index.html"));

// // const home = fs.readFile("./index.html", (err, data) => {
// //     console.log("file data", data, err);
// // });

// console.log("run");
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     // console.log("serverd", req.url); 
//     if (req.url === "/about") {
//         fs.readFile("./index.html", (err, data) => {
//             // console.log("file data", data, err);
//             res.end(data);
//         });
//         // fs.readFileSync("./index.html");
//     }
//     else if (req.url === "/home") {
//         // console.log(401);
//         res.end("<h1>home</h1>"); // {end} of the html data
//     }
//     else {
//         // console.log(404);
//         res.end("<h1>error 404</h1>"); // {end} of the html data
//     }
// });

// server.listen(PORT, () => {
//     console.log("Server start on the", PORT);
// });