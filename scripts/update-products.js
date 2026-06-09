const fs = require("fs");
const path = require("path");

const PRODUCTS_PATH = path.join(__dirname, "../data/products.json");
const AFFILIATE_TAG = "premiumtrend-21";

const TREND_PRODUCTS = [
  {
    id: "ordinary-niacinamide",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "The Ordinary",
    asin: "B07QBQXFHZ",
    img: "https://m.media-amazon.com/images/I/51xMcqxQ+WL._SL500_.jpg",
    description: "Serum für Poren, Hautbild und Talgkontrolle.",
    hot: true
  },
  {
    id: "ordinary-hyaluronic",
    name: "The Ordinary Hyaluronic Acid 2% + B5",
    category: "The Ordinary",
    asin: "B07L4SHRDG",
    img: "https://m.media-amazon.com/images/I/41p4D5Xa6QL._SL500_.jpg",
    description: "Feuchtigkeitsserum für die tägliche Hautpflege.",
    hot: false
  },
  {
    id: "laroche-anthelios",
    name: "La Roche-Posay Anthelios SPF 50+",
    category: "Sonnenpflege",
    asin: "B003JUZG4G",
    img: "https://m.media-amazon.com/images/I/61hFzNnEFwL._SL500_.jpg",
    description: "Sonnenschutz für Gesicht und Alltag.",
    hot: true
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Kopfhörer",
    category: "Technik",
    asin: "B09XS7JWHH",
    img: "https://m.media-amazon.com/images/I/61VGXsn3OyL._SL500_.jpg",
    description: "Kabellose Kopfhörer mit Noise Cancelling.",
    hot: true
  },
  {
    id: "ring-doorbell",
    name: "Ring Video Doorbell",
    category: "Smart Home",
    asin: "B08N5NQ69J",
    img: "https://m.media-amazon.com/images/I/51EPpFpVQQL._SL500_.jpg",
    description: "Smarte Türklingel mit Video-Funktion.",
    hot: true
  },
  {
    id: "echo-dot",
    name: "Echo Dot",
    category: "Smart Home",
    asin: "B09B8V1LZ3",
    img: "https://m.media-amazon.com/images/I/61MbLLagiVL._SL500_.jpg",
    description: "Smarte Alexa-Steuerung für Zuhause.",
    hot: false
  }
];

function ensureDataFolder() {
  const dataDir = path.dirname(PRODUCTS_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function updateProducts() {
  ensureDataFolder();

  const cleanProducts = TREND_PRODUCTS.map((product) => ({
    ...product,
    affiliateTag: AFFILIATE_TAG,
    amazonUrl: `https://www.amazon.de/dp/${product.asin}?tag=${AFFILIATE_TAG}`,
    priceText: "Preis bei Amazon prüfen",
    lastChecked: new Date().toISOString().slice(0, 10)
  }));

  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(cleanProducts, null, 2));

  console.log("✅ TrendBot Agent erfolgreich aktualisiert");
  console.log(`📦 Produkte gespeichert: ${cleanProducts.length}`);
}

updateProducts();
