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
            <div
              style={{
                position: "absolute",
                width: 18,
                height: 5,
                background: "#16A36A",
                borderRadius: 5,
                transform: "rotate(48deg) translate(-8px, 6px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 32,
                height: 5,
                background: "#16A36A",
                borderRadius: 5,
                transform: "rotate(-50deg) translate(4px, -2px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: 8,
                background: "#F7F8F5",
                left: 14,
                top: 34,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: 8,
                background: "#F7F8F5",
                right: 12,
                top: 16,
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
