import express from "express";
import dotenv from "dotenv";
import user from "./model/Model_User.js";
import Login from "./model/Model_login.js"
import stockRouter from "./routers/dataStock_Route.js";
import cors from "cors";
import userRouter from "./routers/users_Route.js";
import login from "./routers/auth_Routes.js";

// (async () => {
//     await Login.sync();
// })();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(stockRouter);
app.use(userRouter);
app.use(login);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${process.env.PORT}`);
    }
});
