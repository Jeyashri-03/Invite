const fs = require('fs');
const { trichyQR, maduraiQR } = JSON.parse(fs.readFileSync('qr_output.json', 'utf8'));

let src = fs.readFileSync('src/App.jsx', 'utf8');

// Replace existing QR constants
src = src.replace(
  /const TRICHY_QR = "data:[^"]+";/,
  `const TRICHY_QR = "${trichyQR}";`
);
src = src.replace(
  /const MADURAI_QR = "data:[^"]+";/,
  `const MADURAI_QR = "${maduraiQR}";`
);

fs.writeFileSync('src/App.jsx', src);
console.log('QR constants updated.');
