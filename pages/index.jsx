import { useState } from "react";

const AFFILIATE_TAG = "premiumtrend-21";

function makeAmazonLink(search) {
  return `https://www.amazon.de/s?k=${encodeURIComponent(search)}&tag=${AFFILIATE_TAG}`;
}

function getSeason() {
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

function getSeasonInfo() {
  const season = getSeason();
  const infos = {
    weihnachten:  { label: "🎄 Weihnachten", desc: "Perfekte Geschenke für die Liebsten", color: "#c0392b", bg: "linear-gradient(135deg, #fff5f5, #ffe8e8)" },
    ostern:       { label: "🐣 Ostern", desc: "Frühlingsfrische Geschenke & Pflege", color: "#e07b39", bg: "linear-gradient(135deg, #fff8f4, #ffeedd)" },
    valentinstag: { label: "❤️ Valentinstag", desc: "Romantische Geschenke", color: "#c0397a", bg: "linear-gradient(135deg, #fff0f7, #ffe0ef)" },
    muttertag:    { label: "💐 Muttertag", desc: "Das Beste für die beste Mama", color: "#9b59b6", bg: "linear-gradient(135deg, #f9f5ff, #ede0ff)" },
    sommer:       { label: "☀️ Sommer", desc: "Sonnenschutz & frische Düfte", color: "#d4880a", bg: "linear-gradient(135deg, #fff8ec, #ffecc0)" },
    herbst:       { label: "🍂 Herbst", desc: "Intensive Pflege für kühlere Tage", color: "#7a5c3a", bg: "linear-gradient(135deg, #fdf6ee, #f5e6d0)" },
    fruehling:    { label: "🌸 Frühling", desc: "Frische Pflege für neuen Start", color: "#217a45", bg: "linear-gradient(135deg, #f0fff5, #d0ffe0)" },
    winter:       { label: "❄️ Winter", desc: "Intensive Pflege gegen Kälte", color: "#1a6fb5", bg: "linear-gradient(135deg, #f0f6ff, #d0e8ff)" },
  };
  return { season, ...infos[season] };
}

const ALL_PRODUCTS = [
  // PARFUM
  { id: 1, name: "Chanel N°5 Eau de Parfum", category: "Parfum", price: 129.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=500&h=500&fit=crop&q=80",
    description: "Das ikonische Chanel Parfum, 100ml", search: "chanel no 5 eau de parfum 100ml", hot: true },
  { id: 2, name: "Chanel Coco Mademoiselle", category: "Parfum", price: 119.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&h=500&fit=crop&q=80",
    description: "Elegant & modern, 100ml", search: "chanel coco mademoiselle parfum", hot: true },
  { id: 3, name: "Dior Miss Dior Parfum", category: "Parfum", price: 109.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop&q=80",
    description: "Romantisch & blumig, 100ml", search: "dior miss dior eau de parfum", hot: false },

  // THE ORDINARY
  { id: 4, name: "The Ordinary Niacinamide 10%", category: "The Ordinary", price: 9.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&h=500&fit=crop&q=80",
    description: "Hochdosiertes Serum für Poren, 30ml", search: "the ordinary niacinamide 10", hot: true },
  { id: 5, name: "The Ordinary Hyaluronic Acid", category: "The Ordinary", price: 10.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop&q=80",
    description: "Tiefe Hydration Serum, 30ml", search: "the ordinary hyaluronic acid 2", hot: false },
  { id: 6, name: "The Ordinary Retinol 0.5%", category: "The Ordinary", price: 8.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop&q=80",
    description: "Anti-Aging Serum, 30ml", search: "the ordinary retinol 0.5", hot: false },

  // CAUDALIE
  { id: 7, name: "Caudalie Beauty Elixir", category: "Caudalie", price: 49.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop&q=80",
    description: "Luxus Gesichtsspray, 100ml", search: "caudalie beauty elixir", hot: true },
  { id: 8, name: "Caudalie Vinoperfect Serum", category: "Caudalie", price: 59.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=500&h=500&fit=crop&q=80",
    description: "Gegen Pigmentflecken, 30ml", search: "caudalie vinoperfect serum", hot: false },

  // SEPHORA
  { id: 9, name: "Sephora Lippenstift Set", category: "Sephora", price: 29.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1586495777744-4e6232a7eb79?w=500&h=500&fit=crop&q=80",
    description: "12 Farben Set — Matt & Gloss", search: "sephora lippenstift set matt", hot: true },
  { id: 10, name: "Sephora Parfum Favorites Set", category: "Sephora", price: 69.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&h=500&fit=crop&q=80",
    description: "8 Mini Parfums zum Testen", search: "sephora parfum mini set favorites", hot: true },
  { id: 11, name: "Sephora Highlighter Palette", category: "Sephora", price: 24.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop&q=80",
    description: "6 Highlighter für strahlenden Look", search: "sephora highlighter palette glow", hot: false },

  // PATAGONIA
  { id: 12, name: "Patagonia Nano Puff Jacke", category: "Patagonia", price: 249.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=500&h=500&fit=crop&q=80",
    description: "Ultraleichte Daunenjacke, nachhaltig", search: "patagonia nano puff jacket", hot: true },
  { id: 13, name: "Patagonia Fleece Jacke", category: "Patagonia", price: 179.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop&q=80",
    description: "Klassische Synchilla Fleecejacke", search: "patagonia fleece jacket synchilla", hot: true },
  { id: 14, name: "Patagonia Better Sweater", category: "Patagonia", price: 149.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&h=500&fit=crop&q=80",
    description: "Nachhaltiger Fleece-Pullover", search: "patagonia better sweater fleece", hot: false },

  // KAWAII
  { id: 15, name: "Kawaii Oversized Hoodie", category: "Kawaii", price: 49.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop&q=80",
    description: "Süßer Hoodie in Pastellfarben", search: "kawaii oversized hoodie pastel", hot: true },
  { id: 16, name: "Kawaii Mini Skirt Set", category: "Kawaii", price: 39.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop&q=80",
    description: "Japanischer Stil Mini Rock", search: "kawaii mini skirt japanese style", hot: true },
  { id: 17, name: "Kawaii Cardigan Pastel", category: "Kawaii", price: 59.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop&q=80",
    description: "Flauschiger Cardigan japanischer Stil", search: "kawaii cardigan pastel fluffy", hot: false },

  // SICHERHEIT - TRESORE
  { id: 18, name: "Wächter Tresor DIN 24 Stufe A", category: "Sicherheit", price: 189.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&h=500&fit=crop&q=80",
    description: "Zertifizierter Tresor mit Fingerabdruck", search: "wächter tresor DIN 24 stufe A", hot: true },
  { id: 19, name: "Fingerabdruck Tresor Premium", category: "Sicherheit", price: 149.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&h=500&fit=crop&q=80",
    description: "Biometrischer Tresor, 30L", search: "fingerabdruck tresor biometrisch premium", hot: true },
  { id: 20, name: "Wandtresor Feuerfest", category: "Sicherheit", price: 129.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&h=500&fit=crop&q=80",
    description: "Einbautresor hinter Bild, feuerfest", search: "wandtresor zahlenschloss feuerfest", hot: false },

  // SICHERHEIT - KAMERAS
  { id: 21, name: "Reolink 4K Kamera Set", category: "Sicherheit", price: 299.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&h=500&fit=crop&q=80",
    description: "4x 4K Außenkameras mit Nachtsicht", search: "reolink 4k überwachungskamera set", hot: true },
  { id: 22, name: "Ring Video Doorbell Pro", category: "Sicherheit", price: 199.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1558002038-bb4237bb89bb?w=500&h=500&fit=crop&q=80",
    description: "HD Türklingel mit Kamera & Alexa", search: "ring video doorbell pro alexa", hot: true },
  { id: 23, name: "Arlo Pro 4 Außenkamera", category: "Sicherheit", price: 179.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&h=500&fit=crop&q=80",
    description: "2K kabellos, Farbige Nachtsicht", search: "arlo pro 4 aussenkamera kabellos", hot: false },
  { id: 24, name: "TP-Link Tapo Innenkamera", category: "Sicherheit", price: 39.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&h=500&fit=crop&q=80",
    description: "1080p mit Bewegungsalarm", search: "tp-link tapo innenkamera", hot: false },

  // SMART HOME
  { id: 25, name: "Amazon Echo (4. Gen)", category: "Smart Home", price: 99.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&h=500&fit=crop&q=80",
    description: "Smarter Lautsprecher mit Alexa", search: "amazon echo 4 generation alexa", hot: true },
  { id: 26, name: "Philips Hue Starter Set", category: "Smart Home", price: 129.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop&q=80",
    description: "3 smarte Glühbirnen + Bridge", search: "philips hue starter set bridge", hot: true },
  { id: 27, name: "Google Nest Thermostat", category: "Smart Home", price: 129.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop&q=80",
    description: "Smarte Heizungssteuerung, spart Energie", search: "google nest thermostat heizung", hot: true },
  { id: 28, name: "Yale Smart Lock Türschloss", category: "Smart Home", price: 199.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1558002038-bb4237bb89bb?w=500&h=500&fit=crop&q=80",
    description: "Smartes Schloss mit App & Fingerabdruck", search: "yale smart lock türschloss", hot: true },
  { id: 29, name: "TP-Link Smarte Steckdosen Set", category: "Smart Home", price: 49.99, seasons: ["alle"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&q=80",
    description: "4x smarte Steckdosen mit Alexa", search: "tp-link smarte steckdose set alexa", hot: false },

  // SONNENPFLEGE - nur Sommer
  { id: 30, name: "La Roche-Posay Anthelios SPF 50+", category: "Sonnenpflege", price: 22.99, seasons: ["sommer", "fruehling"],
    img: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=500&h=500&fit=crop&q=80",
    description: "Dermatologisch getestet, 50ml", search: "la roche posay anthelios spf 50", hot: true },
  { id: 31, name: "Isdin Fusion Water SPF 50", category: "Sonnenpflege", price: 26.99, seasons: ["sommer"],
    img: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=500&h=500&fit=crop&q=80",
    description: "Ultra-leicht, nicht fettend", search: "isdin fusion water spf 50", hot: true },

  // GESCHENKE - saisonal
  { id: 32, name: "Chanel N°5 Geschenkset", category: "Geschenke", price: 159.99, seasons: ["weihnachten", "valentinstag", "muttertag"],
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop&q=80",
    description: "Luxus Geschenkbox mit Parfum & Lotion", search: "chanel no 5 geschenkset", hot: true },
  { id: 33, name: "Smart Home Starter Geschenkset", category: "Geschenke", price: 149.99, seasons: ["weihnachten"],
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&h=500&fit=crop&q=80",
    description: "Echo + Hue + smarte Steckdose", search: "smart home geschenkset starter alexa", hot: true },
];

const CATEGORIES = ["Alle", "Sicherheit", "Smart Home", "Parfum", "Sephora", "Patagonia", "Kawaii", "The Ordinary", "Caudalie", "Sonnenpflege", "Geschenke"];

const catMeta = {
  "Sicherheit":   { color: "#c0392b", bg: "#fff5f5", icon: "🔒" },
  "Smart Home":   { color: "#1a6fb5", bg: "#f0f6ff", icon: "🏠" },
  "Parfum":       { color: "#c0397a", bg: "#fff0f7", icon: "🌸" },
  "Sephora":      { color: "#e74c3c", bg: "#fff5f5", icon: "💄" },
  "Patagonia":    { color: "#217a45", bg: "#f0fff5", icon: "🧥" },
  "Kawaii":       { color: "#9b59b6", bg: "#f9f5ff", icon: "🌸" },
  "The Ordinary": { color: "#333333", bg: "#f5f5f5", icon: "🧴" },
  "Caudalie":     { color: "#7a5c3a", bg: "#fdf6ee", icon: "🍇" },
  "Sonnenpflege": { color: "#d4880a", bg: "#fff8ec", icon: "☀️" },
  "Geschenke":    { color: "#c0392b", bg: "#fff5f5", icon: "🎁" },
};

const BRANDS = ["Chanel", "Dior", "Sephora", "Patagonia", "Kawaii", "The Ordinary", "Caudalie", "Wächter", "Ring", "Arlo", "Philips Hue", "Yale", "Google"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [imgErrors, setImgErrors] = useState({});
  const seasonInfo = getSeasonInfo();

  const seasonalProducts = ALL_PRODUCTS.filter(p =>
    p.seasons.includes("alle") || p.seasons.includes(seasonInfo.season)
  );

  const filtered = seasonalProducts.filter((p) => {
    const catMatch = selectedCategory === "Alle" || p.category === selectedCategory;
    const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f4f2ef", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a" }}>

      {/* TOP BAR */}
      <div style={{ background: "#111", color: "#ccc", fontSize: 12, textAlign: "center", padding: "9px 16px", letterSpacing: "0.08em" }}>
        ✨ Täglich aktualisiert · Chanel · Sephora · Patagonia · Smart Home · Amazon Partner: premiumtrend-21
      </div>

      {/* HEADER */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e5e2dd", padding: "0 40px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 20px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg, #ff6b35, #c0397a)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(192,57,122,0.3)" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 20 }}>T</span>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#111", letterSpacing: "-0.03em" }}>TrendBot</div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.15em", textTransform: "uppercase" }}>Premium Shop</div>
            </div>
          </div>

          {/* Search */}
          <div style={{ position: "relative", width: 320 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 15, color: "#bbb" }}>🔍</span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tresor, Chanel, Kawaii, Kamera..."
              style={{ width: "100%", padding: "11px 16px 11px 42px", background: "#f4f2ef", border: "2px solid transparent", borderRadius: 12, color: "#1a1a1a", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box", transition: "border-color 0.2s" }}
              onFocus={e => e.target.style.borderColor = "#c0397a"}
              onBlur={e => e.target.style.borderColor = "transparent"}
            />
          </div>

          {/* Amazon Badge */}
          <div style={{ background: "#FF9900", color: "#111", padding: "8px 18px", borderRadius: 10, fontSize: 13, fontWeight: 800, letterSpacing: "0.03em", boxShadow: "0 2px 8px rgba(255,153,0,0.3)" }}>
            🛒 Amazon Partner
          </div>
        </div>
      </header>

      {/* SEASON BANNER */}
      <div style={{ background: seasonInfo.bg, padding: "28px 40px", textAlign: "center", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: seasonInfo.color, marginBottom: 6, letterSpacing: "-0.02em" }}>
            {seasonInfo.label}
          </div>
          <div style={{ fontSize: 15, color: "#777", fontWeight: 400 }}>
            {seasonInfo.desc} · <span style={{ color: seasonInfo.color, fontWeight: 600 }}>Automatisch aktualisiert</span>
          </div>
        </div>
      </div>

      {/* BRANDS BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e2dd", padding: "14px 40px", overflowX: "auto" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {BRANDS.map(brand => (
            <span key={brand} onClick={() => setSearchTerm(brand)} style={{ padding: "5px 14px", border: "1.5px solid #e5e2dd", borderRadius: 20, fontSize: 12, fontWeight: 600, color: "#555", background: "#fafafa", cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.target.style.borderColor = "#c0397a"; e.target.style.color = "#c0397a"; }}
              onMouseLeave={e => { e.target.style.borderColor = "#e5e2dd"; e.target.style.color = "#555"; }}
            >{brand}</span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e2dd", padding: "12px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            const meta = catMeta[cat];
            return (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={{
                padding: "8px 18px", borderRadius: 22,
                border: active ? `2px solid ${meta?.color || "#111"}` : "2px solid #e5e2dd",
                background: active ? (meta?.bg || "#f4f2ef") : "#fff",
                color: active ? (meta?.color || "#111") : "#666",
                fontSize: 13, cursor: "pointer", fontFamily: "inherit",
                fontWeight: active ? 700 : 500, whiteSpace: "nowrap",
                transition: "all 0.15s",
                display: "flex", alignItems: "center", gap: 5,
              }}>
                {meta?.icon && <span>{meta.icon}</span>}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN GRID */}
      <main style={{ padding: "32px 40px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ fontSize: 14, color: "#999", fontWeight: 500 }}>
            <span style={{ color: "#111", fontWeight: 700 }}>{filtered.length}</span> Produkte gefunden · {seasonInfo.label}
          </div>
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} style={{ fontSize: 12, color: "#c0397a", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
              ✕ Suche löschen
            </button>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
          {filtered.map((product) => {
            const hovered = hoveredId === product.id;
            const meta = catMeta[product.category] || { color: "#e07b39", bg: "#fff8f4", icon: "🛍️" };
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: "#fff",
                  border: `2px solid ${hovered ? meta.color : "transparent"}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  transform: hovered ? "translateY(-6px)" : "none",
                  boxShadow: hovered ? `0 20px 48px rgba(0,0,0,0.14), 0 0 0 0px ${meta.color}` : "0 2px 12px rgba(0,0,0,0.07)",
                  display: "flex", flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <div style={{ height: 210, overflow: "hidden", position: "relative", background: meta.bg }}>
                  {!imgErrors[product.id] ? (
                    <img
                      src={product.img}
                      alt={product.name}
                      onError={() => setImgErrors(prev => ({ ...prev, [product.id]: true }))}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", transform: hovered ? "scale(1.08)" : "scale(1)" }}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, background: meta.bg }}>
                      <span style={{ fontSize: 48 }}>{meta.icon}</span>
                      <span style={{ fontSize: 11, color: "#aaa" }}>Bild nicht verfügbar</span>
                    </div>
                  )}
                  {/* Badges */}
                  <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 6 }}>
                    {product.hot && (
                      <span style={{ background: "#e53935", color: "#fff", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 20, letterSpacing: "0.04em" }}>🔥 TREND</span>
                    )}
                  </div>
                  {/* Category tag */}
                  <div style={{ position: "absolute", bottom: 10, right: 10 }}>
                    <span style={{ background: "rgba(255,255,255,0.95)", color: meta.color, fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 20, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {meta.icon} {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, lineHeight: 1.35, color: "#111" }}>{product.name}</div>
                  <div style={{ fontSize: 12, color: "#999", marginBottom: 16, flex: 1, lineHeight: 1.6 }}>{product.description}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: "#111", letterSpacing: "-0.02em" }}>€{product.price.toFixed(2)}</div>
                      <div style={{ fontSize: 10, color: "#bbb", marginTop: 1 }}>inkl. MwSt.</div>
                    </div>
                    <a
                      href={makeAmazonLink(product.search)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 16px",
                        background: hovered ? meta.color : "#FF9900",
                        color: hovered ? "#fff" : "#111",
                        borderRadius: 10, fontSize: 12, fontWeight: 800,
                        textDecoration: "none", transition: "all 0.2s",
                        letterSpacing: "0.02em", whiteSpace: "nowrap",
                        boxShadow: hovered ? `0 4px 12px ${meta.color}50` : "none",
                      }}
                    >
                      Bei Amazon →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "#aaa" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#555" }}>Keine Produkte gefunden</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>Versuche einen anderen Suchbegriff</div>
            <button onClick={() => { setSearchTerm(""); setSelectedCategory("Alle"); }} style={{ marginTop: 20, padding: "10px 24px", background: "#c0397a", color: "#fff", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Alle zeigen</button>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#111", color: "#666", padding: "40px", textAlign: "center", fontSize: 12, lineHeight: 2.2 }}>
        <div style={{ color: "#fff", fontWeight: 800, marginBottom: 4, fontSize: 16, letterSpacing: "-0.01em" }}>TrendBot · premiumtrend-21</div>
        <div>Chanel · Dior · Sephora · Patagonia · Kawaii · The Ordinary · Caudalie · Smart Home · Sicherheit</div>
        <div style={{ marginTop: 8 }}>Als Amazon-Partner verdiene ich an qualifizierten Käufen. Preise können variieren.</div>
        <div style={{ marginTop: 8, color: "#444", fontSize: 11 }}>© 2025 TrendBot · Alle Markenrechte bei den jeweiligen Eigentümern</div>
      </footer>
    </div>
  );
}
