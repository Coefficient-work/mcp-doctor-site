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
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 42,
              height: 14,
              background: "#16A36A",
              borderRadius: 14,
              left: 14,
              top: 64,
              transform: "rotate(48deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 78,
              height: 14,
              background: "#16A36A",
              borderRadius: 14,
              left: 38,
              top: 50,
              transform: "rotate(-52deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 18,
              height: 18,
              borderRadius: 18,
              background: "#F7F8F5",
              left: 18,
              top: 58,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 18,
              height: 18,
              borderRadius: 18,
              background: "#F7F8F5",
              left: 86,
              top: 22,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
