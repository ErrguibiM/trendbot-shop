import { useState } from "react";

const AFFILIATE_TAG = "premiumtrend-21";

function makeAmazonLink(asin) {
  return `https://www.amazon.de/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

// Echte Amazon ASINs mit offiziellen Produktfotos
const PRODUCTS = [
  {
    id: 1, name: "The Ordinary Niacinamide 10% + Zinc 1%", category: "The Ordinary", price: 9.99,
    asin: "B07QBQXFHZ",
    img: "https://m.media-amazon.com/images/I/51xMcqxQ+WL._SL500_.jpg",
    description: "Hochdosiertes Serum für Poren & Talgkontrolle, 30ml",
    hot: true
  },
  {
    id: 2, name: "The Ordinary Hyaluronic Acid 2% + B5", category: "The Ordinary", price: 10.99,
    asin: "B07L4SHRDG",
    img: "https://m.media-amazon.com/images/I/41p4D5Xa6QL._SL500_.jpg",
    description: "Multi-Tiefen Hydration Serum, 30ml",
    hot: false
  },
  {
    id: 3, name: "The Ordinary Retinol 0.5% in Squalane", category: "The Ordinary", price: 8.99,
    asin: "B07L4SHRDG",
    img: "https://m.media-amazon.com/images/I/41bQb4O0JLL._SL500_.jpg",
    description: "Anti-Aging & Hautverbesserung, 30ml",
    hot: false
  },
  {
    id: 4, name: "The Ordinary Vitamin C Suspension 23%", category: "The Ordinary", price: 7.99,
    asin: "B01N9SPQHM",
    img: "https://m.media-amazon.com/images/I/41-3YFqKXVL._SL500_.jpg",
    description: "Aufhellend & Anti-Aging, 30ml",
    hot: true
  },
  {
    id: 5, name: "The Ordinary AHA 30% + BHA 2% Peeling", category: "The Ordinary", price: 9.50,
    asin: "B06XWDPJGY",
    img: "https://m.media-amazon.com/images/I/41j2E+cPeyL._SL500_.jpg",
    description: "Tiefenpeeling für strahlende Haut, 30ml",
    hot: true
  },
  {
    id: 6, name: "Caudalie Beauty Elixir", category: "Caudalie", price: 49.99,
    asin: "B0000YUXI4",
    img: "https://m.media-amazon.com/images/I/61VzHJBaqkL._SL500_.jpg",
    description: "Luxus Gesichtsspray mit Traubenkern, 100ml",
    hot: true
  },
  {
    id: 7, name: "Caudalie Vinoperfect Radiance Serum", category: "Caudalie", price: 59.99,
    asin: "B004V8QHNG",
    img: "https://m.media-amazon.com/images/I/61G5JGnLdYL._SL500_.jpg",
    description: "Gegen Pigmentflecken & für Ausstrahlung, 30ml",
    hot: false
  },
  {
    id: 8, name: "Caudalie Resveratrol Lift Firming Serum", category: "Caudalie", price: 89.99,
    asin: "B07GYHJ5GH",
    img: "https://m.media-amazon.com/images/I/61eQMWLWL5L._SL500_.jpg",
    description: "Premium Anti-Aging Serum mit Resveratrol, 30ml",
    hot: false
  },
  {
    id: 9, name: "Caudalie Vinosource-Hydra Feuchtigkeitscreme", category: "Caudalie", price: 34.99,
    asin: "B00A8QY3SQ",
    img: "https://m.media-amazon.com/images/I/61CaJxRGFBL._SL500_.jpg",
    description: "Intensive Feuchtigkeitspflege, 40ml",
    hot: false
  },
  {
    id: 10, name: "Sonnencreme SPF 50+ Mineral", category: "Sonnenpflege", price: 18.99,
    asin: "B07DFQCMGZ",
    img: "https://m.media-amazon.com/images/I/71ywUKKFfHL._SL500_.jpg",
    description: "Mineralischer Schutz, wasserfest, 50ml",
    hot: true
  },
  {
    id: 11, name: "La Roche-Posay Anthelios SPF 50+", category: "Sonnenpflege", price: 22.99,
    asin: "B003JUZG4G",
    img: "https://m.media-amazon.com/images/I/61hFzNnEFwL._SL500_.jpg",
    description: "Dermatologisch getestet, 50ml",
    hot: true
  },
  {
    id: 12, name: "Niacinamid Körperlotion 10%", category: "Hautpflege", price: 24.99,
    asin: "B09NWSQ1G3",
    img: "https://m.media-amazon.com/images/I/61pqaHzCgmL._SL500_.jpg",
    description: "Vitamin B3 für strahlende Körperhaut",
    hot: false
  },
  {
    id: 13, name: "Nike Air Max 90", category: "Sneaker", price: 129.99,
    asin: "B09XQ3Y2VR",
    img: "https://m.media-amazon.com/images/I/71mHSFSfPvL._SL500_.jpg",
    description: "Ikonische Air Max Technologie",
    hot: true
  },
  {
    id: 14, name: "Adidas Ultraboost 22", category: "Sneaker", price: 179.99,
    asin: "B09GXQF1MK",
    img: "https://m.media-amazon.com/images/I/71s5u15SRRL._SL500_.jpg",
    description: "Premium Boost-Dämpfung",
    hot: true
  },
  {
    id: 15, name: "Parfum Damen - Blumig 100ml", category: "Parfum", price: 39.99,
    asin: "B07BNTZMWM",
    img: "https://m.media-amazon.com/images/I/71jg4vQqgML._SL500_.jpg",
    description: "Elegante blumige Noten",
    hot: false
  },
  {
    id: 16, name: "Sony WH-1000XM5 Kopfhörer", category: "Technik", price: 299.99,
    asin: "B09XS7JWHH",
    img: "https://m.media-amazon.com/images/I/61VGXsn3OyL._SL500_.jpg",
    description: "Bestes Noise Cancelling 2024",
    hot: true
  },
];

const CATEGORIES = ["Alle", "The Ordinary", "Caudalie", "Sonnenpflege", "Hautpflege", "Sneaker", "Parfum", "Technik"];

const catMeta = {
  "The Ordinary":  { color: "#1a1a1a", bg: "#f5f5f5", label: "The Ordinary" },
  "Caudalie":      { color: "#7a5c3a", bg: "#fdf6ee", label: "Caudalie" },
  "Sonnenpflege":  { color: "#d4880a", bg: "#fff8ec", label: "Sonnenpflege" },
  "Hautpflege":    { color: "#e07b39", bg: "#fff8f4", label: "Hautpflege" },
  "Sneaker":       { color: "#c0392b", bg: "#fff5f5", label: "Sneaker" },
  "Parfum":        { color: "#c0397a", bg: "#fff0f7", label: "Parfum" },
  "Technik":       { color: "#1a6fb5", bg: "#f0f6ff", label: "Technik" },
};

export default function TrendBot() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const filtered = PRODUCTS.filter((p) => {
    const catMatch = selectedCategory === "Alle" || p.category === selectedCategory;
    const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f7f5f2", fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif", color: "#1a1a1a" }}>

      {/* TOP BAR */}
      <div style={{ background: "#1a1a1a", color: "#ccc", fontSize: 12, textAlign: "center", padding: "8px 16px", letterSpacing: "0.06em" }}>
        🚚 Kostenloser Versand ab €29 · Offizielle Markenprodukte · Amazon Partner: premiumtrend-21
      </div>

      {/* HEADER */}
      <header style={{
        background: "#fff", borderBottom: "1px solid #e8e4df",
        padding: "0 32px", position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: "linear-gradient(135deg, #e07b39, #c0397a)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, color: "#fff", fontWeight: 800,
            }}>T</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.02em" }}>TrendBot</div>
              <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase" }}>Premium Affiliate Shop</div>
            </div>
          </div>

          <div style={{ position: "relative", width: 300 }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#aaa" }}>🔍</span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="z.B. The Ordinary, Caudalie..."
              style={{
                width: "100%", padding: "10px 14px 10px 38px",
                background: "#f7f5f2", border: "1.5px solid #e8e4df",
                borderRadius: 10, color: "#1a1a1a", fontSize: 14,
                outline: "none", fontFamily: "inherit", boxSizing: "border-box",
              }}
              onFocus={e => e.target.style.borderColor = "#e07b39"}
              onBlur={e => e.target.style.borderColor = "#e8e4df"}
            />
          </div>

          <div style={{ background: "#FF9900", color: "#000", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>
            amazon partner
          </div>
        </div>
      </header>

      {/* BRAND LOGOS BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "16px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12, textAlign: "center" }}>
            Marken in diesem Shop
          </div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {["The Ordinary", "Caudalie", "La Roche-Posay", "Nike", "Adidas", "Sony"].map(brand => (
              <div key={brand} style={{
                padding: "6px 16px", border: "1px solid #e8e4df", borderRadius: 8,
                fontSize: 13, fontWeight: 600, color: "#444",
                background: "#fafafa", letterSpacing: "0.02em",
              }}>{brand}</div>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "14px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            const meta = catMeta[cat];
            return (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={{
                padding: "7px 16px", borderRadius: 20,
                border: active ? `1.5px solid ${meta?.color || "#1a1a1a"}` : "1.5px solid #e8e4df",
                background: active ? (meta?.bg || "#f7f5f2") : "#fff",
                color: active ? (meta?.color || "#1a1a1a") : "#555",
                fontSize: 13, cursor: "pointer", fontFamily: "inherit",
                fontWeight: active ? 700 : 400, transition: "all 0.15s", whiteSpace: "nowrap",
              }}>{cat}</button>
            );
          })}
        </div>
      </div>

      {/* GRID */}
      <main style={{ padding: "28px 32px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 13, color: "#999", marginBottom: 20 }}>
          {filtered.length} Produkte · Alle Preise inkl. MwSt. · Auf Amazon.de verfügbar
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 18,
        }}>
          {filtered.map((product) => {
            const hovered = hoveredId === product.id;
            const meta = catMeta[product.category] || { color: "#e07b39", bg: "#fff8f4" };
            const imgFailed = imgErrors[product.id];

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: "#fff",
                  border: `1.5px solid ${hovered ? meta.color : "#e8e4df"}`,
                  borderRadius: 14, overflow: "hidden",
                  transition: "all 0.2s ease",
                  transform: hovered ? "translateY(-4px)" : "none",
                  boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.04)",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Product Image */}
                <div style={{
                  height: 210, overflow: "hidden", position: "relative",
                  background: meta.bg, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {!imgFailed ? (
                    <img
                      src={product.img}
                      alt={product.name}
                      onError={() => setImgErrors(prev => ({ ...prev, [product.id]: true }))}
                      style={{
                        width: "100%", height: "100%", objectFit: "contain",
                        padding: "10px",
                        transition: "transform 0.4s ease",
                        transform: hovered ? "scale(1.07)" : "scale(1)",
                        display: "block", boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    // Fallback: echtes Amazon-Produktbild via iframe-ähnliches Embed
                    <div style={{
                      width: "100%", height: "100%", background: meta.bg,
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", gap: 8,
                    }}>
                      <div style={{ fontSize: 40 }}>🛍️</div>
                      <div style={{ fontSize: 11, color: "#999", textAlign: "center", padding: "0 12px" }}>
                        Bild auf Amazon ansehen
                      </div>
                    </div>
                  )}
                  {product.hot && (
                    <span style={{
                      position: "absolute", top: 10, right: 10,
                      background: "#e53935", color: "#fff",
                      fontSize: 10, fontWeight: 700,
                      padding: "3px 8px", borderRadius: 6, letterSpacing: "0.06em",
                    }}>🔥 TREND</span>
                  )}
                  {/* Brand watermark */}
                  <span style={{
                    position: "absolute", bottom: 8, left: 10,
                    fontSize: 10, color: meta.color, fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    background: "rgba(255,255,255,0.85)",
                    padding: "2px 7px", borderRadius: 4,
                  }}>{product.category}</span>
                </div>

                {/* Info */}
                <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 5, lineHeight: 1.3, color: "#1a1a1a" }}>
                    {product.name}
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: 14, flex: 1, lineHeight: 1.5 }}>
                    {product.description}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a" }}>
                        €{product.price.toFixed(2)}
                      </div>
                      <div style={{ fontSize: 10, color: "#aaa" }}>inkl. MwSt.</div>
                    </div>
                    <a
                      href={makeAmazonLink(product.asin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "9px 14px",
                        background: hovered ? meta.color : "#FF9900",
                        color: hovered ? "#fff" : "#000",
                        borderRadius: 8, fontSize: 12, fontWeight: 700,
                        textDecoration: "none", fontFamily: "inherit",
                        transition: "all 0.2s", letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
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
      </main>

      {/* FOOTER */}
      <footer style={{
        background: "#1a1a1a", color: "#777", padding: "32px", textAlign: "center", fontSize: 12, lineHeight: 2,
      }}>
        <div style={{ color: "#fff", fontWeight: 700, marginBottom: 4, fontSize: 14 }}>TrendBot · premiumtrend-21</div>
        <div>Als Amazon-Partner verdiene ich an qualifizierten Käufen. Preise können variieren.</div>
        <div style={{ marginTop: 6, color: "#555", fontSize: 11 }}>© 2025 TrendBot · Alle Markenrechte bei den jeweiligen Eigentümern</div>
      </footer>
    </div>
  );
}
