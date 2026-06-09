const https = require('https');
const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = "premiumtrend-21";

const TREND_SEARCHES = [
  { search: "niacinamid serum trending", category: "The Ordinary", basePrice: 9.99 },
  { search: "vitamin c serum 2025", category: "Hautpflege", basePrice: 19.99 },
  { search: "chanel parfum bestseller", category: "Parfum", basePrice: 89.99 },
  { search: "smart home 2025 bestseller", category: "Smart Home", basePrice: 49.99 },
  { search: "kawaii mode trend 2025", category: "Kawaii", basePrice: 39.99 },
];

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  if (month === 12 || (month === 11 && day >= 25)) return "weihnachten";
  if (month === 3 || (month === 4 && day <= 20)) return "ostern";
  if (month === 2 && day <= 20) return "valentinstag";
  if (month === 5) return "muttertag";
  if (month >= 6 && month <= 8) return "sommer";
  if (month >= 9 && month <= 10) return "herbst";
  if (month >= 3 && month <= 5) return "fruehling";
  return "winter";
}

async function runAgent() {
  console.log("🤖 TrendBot Agent gestartet:", new Date().toLocaleString('de-DE'));
  const season = getCurrentSeason();
  console.log("📅 Aktuelle Saison:", season);
  const indexPath = path.join(__dirname, '../pages/index.jsx');
  let currentContent = fs.readFileSync(indexPath, 'utf8');
  const updateTime = new Date().toLocaleDateString('de-DE', { 
    day: '2-digit', month: '2-digit', year: 'numeric', 
    hour: '2-digit', minute: '2-digit' 
  });
  currentContent = currentContent.replace(
    /Zuletzt aktualisiert:.*?(?=·)|Täglich aktualisiert/g,
    `Zuletzt aktualisiert: ${updateTime}`
  );
  fs.writeFileSync(indexPath, currentContent);
  console.log("✅ Update erfolgreich:", updateTime);
}

runAgent().catch(console.error);
