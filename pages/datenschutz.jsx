export default function Datenschutz() {
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
          <span style={{ fontSize: 14, color: "#666" }}>Datenschutzerklärung</span>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px 80px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, color: "#111" }}>Datenschutzerklärung</h1>
        <p style={{ color: "#999", marginBottom: 40, fontSize: 14 }}>Stand: Juni 2025</p>

        {[
          {
            title: "1. Allgemeine Hinweise",
            text: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.`
          },
          {
            title: "2. Datenerfassung auf dieser Website",
            text: `Diese Website erfasst keine personenbezogenen Daten. Es werden keine Cookies gesetzt und kein Tracking durchgeführt. Beim Besuch dieser Website werden keine Nutzerdaten gespeichert oder verarbeitet.`
          },
          {
            title: "3. Amazon Partnerprogramm",
            text: `Diese Website nimmt am Amazon EU-Partnerprogramm teil. Als Amazon-Partner verdiene ich an qualifizierten Käufen. Wenn Sie auf einen Amazon-Link klicken, werden Sie zu Amazon weitergeleitet. Amazon kann Cookies setzen und Ihre Daten verarbeiten. Weitere Informationen finden Sie in der Datenschutzerklärung von Amazon: https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010`
          },
          {
            title: "4. Externe Links",
            text: `Diese Website enthält Links zu externen Websites (Amazon.de). Für die Inhalte dieser externen Seiten sind ausschließlich deren Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.`
          },
          {
            title: "5. Hosting",
            text: `Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website können technische Zugriffsdaten (z.B. IP-Adresse, Zeitstempel) in Server-Logs gespeichert werden. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy`
          },
          {
            title: "6. Ihre Rechte",
            text: `Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, Berichtigung, Löschung und Einschränkung der Verarbeitung. Da diese Website keine personenbezogenen Daten speichert, sind diese Rechte hier nicht anwendbar.`
          },
          {
            title: "7. Affiliate-Hinweis",
            text: `Diese Website enthält Affiliate-Links. Das bedeutet: Wenn Sie über einen Link auf dieser Website ein Produkt kaufen, erhalte ich eine kleine Provision — für Sie entstehen keine Mehrkosten. Die Provision beeinflusst nicht die Produktauswahl oder -bewertung.`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 32, padding: 24, background: "#fff", borderRadius: 12, border: "1px solid #e5e2dd" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#111" }}>{section.title}</h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, margin: 0 }}>{section.text}</p>
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
