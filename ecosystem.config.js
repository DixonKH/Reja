
module.exports = {
    apps: [{
        port        : 9005,
        name        : "DixonReja",
        script      : "./server.js",         
        exec_mode   : 'fork',
        watch       : true,         
        env: {
            NODE_ENV: "production",
        }
    }]}

