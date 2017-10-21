const bin = (n, l) => 
  ('0'.repeat(l) + n.toString(2)).substr(-l);


let seg_map = [
  '1111110',
  '0110000',
  '1101101',
  '1111001',
  '0110011',
  '1011011',
  '1011111',
  '1110000',
  '1111111',
  '1111011'
];

const led = (i) => {
  let h = Math.floor(i/100);
  let t = Math.floor((i - h*100)/10);
  let o = i - h*100 - t*10;

  return `${seg_map[o]}${seg_map[t]}${seg_map[h]}`;
};

const data = (i) => bin(i, 8).split('').reverse().join('');

for(let i = 0; i < 256; i++) {
  console.log(`${data(i)}0=${led(i)}0`);
}

for(let i = 0; i < 256; i++) {
  let lb = i < 128 ? '0' : '1';
  let a = i < 128 ? i : 256 - i;

  console.log(`${data(i)}1=${led(a)}${lb}`);
}
