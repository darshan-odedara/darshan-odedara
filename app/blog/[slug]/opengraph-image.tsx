import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
// Metadata image routes are static by default. This route needs the requested
// post slug, so render it per request instead of caching one fallback image.
export const dynamic = "force-dynamic";

export const alt = "Blog post by Darshan Odedara";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Keep the logo bundled with this route so the image function does not need to
// read from Vercel's serverless filesystem at request time.
const logoSource =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDcwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNTAgMTAwQzUwIDcyLjM4NTggNzIuMzg1OCA1MCAxMDAgNTBIMjQwVjE1MEg1MFYxMDBaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTUwIDE2MEgxNTBWMzAwSDEwMEM3Mi4zODU4IDMwMCA1MCAyNzcuNjE0IDUwIDI1MFYxNjBaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTUwIDM1MEgyNTBWNDUwSDEwMEM3Mi4zODU4IDQ1MCA1MCA0MjcuNjE0IDUwIDQwMFYzNTBaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTI1MCA1MEMzNjAuNDU3IDUwIDQ1MCAxMzkuNTQzIDQ1MCAyNTBDNDUwIDM2MC40NTcgMzYwLjQ1NyA0NTAgMjUwIDQ1MFYzNTBDMzA1LjIyOCAzNTAgMzUwIDMwNS4yMjggMzUwIDI1MEMzNTAgMTk0Ljc3MiAzMDUuMjI4IDE1MCAyNTAgMTUwVjUwWiIgZmlsbD0id2hpdGUiLz4NCjxjaXJjbGUgY3g9IjQ1MCIgY3k9IjI1MCIgcj0iMTUwIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8xXzIyKSIgc3Ryb2tlLXdpZHRoPSIxMDAiLz4NCjxwYXRoIGQ9Ik00NTAgMjUwQzQ1MCAzNjAuNDU3IDM2MC40NTcgNDUwIDI1MCA0NTBWMzUwQzMwNS4yMjggMzUwIDM1MCAzMDUuMjI4IDM1MCAyNTBINDUwWiIgZmlsbD0id2hpdGUiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMjIiIHgxPSI0NTAiIHkxPSI1MCIgeDI9IjQ1MCIgeTI9IjQ1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzE1MDBGRiIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjBCMEIwIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo=";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title ?? "Darshan Odedara";
  const category = post?.category ?? "Blog";
  const author = post?.author ?? "Darshan Odedara";
  const date = post
    ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(
        new Date(`${post.date}T00:00:00`),
      )
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "Anek Latin, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#93c5fd",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {category}
          </div>
          <img
            src={logoSource}
            width="220"
            height="140"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "980px",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            color: "#cbd5e1",
          }}
        >
          By {author}{date ? ` · ${date}` : ""}
        </div>
      </div>
    ),
    size,
  );
}
