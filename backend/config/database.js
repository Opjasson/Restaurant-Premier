import { Sequelize } from "sequelize";

const db = new Sequelize("stock_premier_resto", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db
