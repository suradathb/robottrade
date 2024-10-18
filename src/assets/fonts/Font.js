import fs from 'fs';
import path from './THCharmonman.ttf';

const fontPath = path.resolve(__dirname, 'THCharmonman.ttf');
const font = fs.readFileSync(fontPath);
const fontBase64 = Buffer.from(font).toString('base64');

// ส่งออกเป็น default
export default fontBase64;
