import Link from "next/link";

export default function PricingPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, margin: 0 }}>Premium</h1>
      <p style={{ marginTop: 10, opacity: 0.75 }}>
        Two-tier pricing: <strong>$9.99/month</strong> or <strong>$115/year</strong>.
        (Auto tax by country can be enabled in Stripe.)
      </p>

      <div style={{ marginTop: 18, border: "1px solid #e5e5e5", borderRadius: 16, padding: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22 }}>RacquetCourt Premium</h2>
        <ul style={{ marginTop: 10, lineHeight: 1.6 }}>
          <li>
            <strong>Ratings All-in-One Place (Premium-only)</strong>: WTN, UTR, UTR-P, plus linked ratings like TennisRecord.
          </li>
          <li>Premium search filters and perks.</li>
          <li>Premium booking advantages (as configured).</li>
        </ul>

        <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/account">Go to Account →</Link>
          <span style={{ fontSize: 13, opacity: 0.7 }}>
            Next step: add Stripe Checkout button here.
          </span>
        </div>
      </div>
    </div>
  );
}
