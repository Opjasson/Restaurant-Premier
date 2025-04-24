import data_Stock from "../model/Model_Stock.js";

export const createData = async (req, res) => {
    const { nama_Barang, stok_awal, barang_masuk, barang_keluar, stok_akhir } =
        req.body;
    try {
        await data_Stock.create({
            nama_Barang,
            stok_awal,
            barang_masuk,
            barang_keluar,
            stok_akhir,
        });
        res.status(200).json({ msg: "Data berhasil ditambahkan!" });
    } catch (error) {
        res.status(400).json({ msg: "Internal server error!" });
    }
};

export const getData_Stock = async (req, res) => {
    try {
        const response = await data_Stock.findAll({
            attributes: [
                "id",
                "nama_Barang",
                "stok_awal",
                "barang_masuk",
                "barang_keluar",
                "stok_akhir",
                "createdAt",
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


export const getDataByID_Stock = async (req, res) => {
    try {
        const stock = await data_Stock.findOne({
            where: {
                id : req.params.id
            }
        })
        if (!stock) return res.status(404).json({msg : "Data tidak ada!"})
        
        res.status(200).json(stock)
    } catch (error) {
        res.status(400).json({msg : "Internal server error"})
    }
}

export const updateData_Stock = async (req, res) => {
    try {
        const dataStock = await data_Stock.findOne({
            where: {
                id : req.params.id
            }
        })
        const {nama_Barang, stok_awal, barang_masuk, barang_keluar, stok_akhir} = req.body
        await data_Stock.update({
            nama_Barang, stok_awal, barang_masuk, barang_keluar, stok_akhir
        }, {
            where: {
                id: dataStock.id
            }
        })
        res.status(200).json({msg : "data berhasil dirubah!"})
    } catch (error) {
        res.status(404).json({"msg" : error.message});
    }
}