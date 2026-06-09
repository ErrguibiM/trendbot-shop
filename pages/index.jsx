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
    weihnachten:  { label: "🎄 Weihnachten", desc: "Perfekte Geschenke für die Liebsten", color: "#c0392b", bg: "#fff5f5" },
    ostern:       { label: "🐣 Ostern", desc: "Frühlingsfrische Geschenke & Pflege", color: "#e07b39", bg: "#fff8f4" },
    valentinstag: { label: "❤️ Valentinstag", desc: "Romantische Geschenke", color: "#c0397a", bg: "#fff0f7" },
    muttertag:    { label: "💐 Muttertag", desc: "Das Beste für die beste Mama", color: "#9b59b6", bg: "#f9f5ff" },
    sommer:       { label: "☀️ Sommer", desc: "Sonnenschutz & frische Düfte", color: "#d4880a", bg: "#fff8ec" },
    herbst:       { label: "🍂 Herbst", desc: "Intensive Pflege für kühlere Tage", color: "#7a5c3a", bg: "#fdf6ee" },
    fruehling:    { label: "🌸 Frühling", desc: "Frische Pflege für neuen Start", color: "#217a45", bg: "#f0fff5" },
    winter:       { label: "❄️ Winter", desc: "Intensive Pflege gegen Kälte", color: "#1a6fb5", bg: "#f0f6ff" },
  };
  return { season, ...infos[season] };
}

