import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dynamically generated social-share card. */
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
          padding: "80px",
          background:
            "radial-gradient(900px 600px at 80% -10%, rgba(124,108,255,0.55), transparent 60%), radial-gradient(700px 500px at 0% 110%, rgba(37,211,238,0.4), transparent 62%), #06070e",
          color: "#eef0f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7c6cff, #25d3ee)",
              fontSize: "32px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: "26px", color: "#a7acc0" }}>{profile.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "920px",
            }}
          >
            Building immersive web experiences.
          </div>
          <div style={{ fontSize: "30px", color: "#a7acc0" }}>
            {`${profile.role} · React · Next.js · Three.js`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
