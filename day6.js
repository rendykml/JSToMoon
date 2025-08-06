function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}