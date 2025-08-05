//data
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i))
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

function padRow(name) {
    return name;
}

const call = padRow();
console.log(call);
padRow("rendy kamaluddin");

function pertambahan(angka, angka2) {
    return angka + angka2;
}

pertambahan(1,2);

const nama_depan = "rendy";

function rendyKamaluddin(nama_belakang){
    return nama_depan + " " + nama_belakang;
}

let panggilNama = rendyKamaluddin("Kamaluddin")

console.log(panggilNama);
