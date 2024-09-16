import express from "express";
import { appConfig } from "./config/app.config.js";
import { mongo } from "./db/mongo.js";
import { ErrorHandlerMiddleware } from "./middlewares/error.handler.middleware.js";
import methodOverride from "method-override";
import path from "path";
import router from "./modules/url.routes.js";
import bodyParser from "body-parser";
import { urlSchema } from "./modules/url.schema.js";
import { baseUrl } from "./config/url.config.js";

const app = express();
// malumotni qaysi tipda almashishi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db ni ulash
await mongo();

// ejs
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(process.cwd(), "public")));

// front qismini qaytarish
app.get("/", async (req, res) => {
  console.log(req.query);
  console.log(baseUrl);
  res.render("index", { new_url: baseUrl + '/'+ req.query.new_url || "" });
});

app.use("/", router);

// errorlarni ushlash middlewari
app.use(ErrorHandlerMiddleware);

// serverni ishga tushirish
app.listen(appConfig.port, () => {
  console.log(`Server is running on port: ${appConfig.port}`);
});
