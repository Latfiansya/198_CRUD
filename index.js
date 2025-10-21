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
        res.status(500).send('Terjadi kesalahan saat mengambil data user.');
        return;
    }   
    res.json(results);
});