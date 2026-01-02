import Link from "next/link";

export default function AccountPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>Account</h1>
      <p style={{ marginTop: 10, opacity: 0.75 }}>
        This is where login + membership status will live.
      </p>

      <div style={{ marginTop: 18, border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
        <div style={{ fontWeight: 700 }}>Next build step</div>
        <p style={{ marginTop: 6, fontSize: 14, opacity: 0.75 }}>
          We will connect this to Supabase Authentication (email login) and then enable
          the Premium-only Ratings dashboard.
        </p>

        <div style={{ marginTop: 10, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/account/ratings">My Ratings →</Link>
          <Link href="/pricing">Premium →</Link>
        </div>
      </div>
    </div>
  );
}
