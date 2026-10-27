// 1. Menampilkan dan menyembunyikan pesan
function tampilkanPesan() {
    let pesan = document.getElementById("pesan");

    if (pesan.innerHTML === "") {
        pesan.innerHTML = "anyeong! selamat belajar JavaScript.";
    } else {
        pesan.innerHTML = "";
    }
}

// 2. Menyapa nama dan mengembalikannya
function sapaNama() {
    let hasil = document.getElementById("hasilNama");

    if (hasil.innerHTML === "") {
        let nama = document.getElementById("nama").value;
        let umur = document.getElementById("umur").value;

        if (nama === "" || umur === "") {
            hasil.innerHTML = "masukkan nama dan umur terlebih dahulu!";
        } else {
            hasil.innerHTML = "halo, " + nama + "! umur kamu " + umur + " tahun.";
        }
    } else {
        hasil.innerHTML = "";
    }
}


// 3. Menghitung dan menyembunyikan hasil
function hitung() {
    let hasil = document.getElementById("hasil");

    if (hasil.innerHTML === "") {
        let angka1 = document.getElementById("angka1").value;
        let angka2 = document.getElementById("angka2").value;

        if (angka1 === "" || angka2 === "") {
            hasil.innerHTML = "masukkan kedua angka!";
            return;
        }

        let total = Number(angka1) + Number(angka2);
        hasil.innerHTML = "hasil: " + total;
    } else {
        hasil.innerHTML = "";
    }
}

// 4. Mengubah background dengan 5 warna
let daftarWarna = [
    "lavender",
    "lightpink",
    "lightblue",
    "lightyellow",
    "lightgreen"
];

let indeksWarna = -1;

function ubahWarna() {
    indeksWarna++;

    if (indeksWarna >= daftarWarna.length) {
        indeksWarna = -1;
        document.body.style.backgroundColor = "aliceblue";
    } else {
        document.body.style.backgroundColor =
            daftarWarna[indeksWarna];
    }

    let warna = document.getElementById("warna");

    if (warna) {
        if (indeksWarna === -1) {
            warna.innerHTML = "warna kembali ke semula.";
        } else {
            warna.innerHTML =
                "warna sekarang: " + daftarWarna[indeksWarna];
        }
    }
}

// 5. Menampilkan jam secara otomatis
function tampilkanJam() {
    let waktu = new Date();

    document.getElementById("jam").innerHTML =
        waktu.toLocaleTimeString("id-ID", {
            hour12: false
        });
}

setInterval(tampilkanJam, 1000);
tampilkanJam();