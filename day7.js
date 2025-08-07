for (let i = 0; i < count; i += 1) {
  rows.push(padRow(i + 1, count));
}

for (let i = 0; i < count; i++) {
  rows.push(padRow(i + 1, count));
}

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count)); // This loop starts from 1 to count, inclusive
}

/*
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/