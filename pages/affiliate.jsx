export default function Affiliate() {
  return (
    <div style={{ minHeight: "100vh", background: "#f4f2ef", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ background: "#111", color: "#ccc", fontSize: 12, textAlign: "center", padding: "9px 16px" }}>
        ✨ TrendBot · Premium Affiliate Shop · Amazon Partner: premiumtrend-21
      </div>
      <header style={{ background: "#fff", borderBottom: "1px solid #e5e2dd", padding: "0 40px", boxShadow: "0 1px 20px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", height: 68, gap: 16 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #ff6b35, #c0397a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>T</span>
            </div>
            <span style={{ fontSize: 20, fontWeight: 900, color: "#111" }}>TrendBot</span>
          </a>
          <span style={{ color: "#ccc" }}>→</span>
          <span style={{ fontSize: 14, color: "#666" }}>Affiliate-Hinweis</span>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px 80px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, color: "#111" }}>Affiliate-Hinweis & Werbekennzeichnung</h1>
        <p style={{ color: "#999", marginBottom: 40, fontSize: 14 }}>Transparenz ist uns wichtig</p>

        <div style={{ padding: 28, background: "#fff3cd", borderRadius: 12, border: "1px solid #ffc107", marginBottom: 32 }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>⚠️ Wichtiger Hinweis</div>
          <p style={{ fontSize: 15, color: "#333", lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
            Diese Website enthält Affiliate-Links und ist als Werbung gekennzeichnet. 
            Alle Produktempfehlungen sind mit einem "#Werbung" Hinweis versehen.
          </p>
        </div>

        {[
          {
            icon: "🛒",
            title: "Amazon Partnerprogramm",
            text: `TrendBot nimmt am Amazon EU-Partnerprogramm teil (Partner-ID: premiumtrend-21). Wenn Sie über einen Link auf dieser Website ein Produkt bei Amazon kaufen, erhalten wir eine Provision zwischen 1% und 10% des Kaufpreises. Für Sie entstehen dabei KEINE zusätzlichen Kosten.`
          },
          {
            icon: "💰",
            title: "Wie verdienen wir Geld?",
            text: `Wir verdienen nur dann eine Provision, wenn Sie tatsächlich ein Produkt kaufen. Das Klicken auf Links kostet Sie nichts. Die Provision beeinflusst nicht unsere Produktauswahl — wir empfehlen nur Produkte, die wir für qualitativ hochwertig halten.`
          },
          {
            icon: "✅",
            title: "Unsere Versprechen",
            text: `• Alle Affiliate-Links sind klar gekennzeichnet\n• Wir empfehlen nur Produkte die wir kennen\n• Preise können variieren — immer auf Amazon prüfen\n• Kein Einfluss von Herstellern auf unsere Empfehlungen`
          },
          {
            icon: "📋",
            title: "Werbekennzeichnung",
            text: `Gemäß §5a UWG und den Richtlinien der deutschen Werbebehörden kennzeichnen wir alle kommerziellen Inhalte deutlich als Werbung. Diese gesamte Website ist ein kommerzielles Angebot im Rahmen des Amazon Partnerprogramms.`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 24, padding: 24, background: "#fff", borderRadius: 12, border: "1px solid #e5e2dd" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#111", display: "flex", alignItems: "center", gap: 10 }}>
              <span>{section.icon}</span> {section.title}
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, margin: 0, whiteSpace: "pre-line" }}>{section.text}</p>
          </div>
        ))}

        <a href="/" style={{ display: "inline-block", marginTop: 16, padding: "12px 24px", background: "#c0397a", color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
          ← Zurück zum Shop
        </a>
      </main>

      <footer style={{ background: "#111", color: "#666", padding: "32px", textAlign: "center", fontSize: 12, lineHeight: 2 }}>
        <div style={{ color: "#fff", fontWeight: 800, marginBottom: 4 }}>TrendBot · premiumtrend-21</div>
        <div>Als Amazon-Partner verdiene ich an qualifizierten Käufen.</div>
        <div style={{ marginTop: 8 }}>
          <a href="/datenschutz" style={{ color: "#888", marginRight: 16, textDecoration: "none" }}>Datenschutz</a>
          <a href="/affiliate" style={{ color: "#888", textDecoration: "none" }}>Affiliate-Hinweis</a>
        </div>
      </footer>
    </div>
  );
}
