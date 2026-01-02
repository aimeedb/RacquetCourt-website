export default function ExplorePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>Explore</h1>
      <p style={{ marginTop: 10, opacity: 0.75 }}>
        This will become the searchable hub for articles, organizations, blogs,
        Instagram accounts, stores, and more — filtered by tennis/pickleball and
        location.
      </p>

      <div style={{ marginTop: 18, border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
        Next build step: connect this to Supabase tables (resources/tags) and add
        search by zip/city/country.
      </div>
    </div>
  );
}
