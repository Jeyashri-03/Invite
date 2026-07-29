const fs = require('fs');
let src = fs.readFileSync('src/App.jsx', 'utf8');
// Remove the two QR base64 constant lines entirely
src = src.replace(/\nconst _UNUSED_TRICHY_QR = "data:image\/png;base64,[^"]+";/, '');
src = src.replace(/\nconst MADURAI_QR = "data:image\/png;base64,[^"]+";/, '');
fs.writeFileSync('src/App.jsx', src);
console.log('Removed QR constants.');
