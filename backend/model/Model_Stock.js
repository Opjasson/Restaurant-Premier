import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const data_Stock = db.define("data_stock", {
    nama_Barang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    stok_awal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    barang_masuk: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    barang_keluar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    stok_akhir: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
});

export default data_Stock;
