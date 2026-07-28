const QRCode = require('qrcode');
const fs = require('fs');

async function main() {
  // Srilakshmi Mahal on Dindigul Road, Trichy — specific coordinates
  const trichyUrl = "https://maps.google.com/?q=Srilakshmi+Mahal+Dindigul+Road+Trichy";
  const maduraiUrl = "https://maps.google.com/?q=VS+Chellam+Century+Hall+Madurai";

  const opts = { errorCorrectionLevel: 'M', margin: 2, width: 160,
    color: { dark: '#3A0F24', light: '#FBF0E4' } };

  const trichyQR = await QRCode.toDataURL(trichyUrl, opts);
  const maduraiQR = await QRCode.toDataURL(maduraiUrl, opts);

  fs.writeFileSync('qr_output.json', JSON.stringify({ trichyQR, maduraiQR }));
  console.log('Done');
}
main().catch(console.error);
