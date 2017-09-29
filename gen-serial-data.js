const bin = (n, l) => ('0'.repeat(l) + n.toString(2)).substr(-l);

let a = [];
for(let i = 0; i < 16; i++) {
  a.push(Math.floor(Math.random()*255));
}

let stream = a.map((j) => bin(j, 8));
for(let i = 0; i <= 15; i++) {
  let str = bin(i, 4) + '=' + stream[i];
  console.log(str);
}
