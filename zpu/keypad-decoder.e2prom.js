const bin = (n, l) =>
  ('0'.repeat(l) + n.toString(2)).substr(-l);

for(let i = 0; i < 10; i++) {
  let in_bin = '0'.repeat(i)+'1'+'0'.repeat(9-i);
  let out = bin(i, 4)
    .split('').reverse().join('');

  console.log(`${in_bin}=${out}`);
}
