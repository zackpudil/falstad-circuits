const bin = (n, l) => ('0'.repeat(l) + n.toString(2)).substr(-l);

const NOP  = 0x000000; 
const LI1  = 0x800000;
const LI2  = 0x400000;
const LOE  = 0x200000;
const LOA1 = 0x100000;
const LOA2 = 0x080000;
const RIE  = 0x040000;
const RIA1 = 0x020000;
const RIA2 = 0x010000;
const ROE  = 0x008000;
const ROA1 = 0x004000;
const ROA2 = 0x002000;
const JMP  = 0x001000;
const OS   = 0x000800;
const DS   = 0x000400;
const DL   = 0x000200;
const DO   = 0x000100;

let clock = 0x0;
console.log(`${bin(clock, 4)}=${bin(DL | 0xA4, 24)}`);
clock++;
console.log(`${bin(clock, 4)}=${bin(DO | OS, 24)}`);
clock++;
console.log(`${bin(clock, 4)}=${bin(DS, 24)}`);
clock++;
console.log(`${bin(clock, 4)}=${bin(JMP | 0x10, 24)}`);
