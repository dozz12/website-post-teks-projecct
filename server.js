const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const filePath = 'teks.txt';

// Simpan teks ke file
app.post('/save', (req, res) => {
    fs.appendFileSync(filePath, req.body.text + "\n");
    res.sendStatus(200);
});

// Ambil teks dari file
app.get('/texts', (req, res) => {
    let texts = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);
    res.json(texts);
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