const ALL_PRODUCTS = [
  // PARFUM - Ganzjährig
  { id: 1, name: "Chanel N°5 Eau de Parfum", category: "Parfum", price: 129.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop", description: "Das ikonische Chanel Parfum, 100ml", search: "chanel no 5 eau de parfum 100ml", hot: true },
  { id: 2, name: "Chanel Coco Mademoiselle", category: "Parfum", price: 119.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Elegant & modern, 100ml", search: "chanel coco mademoiselle parfum", hot: true },
  { id: 3, name: "Dior Miss Dior Parfum", category: "Parfum", price: 109.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", description: "Romantisch & blumig, 100ml", search: "dior miss dior eau de parfum", hot: false },

  // THE ORDINARY - Ganzjährig
  { id: 4, name: "The Ordinary Niacinamide 10%", category: "The Ordinary", price: 9.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop", description: "Hochdosiertes Serum für Poren, 30ml", search: "the ordinary niacinamide 10", hot: true },
  { id: 5, name: "The Ordinary Hyaluronic Acid", category: "The Ordinary", price: 10.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Tiefe Hydration Serum, 30ml", search: "the ordinary hyaluronic acid 2", hot: false },
  { id: 6, name: "The Ordinary Retinol 0.5%", category: "The Ordinary", price: 8.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop", description: "Anti-Aging Serum, 30ml", search: "the ordinary retinol 0.5", hot: false },

  // CAUDALIE - Ganzjährig
  { id: 7, name: "Caudalie Beauty Elixir", category: "Caudalie", price: 49.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop", description: "Luxus Gesichtsspray, 100ml", search: "caudalie beauty elixir", hot: true },
  { id: 8, name: "Caudalie Vinoperfect Serum", category: "Caudalie", price: 59.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1583209814683-c81379428101?w=400&h=400&fit=crop", description: "Gegen Pigmentflecken, 30ml", search: "caudalie vinoperfect serum", hot: false },

  // SEPHORA - Ganzjährig
  { id: 9, name: "Sephora Lippenstift Set", category: "Sephora", price: 29.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1586495777744-4e6232a7eb79?w=400&h=400&fit=crop", description: "12 Farben Set — Matt & Gloss", search: "sephora lippenstift set matt", hot: true },
  { id: 10, name: "Sephora Parfum Favorites Set", category: "Sephora", price: 69.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "8 Mini Parfums zum Testen", search: "sephora parfum mini set favorites", hot: true },
  { id: 11, name: "Sephora Highlighter Palette", category: "Sephora", price: 24.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop", description: "6 Highlighter für strahlenden Look", search: "sephora highlighter palette glow", hot: false },

  // PATAGONIA - Ganzjährig
  { id: 12, name: "Patagonia Nano Puff Jacke", category: "Patagonia", price: 249.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop", description: "Ultraleichte Daunenjacke, nachhaltig", search: "patagonia nano puff jacket", hot: true },
  { id: 13, name: "Patagonia Fleece Jacke", category: "Patagonia", price: 179.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", description: "Klassische Synchilla Fleecejacke", search: "patagonia fleece jacket synchilla", hot: true },
  { id: 14, name: "Patagonia Better Sweater", category: "Patagonia", price: 149.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=400&fit=crop", description: "Nachhaltiger Fleece-Pullover", search: "patagonia better sweater fleece", hot: false },

  // KAWAII - Ganzjährig
  { id: 15, name: "Kawaii Oversized Hoodie Pastel", category: "Kawaii", price: 49.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop", description: "Süßer Hoodie in Pastellfarben", search: "kawaii oversized hoodie pastel", hot: true },
  { id: 16, name: "Kawaii Mini Skirt Set", category: "Kawaii", price: 39.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop", description: "Japanischer Stil Mini Rock Set", search: "kawaii mini skirt japanese style", hot: true },
  { id: 17, name: "Kawaii Cardigan Pastel", category: "Kawaii", price: 59.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop", description: "Flauschiger Cardigan japanischer Stil", search: "kawaii cardigan pastel fluffy", hot: false },

  // TRESORE - Ganzjährig
  { id: 18, name: "Wächter Tresor DIN 24 Stufe A", category: "Sicherheit", price: 189.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "Zertifizierter Tresor DIN 24 Stufe A, Fingerabdruck", search: "wächter tresor DIN 24 stufe A fingerabdruck", hot: true },
  { id: 19, name: "Fingerabdruck Tresor Premium", category: "Sicherheit", price: 149.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "Biometrischer Tresor für Zuhause, 30L", search: "fingerabdruck tresor biometrisch premium", hot: true },
  { id: 20, name: "Wandtresor mit Zahlenschloss", category: "Sicherheit", price: 129.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "Einbautresor hinter Bild, feuerfest", search: "wandtresor zahlenschloss feuerfest einbau", hot: false },

  // KAMERAS - Ganzjährig
  { id: 21, name: "Reolink 4K Überwachungskamera Set", category: "Sicherheit", price: 299.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop", description: "4x 4K Außenkameras mit Nachtsicht", search: "reolink 4k überwachungskamera set aussen", hot: true },
  { id: 22, name: "Ring Video Doorbell Pro", category: "Sicherheit", price: 199.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "HD Türklingel mit Kamera & Alexa", search: "ring video doorbell pro alexa", hot: true },
  { id: 23, name: "Arlo Pro 4 Außenkamera", category: "Sicherheit", price: 179.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop", description: "2K Kamera, kabellos, Farbige Nachtsicht", search: "arlo pro 4 aussenkamera kabellos", hot: false },
  { id: 24, name: "TP-Link Tapo Innenkamera", category: "Sicherheit", price: 39.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop", description: "1080p Innenkamera mit Bewegungsalarm", search: "tp-link tapo innenkamera bewegungsmelder", hot: false },

  // SMART HOME - Ganzjährig
  { id: 25, name: "Amazon Echo (4. Gen) + Alexa", category: "Smart Home", price: 99.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=400&fit=crop", description: "Smarter Lautsprecher mit Alexa", search: "amazon echo 4 generation alexa", hot: true },
  { id: 26, name: "Philips Hue Starter Set", category: "Smart Home", price: 129.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop", description: "3 smarte Glühbirnen + Bridge", search: "philips hue starter set bridge", hot: true },
  { id: 27, name: "TP-Link Smarte Steckdose 4er Set", category: "Smart Home", price: 49.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "4x smarte Steckdosen mit App & Alexa", search: "tp-link smarte steckdose set alexa", hot: false },
  { id: 28, name: "Bosch Smart Home Bewegungsmelder", category: "Smart Home", price: 79.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "Smarter Bewegungsmelder fürs Zuhause", search: "bosch smart home bewegungsmelder", hot: false },
  { id: 29, name: "Google Nest Thermostat", category: "Smart Home", price: 129.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop", description: "Smarte Heizungssteuerung, spart Energie", search: "google nest thermostat heizung", hot: true },
  { id: 30, name: "Yale Smart Lock Türschloss", category: "Smart Home", price: 199.99, seasons: ["alle"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", description: "Smartes Türschloss mit App & Fingerabdruck", search: "yale smart lock türschloss fingerabdruck", hot: true },

  // SONNENPFLEGE - Sommer
  { id: 31, name: "La Roche-Posay Anthelios SPF 50+", category: "Sonnenpflege", price: 22.99, seasons: ["sommer", "fruehling"], img: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=400&h=400&fit=crop", description: "Dermatologisch getestet, 50ml", search: "la roche posay anthelios spf 50", hot: true },

  // GESCHENKE - Weihnachten
  { id: 32, name: "Chanel N°5 Geschenkset", category: "Geschenke", price: 159.99, seasons: ["weihnachten", "valentinstag", "muttertag"], img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop", description: "Luxus Geschenkbox mit Parfum & Lotion", search: "chanel no 5 geschenkset", hot: true },
  { id: 33, name: "Smart Home Starter Geschenkset", category: "Geschenke", price: 149.99, seasons: ["weihnachten"], img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop", description: "Echo + Hue Birne + smarte Steckdose", search: "smart home geschenkset starter alexa", hot: true },
];

const CATEGORIES = ["Alle", "Sicherheit", "Smart Home", "Parfum", "Sephora", "Patagonia", "Kawaii", "The Ordinary", "Caudalie", "Sonnenpflege", "Geschenke"];

const catMeta = {
  "Sicherheit":   { color: "#c0392b", bg: "#fff5f5" },
  "Smart Home":   { color: "#1a6fb5", bg: "#f0f6ff" },
  "Parfum":       { color: "#c0397a", bg: "#fff0f7" },
  "Sephora":      { color: "#e74c3c", bg: "#fff5f5" },
  "Patagonia":    { color: "#217a45", bg: "#f0fff5" },
  "Kawaii":       { color: "#9b59b6", bg: "#f9f5ff" },
  "The Ordinary": { color: "#1a1a1a", bg: "#f5f5f5" },
  "Caudalie":     { color: "#7a5c3a", bg: "#fdf6ee" },
  "Sonnenpflege": { color: "#d4880a", bg: "#fff8ec" },
  "Geschenke":    { color: "#c0392b", bg: "#fff5f5" },
};

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
    <div style={{ minHeight: "100vh", background: "#f7f5f2", fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif", color: "#1a1a1a" }}>

      <div style={{ background: "#1a1a1a", color: "#ccc", fontSize: 12, textAlign: "center", padding: "8px 16px", letterSpacing: "0.06em" }}>
        🚚 Versand ab €29 kostenlos · Chanel · Sephora · Patagonia · Kawaii · Sicherheit · Smart Home · Partner: premiumtrend-21
      </div>

      <header style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "0 32px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #e07b39, #c0397a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#fff", fontWeight: 800 }}>T</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.02em" }}>TrendBot</div>
              <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase" }}>Premium Affiliate Shop</div>
            </div>
          </div>
          <div style={{ position: "relative", width: 280 }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#aaa" }}>🔍</span>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Tresor, Kamera, Chanel, Kawaii..." style={{ width: "100%", padding: "10px 14px 10px 38px", background: "#f7f5f2", border: "1.5px solid #e8e4df", borderRadius: 10, color: "#1a1a1a", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = "#e07b39"} onBlur={e => e.target.style.borderColor = "#e8e4df"} />
          </div>
          <div style={{ background: "#FF9900", color: "#000", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>amazon partner</div>
        </div>
      </header>

      {/* SAISON BANNER */}
      <div style={{ background: seasonInfo.bg, borderBottom: `2px solid ${seasonInfo.color}30`, padding: "20px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: seasonInfo.color, marginBottom: 6 }}>{seasonInfo.label}</div>
          <div style={{ fontSize: 14, color: "#666" }}>{seasonInfo.desc} · Automatisch aktualisiert</div>
        </div>
      </div>

      {/* MARKEN */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "12px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {["Chanel", "Dior", "Sephora", "Patagonia", "Kawaii", "The Ordinary", "Caudalie", "Wächter", "Ring", "Philips Hue", "Bosch", "Yale"].map(brand => (
            <div key={brand} style={{ padding: "4px 12px", border: "1px solid #e8e4df", borderRadius: 8, fontSize: 11, fontWeight: 600, color: "#444", background: "#fafafa" }}>{brand}</div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "12px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            const meta = catMeta[cat];
            return (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: "7px 16px", borderRadius: 20, border: active ? `1.5px solid ${meta?.color || "#1a1a1a"}` : "1.5px solid #e8e4df", background: active ? (meta?.bg || "#f7f5f2") : "#fff", color: active ? (meta?.color || "#1a1a1a") : "#555", fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: active ? 700 : 400, whiteSpace: "nowrap" }}>{cat}</button>
            );
          })}
        </div>
      </div>

      <main style={{ padding: "28px 32px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 13, color: "#999", marginBottom: 20 }}>
          {filtered.length} Produkte · {seasonInfo.label} · Alle Preise inkl. MwSt.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 18 }}>
          {filtered.map((product) => {
            const hovered = hoveredId === product.id;
            const meta = catMeta[product.category] || { color: "#e07b39", bg: "#fff8f4" };
            return (
              <div key={product.id} onMouseEnter={() => setHoveredId(product.id)} onMouseLeave={() => setHoveredId(null)} style={{ background: "#fff", border: `1.5px solid ${hovered ? meta.color : "#e8e4df"}`, borderRadius: 14, overflow: "hidden", transition: "all 0.2s ease", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 200, overflow: "hidden", position: "relative", background: meta.bg }}>
                  {!imgErrors[product.id] ? (
                    <img src={product.img} alt={product.name} onError={() => setImgErrors(prev => ({ ...prev, [product.id]: true }))} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>🛍️</div>
                  )}
                  {product.hot && <span style={{ position: "absolute", top: 10, right: 10, background: "#e53935", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>🔥 TREND</span>}
                  <span style={{ position: "absolute", bottom: 8, left: 10, fontSize: 10, color: meta.color, fontWeight: 700, background: "rgba(255,255,255,0.9)", padding: "2px 7px", borderRadius: 4, textTransform: "uppercase" }}>{product.category}</span>
                </div>
                <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 5, lineHeight: 1.3 }}>{product.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: 14, flex: 1, lineHeight: 1.5 }}>{product.description}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800 }}>€{product.price.toFixed(2)}</div>
                      <div style={{ fontSize: 10, color: "#aaa" }}>inkl. MwSt.</div>
                    </div>
                    <a href={makeAmazonLink(product.search)} target="_blank" rel="noopener noreferrer" style={{ padding: "9px 14px", background: hovered ? meta.color : "#FF9900", color: hovered ? "#fff" : "#000", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none", transition: "all 0.2s" }}>Bei Amazon →</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer style={{ background: "#1a1a1a", color: "#777", padding: "32px", textAlign: "center", fontSize: 12, lineHeight: 2 }}>
        <div style={{ color: "#fff", fontWeight: 700, marginBottom: 4, fontSize: 14 }}>TrendBot · premiumtrend-21</div>
        <div>Als Amazon-Partner verdiene ich an qualifizierten Käufen. Preise können variieren.</div>
        <div style={{ marginTop: 6, color: "#555", fontSize: 11 }}>© 2025 TrendBot · Alle Markenrechte bei den jeweiligen Eigentümern</div>
      </footer>
    </div>
  );
}
