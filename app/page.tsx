import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 44, margin: 0 }}>RacquetCourt</h1>
      <p style={{ marginTop: 10, opacity: 0.75 }}>
        A one-stop hub for tennis & pickleball — articles, organizations, gear,
        coaches, courts, events, and bookings.
      </p>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          marginTop: 28,
        }}
      >
        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 700 }}>Explore</div>
          <p style={{ marginTop: 6, fontSize: 14, opacity: 0.75 }}>
            Find resources locally or worldwide.
          </p>
          <Link href="/explore">Go to Explore →</Link>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 700 }}>Marketplace + Booking</div>
          <p style={{ marginTop: 6, fontSize: 14, opacity: 0.75 }}>
            Search coaches, courts, clinics and book.
          </p>
          <Link href="/play">Browse Marketplace →</Link>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 700 }}>Premium: Ratings All-in-One</div>
          <p style={{ marginTop: 6, fontSize: 14, opacity: 0.75 }}>
            Connect WTN, UTR, UTR-P and link/confirm others like TennisRecord.
          </p>
          <Link href="/pricing">View Premium →</Link>
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          border: "1px solid #e5e5e5",
          borderRadius: 18,
          padding: 20,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 26 }}>All Your Ratings. One Place.</h2>
        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.75 }}>
          Premium members can connect supported platforms and see tennis +
          pickleball ratings in one dashboard with verification labels.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
          <Link href="/account/ratings">Go to Ratings Dashboard →</Link>
          <Link href="/pricing">Upgrade →</Link>
        </div>
      </div>
    </div>
  );
}
