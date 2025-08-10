while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}

for (let i = count; i > 0 ; i = i - 1){
    rows.push(padRow(i, count));
    
}