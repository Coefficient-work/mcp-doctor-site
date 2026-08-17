import { ImageResponse } from "next/og";
import { HERO_HEADLINE, PRODUCT_BYLINE } from "@/lib/constants";

export const runtime = "edge";
export const alt = "MCP Doctor by Coefficient";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F14",
          color: "#F7F8F5",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#0B0F14",
              border: "1px solid #243042",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 36, height: 2, background: "#F7F8F5" }} />
            <div style={{ position: "absolute", width: 2, height: 36, background: "#F7F8F5" }} />
            <div
              style={{
                position: "absolute",
                width: 28,
                height: 4,
                background: "#16A36A",
                transform: "rotate(-40deg) translate(4px, 8px)",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 650 }}>{PRODUCT_BYLINE}</div>
            <div style={{ fontSize: 20, color: "#8B938C" }}>Open-source MCP readiness CLI</div>
          </div>
        </div>
        <div style={{ fontSize: 52, fontWeight: 600, lineHeight: 1.15, maxWidth: 980 }}>
          {HERO_HEADLINE}
        </div>
        <div
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 22,
            color: "#16A36A",
          }}
        >
          npx @coefficient-work/mcp-doctor@latest inspect memory -o report.md
        </div>
      </div>
    ),
    { ...size },
  );
}
