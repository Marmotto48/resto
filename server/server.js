const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const port = process.env.PORT || 5000;
const swaggerUI = require("swagger-ui-express");
const yaml = require("yamljs");
const logger = require("./config/logger");

//---------------Connect Database----------------//
connectDB();
// --------------------------middleware routing body parse------------------------------
app.use(express.json());
//-----------------------Routes -----------------------//

app.use("/reservation", require("./routes/reservation"));
app.use("/availability", require("./routes/available"));
//---------------------------swagger---------------------------------------------------//
const swaggerDef = yaml.load("./swagger.yaml");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDef));

server.listen(port, (error) => {
  error ? console.log(error) : console.log(`Server running on port ${port}`);
  logger.info(`Server runing on port ${port}`);
});
