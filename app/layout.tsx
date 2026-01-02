import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "RacquetCourt",
  description:
    "One-stop shop for tennis & pickleball — resources, marketplace, booking, and premium ratings dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ borderBottom: "1px solid #e5e5e5" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Link href="/" style={{ fontWeight: 700, textDecoration: "none" }}>
              RacquetCourt
            </Link>
            <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
              <Link href="/explore">Explore</Link>
              <Link href="/play">Marketplace</Link>
              <Link href="/pricing">Premium</Link>
              <Link href="/account">Account</Link>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: "70vh" }}>{children}</main>

        <footer style={{ borderTop: "1px solid #e5e5e5", marginTop: 40 }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: 16,
              fontSize: 13,
              opacity: 0.75,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span>© {new Date().getFullYear()} RacquetCourt</span>
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/dmca">DMCA</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
