const bin = (n, l) =>
  ('0'.repeat(l) + n.toString(2)).substr(-l);

const rever = (s) => 
  s.split('').reverse().join('');

for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    for(let k = 0; k < 10; k++) {
      let o = rever(bin(k, 4));
      let t = rever(bin(j, 4));
      let h = rever(bin(i, 4));

      let in_bin = `${o}0${t}0${h}`;
      let out = (i*100 + j*10 + k);

      let out_bin = bin(out, 8)
        .split('').reverse().join('');

      console.log(`${in_bin}=${out_bin}`);
    }
  }
}
