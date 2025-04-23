import data_Stock from "../model/Model_Stock.js"

export const createData = async (req, res) => {
    const {nama_Barang, stok_awal, barang_masuk, barang_keluar, stok_akhir} = req.body
    try {
        await data_Stock.create({
            nama_Barang,
            stok_awal,
            barang_masuk,
            barang_keluar,
            stok_akhir
        })
        res.status(200).json({msg: "Data berhasil ditambahkan!"})
    } catch (error) {
        res.status(400).json({msg: "Internal server error!"})
    }
}

// export const getData_Stock = async (req, res) => {
//     const 
// }