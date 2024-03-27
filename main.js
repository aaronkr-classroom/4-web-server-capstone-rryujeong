// main.js
"use strict";

// Listing 7.3 (p.121)
const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    fs = require('fs'),
    router = require("./router"),
    contentTypes = require('./content-types'),
    utils = require('./utils');

// GET 라우트
router.get("/", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});
router.get("/courses.html", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});
router.get("/contact.html", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

// PoST 라우트
router.post("/contact.html", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});
// CSS 에셋 라우트
router.get("/bootstrap.css", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});
router.get("/confetti_cuisine.css", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});
// js 에셋 라우트
// jpg 에셋 라우트
router.get("/people.jpg", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/img/people.jpg", res);
});
router.get("/product.jpg", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/img/product.jpg", res);
});
// png 에셋 라우트
router.get("/graph.png", (req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/img/graph.png", res);
});

http.createServer(router.handle).listen(port);
console.log(`Server at: http://localhost:${port}`);

