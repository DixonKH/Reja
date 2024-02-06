console.log("Web Server Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR: ", err);
    } else {
        user = JSON.parse(data);                            
    }
});

//Biz web serverni 4 bosqichda qurib olamiz: 

//1. Kirish code:  expressdan kirib kelgan malumotlarimizga bogliq kodlar yoziladi :

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2. Session code

//3. // 3. Views code: Bu bolimda traditional yol bilan yani server side rendering yoli orqali html qurib clientga yuboramiz:

app.set("views", "views");                   // bu yerda biz views degan folder ochayabmiz
app.set("view engine", "ejs");                 // hamda view folder engine ni ejs ekanligini korsatyabmiz bu views folderini oqiydi


//4.  Routing code: bu routerlarga moljallangan bolim 



app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get('/author', (req, res) => {
    res.render("author", {user: user });
})

app.get("/", function (req, res) {
    res.render("harid"); 
}); 

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`Server is running successfully on port: ${PORT}`);
});
