import { useState } from "react";

const AFFILIATE_TAG = "premiumtrend-21";

function makeAmazonLink(searchQuery) {
  return `https://www.amazon.de/s?k=${encodeURIComponent(searchQuery)}&tag=${AFFILIATE_TAG}`;
}

const PRODUCTS = [
  { id: 1, name: "The Ordinary Niacinamide 10%", category: "The Ordinary", price: 9.99, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop", description: "Hochdosiertes Serum für Poren & Talgkontrolle, 30ml", search: "the ordinary niacinamide 10", hot: true },
  { id: 2, name: "The Ordinary Hyaluronic Acid 2%", category: "The Ordinary", price: 10.99, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Multi-Tiefen Hydration Serum, 30ml", search: "the ordinary hyaluronic acid", hot: false },
  { id: 3, name: "The Ordinary Retinol 0.5%", category: "The Ordinary", price: 8.99, img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop", description: "Anti-Aging & Hautverbesserung, 30ml", search: "the ordinary retinol 0.5", hot: false },
  { id: 4, name: "The Ordinary Vitamin C 23%", category: "The Ordinary", price: 7.99, img: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&h=400&fit=crop", description: "Aufhellend & Anti-Aging, 30ml", search: "the ordinary vitamin c suspension", hot: true },
  { id: 5, name: "The Ordinary AHA 30% + BHA 2%", category: "The Ordinary", price: 9.50, img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop", description: "Tiefenpeeling für strahlende Haut, 30ml", search: "the ordinary aha bha peeling", hot: true },
  { id: 6, name: "Caudalie Beauty Elixir", category: "Caudalie", price: 49.99, img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop", description: "Luxus Gesichtsspray mit Traubenkern, 100ml", search: "caudalie beauty elixir", hot: true },
  { id: 7, name: "Caudalie Vinoperfect Serum", category: "Caudalie", price: 59.99, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Gegen Pigmentflecken & für Ausstrahlung, 30ml", search: "caudalie vinoperfect serum", hot: false },
  { id: 8, name: "Caudalie Resveratrol Lift", category: "Caudalie", price: 89.99, img: "https://images.unsplash.com/photo-1583209814683-c81379428101?w=400&h=400&fit=crop", description: "Premium Anti-Aging Serum, 30ml", search: "caudalie resveratrol lift", hot: false },
  { id: 9, name: "La Roche-Posay Anthelios SPF 50+", category: "Sonnenpflege", price: 22.99, img: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=400&h=400&fit=crop", description: "Dermatologisch getestet, 50ml", search: "la roche posay anthelios spf 50", hot: true },
  { id: 10, name: "Sonnencreme SPF 50+ Mineral", category: "Sonnenpflege", price: 18.99, img: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", description: "Mineralischer Schutz, wasserfest, 50ml", search: "sonnencreme spf 50 mineral", hot: false },
  { id: 11, name: "Nike Air Max 90", category: "Sneaker", price: 129.99, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", description: "Ikonische Air Max Technologie", search: "nike air max 90", hot: true },
  { id: 12, name: "Adidas Ultraboost 22", category: "Sneaker", price: 179.99, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", description: "Premium Boost-Dämpfung", search: "adidas ultraboost 22", hot: true },
  { id: 13, name: "Parfum Damen - Blumig 100ml", category: "Parfum", price: 39.99, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Elegante blumige Noten, 100ml", search: "damen parfum blumig 100ml", hot: false },
  { id: 14, name: "Wireless Kopfhörer Premium", category: "Technik", price: 149.99, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", description: "Noise Cancelling Bluetooth", search: "wireless kopfhörer noise cancelling", hot: false },
  { id: 15, name: "Fitness Hanteln Set", category: "Sport", price: 89.99, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop", description: "Verstellbare Hanteln für Home Gym", search: "verstellbare hanteln set", hot: false },
  { id: 16, name: "Barrel Fit Jeans", category: "Mode", price: 79.99, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop", description: "Trendiger Barrel-Cut 2025", search: "barrel fit jeans damen", hot: true },
];

const CATEGORIES = ["Alle", "The Ordinary", "Caudalie", "Sonnenpflege", "Sneaker", "Parfum", "Technik", "Sport", "Mode"];

const catMeta = {
  "The Ordinary":  { color: "#1a1a1a", bg: "#f5f5f5" },
  "Caudalie":      { color: "#7a5c3a", bg: "#fdf6ee" },
  "Sonnenpflege":  { color: "#d4880a", bg: "#fff8ec" },
  "Sneaker":       { color: "#c0392b", bg: "#fff5f5" },
  "Parfum":        { color: "#c0397a", bg: "#fff0f7" },
  "Technik":       { color: "#1a6fb5", bg: "#f0f6ff" },
  "Sport":         { color: "#217a45", bg: "#f0fff5" },
  "Mode":          { color: "#c06a1a", bg: "#fff7ee" },
};

export default function Home() {
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
      <div style={{ background: "#1a1a1a", color: "#ccc", fontSize: 12, textAlign: "center", padding: "8px 16px", letterSpacing: "0.06em" }}>
        🚚 Kostenloser Versand ab €29 · Offizielle Markenprodukte · Amazon Partner: premiumtrend-21
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
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="z.B. The Ordinary, Caudalie..." style={{ width: "100%", padding: "10px 14px 10px 38px", background: "#f7f5f2", border: "1.5px solid #e8e4df", borderRadius: 10, color: "#1a1a1a", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <div style={{ background: "#FF9900", color: "#000", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>amazon partner</div>
        </div>
      </header>

      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "14px 32px" }}>
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
        <div style={{ fontSize: 13, color: "#999", marginBottom: 20 }}>{filtered.length} Produkte · Alle Preise inkl. MwSt.</div>
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
                </div>
                <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 11, color: meta.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{product.category}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 5, lineHeight: 1.3 }}>{product.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: 14, flex: 1, lineHeight: 1.5 }}>{product.description}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 18, fontWeight: 800 }}>€{product.price.toFixed(2)}</span>
                    <a href={makeAmazonLink(product.search)} target="_blank" rel="noopener noreferrer" style={{ padding: "9px 14px", background: hovered ? meta.color : "#FF9900", color: hovered ? "#fff" : "#000", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none", transition: "all 0.2s" }}>Bei Amazon →</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer style={{ background: "#1a1a1a", color: "#777", padding: "32px", textAlign: "center", fontSize: 12, lineHeight: 2 }}>
        <div style={{ color: "#fff", fontWeight: 700, marginBottom: 4 }}>TrendBot · premiumtrend-21</div>
        <div>Als Amazon-Partner verdiene ich an qualifizierten Käufen. Preise können variieren.</div>
        <div style={{ marginTop: 6, color: "#555", fontSize: 11 }}>© 2025 TrendBot · Alle Rechte vorbehalten</div>
      </footer>
    </div>
  );
}
