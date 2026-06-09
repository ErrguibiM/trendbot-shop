import { useState } from "react";

const AFFILIATE_TAG = "premiumtrend-21";

function makeAmazonLink(asin) {
  return `https://www.amazon.de/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

const PRODUCTS = [
  {
    id: 1,
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "The Ordinary",
    asin: "B07QBQXFHZ",
    img: "https://m.media-amazon.com/images/I/51xMcqxQ+WL._SL500_.jpg",
    description: "Serum für Poren, Hautbild und Talgkontrolle.",
    hot: true,
  },
  {
    id: 2,
    name: "The Ordinary Hyaluronic Acid 2% + B5",
    category: "The Ordinary",
    asin: "B07L4SHRDG",
    img: "https://m.media-amazon.com/images/I/41p4D5Xa6QL._SL500_.jpg",
    description: "Feuchtigkeitspflege-Serum für die tägliche Routine.",
    hot: false,
  },
  {
    id: 3,
    name: "The Ordinary AHA 30% + BHA 2% Peeling",
    category: "The Ordinary",
    asin: "B06XWDPJGY",
    img: "https://m.media-amazon.com/images/I/41j2E+cPeyL._SL500_.jpg",
    description: "Peeling-Produkt für eine glatter wirkende Haut.",
    hot: true,
  },
  {
    id: 4,
    name: "Caudalie Beauty Elixir",
    category: "Caudalie",
    asin: "B0000YUXI4",
    img: "https://m.media-amazon.com/images/I/61VzHJBaqkL._SL500_.jpg",
    description: "Gesichtsspray für Frische und Glow.",
    hot: true,
  },
  {
    id: 5,
    name: "Caudalie Vinoperfect Serum",
    category: "Caudalie",
    asin: "B004V8QHNG",
    img: "https://m.media-amazon.com/images/I/61G5JGnLdYL._SL500_.jpg",
    description: "Serum für ein ebenmäßiger wirkendes Hautbild.",
    hot: false,
  },
  {
    id: 6,
    name: "La Roche-Posay Anthelios SPF 50+",
    category: "Sonnenpflege",
    asin: "B003JUZG4G",
    img: "https://m.media-amazon.com/images/I/61hFzNnEFwL._SL500_.jpg",
    description: "Sonnenschutz für Gesicht und Alltag.",
    hot: true,
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Kopfhörer",
    category: "Technik",
    asin: "B09XS7JWHH",
    img: "https://m.media-amazon.com/images/I/61VGXsn3OyL._SL500_.jpg",
    description: "Kabellose Kopfhörer mit Noise Cancelling.",
    hot: true,
  },
];

const CATEGORIES = [
  "Alle",
  "The Ordinary",
  "Caudalie",
  "Sonnenpflege",
  "Technik",
];

const catMeta = {
  "The Ordinary": { color: "#1a1a1a", bg: "#f5f5f5" },
  Caudalie: { color: "#7a5c3a", bg: "#fdf6ee" },
  Sonnenpflege: { color: "#d4880a", bg: "#fff8ec" },
  Technik: { color: "#1a6fb5", bg: "#f0f6ff" },
};

export default function TrendBot() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const filtered = PRODUCTS.filter((p) => {
    const catMatch =
      selectedCategory === "Alle" || p.category === selectedCategory;
    const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f5f2",
        fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          background: "#1a1a1a",
          color: "#ddd",
          fontSize: 12,
          textAlign: "center",
          padding: "8px 16px",
          letterSpacing: "0.04em",
        }}
      >
        Anzeige · Affiliate-Links · Weiterleitung zu Amazon.de
      </div>

      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8e4df",
          padding: "0 32px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #e07b39, #c0397a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                color: "#fff",
                fontWeight: 800,
              }}
            >
              T
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>TrendBot</div>
              <div
                style={{
                  fontSize: 10,
                  color: "#999",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Premium Affiliate Shop
              </div>
            </div>
          </div>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Produkt suchen..."
            style={{
              maxWidth: 320,
              width: "100%",
              padding: "10px 14px",
              background: "#f7f5f2",
              border: "1.5px solid #e8e4df",
              borderRadius: 10,
              color: "#1a1a1a",
              fontSize: 14,
              outline: "none",
            }}
          />

          <div
            style={{
              background: "#FF9900",
              color: "#000",
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Amazon Partner
          </div>
        </div>
      </header>

      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8e4df",
          padding: "14px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            const meta = catMeta[cat];

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "7px 16px",
                  borderRadius: 20,
                  border: active
                    ? `1.5px solid ${meta?.color || "#1a1a1a"}`
                    : "1.5px solid #e8e4df",
                  background: active ? meta?.bg || "#f7f5f2" : "#fff",
                  color: active ? meta?.color || "#1a1a1a" : "#555",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: active ? 700 : 400,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <main style={{ padding: "28px 32px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 13, color: "#999", marginBottom: 20 }}>
          {filtered.length} Produkte · Preise und Verfügbarkeit bitte direkt bei
          Amazon prüfen
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {filtered.map((product) => {
            const hovered = hoveredId === product.id;
            const meta =
              catMeta[product.category] || { color: "#e07b39", bg: "#fff8f4" };
            const imgFailed = imgErrors[product.id];

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: "#fff",
                  border: `1.5px solid ${hovered ? meta.color : "#e8e4df"}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  transform: hovered ? "translateY(-4px)" : "none",
                  boxShadow: hovered
                    ? "0 16px 40px rgba(0,0,0,0.12)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: 210,
                    overflow: "hidden",
                    position: "relative",
                    background: meta.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {!imgFailed ? (
                    <img
                      src={product.img}
                      alt={product.name}
                      onError={() =>
                        setImgErrors((prev) => ({
                          ...prev,
                          [product.id]: true,
                        }))
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "10px",
                        transition: "transform 0.4s ease",
                        transform: hovered ? "scale(1.07)" : "scale(1)",
                        boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      <div style={{ fontSize: 40 }}>🛍️</div>
                      <div style={{ fontSize: 11, color: "#999" }}>
                        Bild auf Amazon ansehen
                      </div>
                    </div>
                  )}

                  {product.hot && (
                    <span
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        background: "#e53935",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: 6,
                      }}
                    >
                      🔥 TREND
                    </span>
                  )}

                  <span
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 10,
                      fontSize: 10,
                      color: meta.color,
                      fontWeight: 700,
                      background: "rgba(255,255,255,0.85)",
                      padding: "2px 7px",
                      borderRadius: 4,
                    }}
                  >
                    {product.category}
                  </span>
                </div>

                <div
                  style={{
                    padding: "14px 16px 16px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 5,
                      lineHeight: 1.3,
                    }}
                  >
                    {product.name}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "#888",
                      marginBottom: 14,
                      flex: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    {product.description}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: "#1a1a1a",
                        }}
                      >
                        Preis bei Amazon prüfen
                      </div>
                      <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>
                        Preise können sich jederzeit ändern
                      </div>
                    </div>

                    <a
                      href={makeAmazonLink(product.asin)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        padding: "9px 14px",
                        background: hovered ? meta.color : "#FF9900",
                        color: hovered ? "#fff" : "#000",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: "none",
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

      <footer
        style={{
          background: "#1a1a1a",
          color: "#aaa",
          padding: "32px",
          textAlign: "center",
          fontSize: 12,
          lineHeight: 1.8,
        }}
      >
        <div style={{ color: "#fff", fontWeight: 700, marginBottom: 8, fontSize: 14 }}>
          TrendBot · premiumtrend-21
        </div>

        <div>
          Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Diese
          Website enthält Affiliate-Links. Wenn Sie über einen solchen Link
          einkaufen, kann ich eine Provision erhalten. Für Sie entstehen keine
          zusätzlichen Kosten.
        </div>

        <div style={{ marginTop: 8 }}>
          Preise, Lieferzeiten und Verfügbarkeit können sich jederzeit ändern.
          Maßgeblich sind die Angaben auf der jeweiligen Amazon-Produktseite.
        </div>

        <div style={{ marginTop: 8 }}>
          Diese Website verwendet kein eigenes Tracking und keine eigenen
          Marketing-Cookies. Beim Aufruf können durch den Hosting-Anbieter
          technische Zugriffsdaten verarbeitet werden.
        </div>

        <div style={{ marginTop: 8 }}>
          Rechtliche Hinweise wurden nach aktuellem Stand angepasst. Dies ersetzt
          keine anwaltliche Rechtsberatung.
        </div>

        <div style={{ marginTop: 8, color: "#666", fontSize: 11 }}>
          Impressum wird vor geschäftlicher Veröffentlichung ergänzt.
        </div>

        <div style={{ marginTop: 8, color: "#555", fontSize: 11 }}>
          © 2026 TrendBot · Alle Markenrechte liegen bei den jeweiligen Eigentümern.
        </div>
      </footer>
    </div>
  );
}
