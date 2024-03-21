const {httpServer} = require("./api/app.js")

const startServer = () => {
    httpServer.listen(8080, () => {
        console.log("server started at port 8080");
    });
}

try {
    startServer();
} catch (error) {
    console.log(error);
}