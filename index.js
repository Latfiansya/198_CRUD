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

