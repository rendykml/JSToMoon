const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i))
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

function padRow() {
}