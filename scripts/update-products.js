const fs = require("fs");
const path = require("path");

const PRODUCTS_PATH = path.join(__dirname, "../data/products.json");

const TREND_PRODUCTS = [
  {
    id: "ordinary-niacinamide",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "The Ordinary",
    asin: "B07QBQXFHZ",
    description: "Beliebtes Serum für Hautbild, Poren und Talgkontrolle.",
    hot: true
  },
  {
    id: "ordinary-hyaluronic",
    name: "The Ordinary Hyaluronic Acid 2% + B5",
    category: "The Ordinary",
    asin: "B07L4SHRDG",
    description: "Feuchtigkeitsserum für die tägliche Hautpflege.",
    hot: false
  },
  {
    id: "laroche-anthelios",
    name: "La Roche-Posay Anthelios SPF 50+",
    category: "Sonnenpflege",
    asin: "B003JUZG4G",
    description: "Sonnenschutz für Gesicht und Alltag.",
    hot: true
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Kopfhörer",
    category: "Technik",
    asin: "B09XS7JWHH",
    description: "Kabellose Kopfhörer mit Noise Cancelling.",
    hot: true
  }
];

function ensureDataFolder() {
  const dataDir = path.dirname(PRODUCTS_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readProducts() {
  if (!fs.existsSync(PRODUCTS_PATH)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(PRODUCTS_PATH, "utf8"));
  } catch {
    return [];
  }
}

function removeDuplicates(products) {
  const seen = new Set();

  return products.filter((product) => {
    const key = product.asin || product.id;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function updateProducts() {
  ensureDataFolder();

  const oldProducts = readProducts();
  const merged = [...TREND_PRODUCTS, ...oldProducts];

  const cleanProducts = removeDuplicates(merged).map((product) => ({
    ...product,
    affiliateTag: "premiumtrend-21",
    amazonUrl: `https://www.amazon.de/dp/${product.asin}?tag=premiumtrend-21`,
    priceText: "Preis bei Amazon prüfen",
    lastChecked: new Date().toISOString().slice(0, 10)
  }));

  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(cleanProducts, null, 2));

  console.log("✅ TrendBot Agent erfolgreich aktualisiert");
  console.log(`📦 Produkte gespeichert: ${cleanProducts.length}`);
  console.log(`📁 Datei: ${PRODUCTS_PATH}`);
}

updateProducts();
