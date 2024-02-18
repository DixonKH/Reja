const http = require("http");
const mongodb = require("mongodb");
const eco = require("./ecosystem.config");

let db;
const connectionString = "mongodb+srv://khaydarovdilshod9:Bppa9U2FiLzldjoe@cluster0.avwuggv.mongodb.net/Reja"

mongodb.connect(connectionString, { 
    useNewUrlParser:true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("Error on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
         let PORT = 9005;
         server.listen(PORT, function() {
         console.log(`Server is running successfully on port: ${PORT}, http://localhost:${PORT}`); 
      });
    } 
});