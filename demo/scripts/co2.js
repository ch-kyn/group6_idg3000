import fs from 'fs';

// "(...) library that enables developers a way to estimate the emissions related to use of their apps, websites, and software"
import { co2 } from '@tgwf/co2';

const reportBroken = JSON.parse(fs.readFileSync('../broken/lazy.json', 'utf-8'));
const reportFixed = JSON.parse(fs.readFileSync('../fixed/lazy.json', 'utf-8'));

const bytesBroken = reportBroken.audits['total-byte-weight'].numericValue;
const bytesFixed = reportFixed.audits['total-byte-weight'].numericValue;
// console.log(bytesBroken);

// estimate CO2
console.log('Broken (no lazy) CO2 (g):', new co2().perByte(bytesBroken));
console.log('Fixed (lazy) CO2 (g):', new co2().perByte(bytesFixed));
