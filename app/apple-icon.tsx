import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0F14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", width: 72, height: 8, background: "#F7F8F5" }} />
          <div style={{ position: "absolute", width: 8, height: 72, background: "#F7F8F5" }} />
          <div
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#F7F8F5",
              top: 16,
              left: 53,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#F7F8F5",
              bottom: 16,
              left: 53,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#F7F8F5",
              top: 53,
              left: 16,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#F7F8F5",
              top: 53,
              right: 16,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 56,
              height: 10,
              background: "#16A36A",
              transform: "rotate(-40deg) translate(6px, 10px)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
