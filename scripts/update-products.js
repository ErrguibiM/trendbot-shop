import { useState } from "react";
import products from "../data/products.json";

const CATEGORIES = ["Alle", ...new Set(products.map((p) => p.category))];

export default function TrendBotShop() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "Alle" || product.category === selectedCategory;

    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f5f2",
        fontFamily: "Arial, sans-serif",
        color: "#111",
      }}
    >
      <div
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "8px",
          fontSize: "13px",
        }}
      >
        Anzeige · Affiliate-Links · Weiterleitung zu Amazon.de
      </div>

      <header
        style={{
          background: "#fff",
          padding: "22px",
          borderBottom: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "32px" }}>TrendBot</h1>
        <p style={{ margin: "6px 0 18px", color: "#777" }}>
          Premium Affiliate Shop · Automatisch aktualisiert
        </p>

        <input
          type="text"
          placeholder="Produkt suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "90%",
            maxWidth: "420px",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />
      </header>

      <nav
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "18px",
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "9px 16px",
              borderRadius: "20px",
              border:
                selectedCategory === category
                  ? "2px solid #111"
                  : "1px solid #ddd",
              background: selectedCategory === category ? "#111" : "#fff",
              color: selectedCategory === category ? "#fff" : "#111",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            {category}
          </button>
        ))}
      </nav>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >
        <p style={{ color: "#777", marginBottom: "20px" }}>
          {filteredProducts.length} Produkte gefunden · Preise und Verfügbarkeit
          bitte direkt bei Amazon prüfen
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                position: "relative",
              }}
            >
              {product.hot && (
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "#e53935",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  🔥 TREND
                </div>
              )}

              <div
                style={{
                  height: "170px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fafafa",
                  borderRadius: "14px",
                  marginBottom: "16px",
                  fontSize: "48px",
                }}
              >
                🛍️
              </div>

              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#777",
                  marginBottom: "8px",
                }}
              >
                {product.category}
              </div>

              <h2
                style={{
                  fontSize: "18px",
                  margin: "0 0 8px",
                  lineHeight: "1.35",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.5",
                  minHeight: "45px",
                }}
              >
                {product.description}
              </p>

              <div
                style={{
                  marginTop: "14px",
                  fontWeight: "800",
                  fontSize: "15px",
                }}
              >
                {product.priceText || "Preis bei Amazon prüfen"}
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "4px",
                }}
              >
                Zuletzt geprüft: {product.lastChecked}
              </div>

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{
                  display: "block",
                  marginTop: "16px",
                  background: "#ff9900",
                  color: "#000",
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "12px",
                  fontWeight: "800",
                  textDecoration: "none",
                }}
              >
                Bei Amazon prüfen →
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{
          background: "#111",
          color: "#aaa",
          textAlign: "center",
          padding: "32px 20px",
          fontSize: "12px",
          lineHeight: "1.8",
        }}
      >
        <strong style={{ color: "#fff" }}>TrendBot · premiumtrend-21</strong>

        <div style={{ marginTop: "10px" }}>
          Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Diese
          Website enthält Affiliate-Links. Für Sie entstehen keine zusätzlichen
          Kosten.
        </div>

        <div style={{ marginTop: "8px" }}>
          Preise, Lieferzeiten und Verfügbarkeit können sich jederzeit ändern.
          Maßgeblich sind die Angaben auf der jeweiligen Amazon-Produktseite.
        </div>

        <div style={{ marginTop: "8px" }}>
          Rechtliche Hinweise wurden nach aktuellem Stand angepasst. Dies ersetzt
          keine anwaltliche Rechtsberatung.
        </div>

        <div style={{ marginTop: "8px", color: "#666" }}>
          Impressum wird vor geschäftlicher Veröffentlichung ergänzt.
        </div>

        <div style={{ marginTop: "8px", color: "#555" }}>
          © 2026 TrendBot
        </div>
      </footer>
    </div>
  );
}
