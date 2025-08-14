//data
const character = "#";
const count = 8;
const rows = [];

//fungsi 1

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i))
}


//fungsi2
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

function padRow(name) {
    return name;
}

const call = padRow();
console.log(call);
padRow("rendy kamaluddin");


//funsi3
function pertambahan(angka, angka2) {
    return angka + angka2;
}

pertambahan(1,2);

const nama_depan = "rendy";


//funsi4
function rendyKamaluddin(nama_belakang){
  // Menggabungkan nama depan dan nama belakang
    return nama_depan + " " + nama_belakang;
}

let panggilNama = rendyKamaluddin("Kamaluddin")

console.log(panggilNama);
