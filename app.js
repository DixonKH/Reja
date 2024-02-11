console.log("Web Server Boshlash");
const express = require("express");
const app = express();



//Biz web serverni 4 bosqichda qurib olamiz: 

// MongoDB  chaqirish

const db = require("./server").db();

//1. Kirish code: 

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2. Session code

//3. // 3. Views code: Bu bolimda traditional yol bilan yani server side rendering yoli orqali html qurib clientga yuboramiz:

app.set("views", "views");                   // bu yerda biz views degan folder ochayabmiz
app.set("view engine", "ejs");                 // hamda view folder engine ni ejs ekanligini korsatyabmiz bu views folderini oqiydi


//4.  Routing code: bu routerlarga moljallangan bolim 



app.post("/create-item", (req, res) => {
   //todo: code with db here
});

app.get("/", function (req, res) {
    res.render("reja"); 
});

// app.get('/author', (req, res) => {
//     res.render("author", {user: user });
// });

module.exports = app;
