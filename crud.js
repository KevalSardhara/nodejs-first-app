// import http from "http";
// const PORT = 5000;

// // default is GET method
// // get, post, put, delete
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     if (req.url === "/about") {
//         res.end("<h1>about</h1>");
//     } else if (req.url === "/home") {
//         res.end("<h1>home</h1>");
//     } else if (req.url === "/data") {
//         res.end("<h1>data</h1>");
//     } else {
//         res.end("<h1>error 404</h1>");
//     }
// });

// server.listen(PORT, () => {
//     console.log("Server start on the", PORT);
// });