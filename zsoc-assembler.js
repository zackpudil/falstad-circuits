const fs = require('fs');
const linereader = require('readline').createInterface({
  input: fs.createReadStream(process.argv[2])
});

const bin = (n, l) => ('0'.repeat(l) + n.toString(2)).substr(-l);

const NOP  = 0x0000; 
const LI1  = 0x8000;
const LI2  = 0x4000;
const LOE  = 0x2000;
const RIE  = 0x1000;
const B0   = 0x0800;
const B1   = 0x0400;
const B2   = 0x0200;
const B3   = 0x0100;
const ROE  = 0x0080;
const INC  = 0x0040;
const LDI  = 0x0020;
const JMP  = 0x0010;
const OS   = 0x0008;
const DS   = 0x0004;
const DL   = 0x0002;
const DO   = 0x0001;

const BA = B0|B1|B2|B3;

let clock = 0x0;

const e2prom = (code, clock) => {
  let [branch, cmd, data] = code.split(':');

  branch = parseInt(branch, 16);

  cmd = cmd
    .split(',')
    .reduce((a, b) => a = a | eval(b), 0);

  data = parseInt(data, 16);

  let addr = `${bin(branch, 4)}${bin(clock, 4)}`;
  let mem = `${bin(cmd, 16)}${bin(data, 8)}`;

  return `${addr}=${mem}`;
}

linereader.on('line', (line) => {
  line
    .split(' ')
    .map(l => e2prom(l, clock))
    .forEach(c => console.log(c));

  clock++;
});
