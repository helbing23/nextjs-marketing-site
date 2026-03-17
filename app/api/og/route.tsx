import { ImageResponse } from "next/og";

export const runtime = "edge";

// [CHANGE] Keep these in sync with CSS custom properties in app/globals.css
const OG = {
  bg: "#0a0a0a",            // --color-bg-primary
  accent: "#A78BFA",        // --color-accent (violet-400)
  accentMid: "#8B5CF6",     // --color-accent-hover (violet-500)
  textPrimary: "#f9fafb",   // --color-text-primary
  textSecondary: "#6b7280", // --color-text-secondary
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "[CHANGE] Site Name";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: OG.bg,
          padding: "80px",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, ${OG.accent}, ${OG.accentMid})`,
          }}
        />
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: OG.textPrimary,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: OG.textSecondary,
          }}
        >
          {/* [CHANGE] Replace with your domain */}
          example.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
