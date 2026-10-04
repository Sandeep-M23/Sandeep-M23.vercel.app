import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The social share card shown when the site is linked on LinkedIn, X, Slack and so on.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 85% 0%, rgba(240,68,68,0.35), transparent 55%), #09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 22,
            border: "3px solid #f04444",
            color: "#f04444",
            fontSize: 60,
            fontFamily: "serif",
            fontWeight: 700,
          }}
        >
          S
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ fontSize: 44, color: "#f04444", marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 28, maxWidth: 900 }}>
            Building and scaling production SaaS products, from backend systems to fast web frontends.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>sandeep-m23.vercel.app · Bengaluru, India</div>
      </div>
    ),
    size,
  );
}
