const QRCode = require('qrcode');
const fs = require('fs');

async function main() {
  const trichyUrl = "https://maps.google.com/?q=Srilakshmi+Mahal+Trichy";
  const maduraiUrl = "https://maps.google.com/?q=VS+Chellam+Century+Hall+Madurai";

  const opts = { errorCorrectionLevel: 'M', margin: 2, width: 160,
    color: { dark: '#3A0F24', light: '#FBF0E4' } };

  const trichyQR = await QRCode.toDataURL(trichyUrl, opts);
  const maduraiQR = await QRCode.toDataURL(maduraiUrl, opts);

  console.log('TRICHY_QR=' + trichyQR.length + ' chars');
  console.log('MADURAI_QR=' + maduraiQR.length + ' chars');

  fs.writeFileSync('qr_output.json', JSON.stringify({ trichyQR, maduraiQR }));
  console.log('Written to qr_output.json');
}
main().catch(console.error);
