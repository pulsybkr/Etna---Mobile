import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";
import routes from "./routes";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);
 
app.listen(config.port, () => {
  console.log("Service endpoint= %s", config.url);
});