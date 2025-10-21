//Setup server menggunakan Express.js dan MySQL
const express = require('express');
let mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//menguji server
app.get('/', (req, res) => {
    res.send('Halo Dunia!');
});

//Memastikan dan menjalankan server aktif dan bisa menerima request
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});

//Konfigurasi koneksi database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'L@aaatfidz579',
    database: 'mahasiswa',
    port: 3309
});

//Menghubungkan ke database MySQL
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal cuy: ' + err.stack);
        return;
    }   
    console.log("Koneksi ke database berhasil cuy.");
});

//Endpoint untuk mengambil data mahasiswa
app.get('/api/mahasiswa', (req, res) => {
    db.query('SELECT * FROM biodata', (err, results) => {
        if (err) {  
            console.error("Error mengeksekusi query: " + err.stack);
            res.status(500).json({ message: "Gagal mengambil data." });
            return;
        }
        res.json(results);
    });
});

//Endpoint untuk menambah data mahasiswa
app.post('/api/mahasiswa', (req, res) => {
    const { nama, alamat, agama } = req.body;

    if (!nama || !alamat || !agama) {
        return res.status(400).json({ message : "Nama, Alamat, dan Agama harus diisi." });
    }

    db.query(
        "INSERT INTO biodata (nama, alamat, agama) VALUES (?, ?, ?)",
        [nama, alamat, agama],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Gagal menambahkan data." });
            }
            res.status(201).json({ message: "Data berhasil ditambahkan."});
        }
    );
});

//Endpoint untuk mengubah data mahasiswa
app.put('/api/mahasiswa/:id', (req, res) => {
    const { id } = req.params;
    const { nama, alamat, agama } = req.body;   
    db.query(
        "UPDATE Biodata SET nama = ?, alamat = ?, agama = ? WHERE id = ?",
        [nama, alamat, agama, id],
        (err, results) => {