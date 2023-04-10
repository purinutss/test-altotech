// const { sequelize } = require("./models");
// sequelize.sync({ alter: true });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const notFoundMiddleware = require("./middlewares/not-found");

const userRoute = require("./routers/user-route");

const app = express();

app.use(morgan("dev")); //log
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10000,
    message: { message: "many requested, please try again" }
  })
); //limit request
app.use(helmet()); //protect hijack
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);

app.use(notFoundMiddleware);

const port = process.env.PORT || 7999;
app.listen(port, () => console.log(`server run on port ${port}`));
