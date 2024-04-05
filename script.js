// // const http = require("http");
// // const nameExp = require("./feature");

// // import {name, obj} from "./feature.js"; // selected is the most important
// // console.log(name);
// // console.log(obj);

// import http from "http"; // ES6 module letest export and import modeule
// // import mainObj from "./feature.js"; // selected is the most important
// // import mainObj from "./feature.js"; // selected is the most important
// console.log(mainObj);

// // console.log(http.METHODS[0]);

// const PORT = 5000;


// // commonjs module and ES6 module
// // output like this for the 
// //   {
// //     name: 'World Economy Day in INDIA(BHARAT)',
// //     obj: { id: '#001', name: 'data', school: 'Samarpan Techano' }
// //   }
// //   Server start on the 5000
// // console.log(mainObj.name);
// // console.log(mainObj.obj);
    
// // req and res are exist to be the here as a (req and res).
// const server = http.createServer((req, res) => {
//     // req for the fronted side
//     // res for the backend side

//     // Routing for the serverside like below methods
//     // bulitin modules
//     // third party modeules

//     console.log("serverd", req.url);

//     if (req.url === "/about") {
//         res.end("<h1>about</h1>"); // {end} of the html data
//     }
//     else if (req.url === "/home") {
//         res.end("<h1>home</h1>"); // {end} of the html data
//     }
//     else {
//         res.end("<h1>Error 404</h1>"); // {end} of the html data
//     }
// });

// // server.listen(2000);

// server.listen(PORT, () => {
//     console.log("Server start on the", PORT);
// });

