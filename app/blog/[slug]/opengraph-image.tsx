import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";

export const alt = "Blog post by Darshan Odedara";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, logo] = await Promise.all([
    getPostBySlug(slug),
    readFile(path.join(process.cwd(), "public", "logo-dark.svg")),
  ]);
  const logoSource = `data:image/svg+xml;base64,${logo.toString("base64")}`;

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
