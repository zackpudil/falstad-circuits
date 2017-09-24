const bin = (n, l) => ('0'.repeat(l) + n.toString(2)).substr(-l);

let a = [];
for(let i = 0; i < 4; i++) {
  a.push(Math.floor(Math.random()*255));
}

let stream = a.reduce((i, j) => i + bin(j, 8), '');
for(let i = 0; i <= 31; i++) {
  let str = bin(i, 5) + '=' + stream[i];
  console.log(str);
}
