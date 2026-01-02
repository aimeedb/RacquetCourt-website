export default function MarketplacePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>Marketplace</h1>
      <p style={{ marginTop: 10, opacity: 0.75 }}>
        This will list coaches, courts, clinics, and events — with booking.
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
        }}
      >
        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          Provider search
          <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>
            Filter by sport, location, price, availability.
          </div>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          Listings + booking
          <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>
            Book sessions, courts, clinics (Stripe optional).
          </div>
        </div>
      </div>
    </div>
  );
}
