const fs = require('fs');
const { trichyQR, maduraiQR } = JSON.parse(fs.readFileSync('qr_output.json', 'utf8'));

let src = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Inject QR constants after RSVP_FORM line
src = src.replace(
  'const RSVP_FORM = "https://forms.gle/1tNybauRM73rD9HAA";',
  `const RSVP_FORM = "https://forms.gle/1tNybauRM73rD9HAA";
const TRICHY_QR = "${trichyQR}";
const MADURAI_QR = "${maduraiQR}";`
);

// 2. Add qrCode prop to EventCard for Engagement (Trichy)
src = src.replace(
  `<EventCard label="Engagement" tamilLabel="நிச்சயதார்த்தம்" city="Trichy"
            date="Saturday, 22 August 2026" time="6:00 PM onwards · Ring exchange + DJ night"
            venue="Srilakshmi Mahal, Trichy" color={GOLD}
            note="Where Praveen's family welcomes Jeyashri home for the first celebration — dance floor open till late." />`,
  `<EventCard label="Engagement" tamilLabel="நிச்சயதார்த்தம்" city="Trichy"
            date="Saturday, 22 August 2026" time="6:00 PM onwards · Ring exchange + DJ night"
            venue="Srilakshmi Mahal, Trichy" color={GOLD} qrCode={TRICHY_QR}
            note="Where Praveen's family welcomes Jeyashri home for the first celebration — dance floor open till late." />`
);

// 3. Add qrCode prop to EventCard for Reception (Madurai)
src = src.replace(
  `<EventCard label="Reception" tamilLabel="வரவேற்பு" city="Madurai"
            date="Wednesday, 26 August 2026" time="6:00 PM onwards"
            venue="VS Chellam Century Hall, Madurai" color={JADE}
            note="Jeyashri's hometown hosts the last toast — come celebrate with us under the Madurai sky." />`,
  `<EventCard label="Reception" tamilLabel="வரவேற்பு" city="Madurai"
            date="Wednesday, 26 August 2026" time="6:00 PM onwards"
            venue="VS Chellam Century Hall, Madurai" color={JADE} qrCode={MADURAI_QR}
            note="Jeyashri's hometown hosts the last toast — come celebrate with us under the Madurai sky." />`
);

fs.writeFileSync('src/App.jsx', src);
console.log('QR constants and props injected.');
