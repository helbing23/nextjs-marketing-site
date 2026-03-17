# Lessons Learned

## Rules

- Always check if shadcn init has already created lib/utils.ts before overwriting
- JSON-LD script tags should be placed in page files, not in section components
- Use [CHANGE] markers throughout so template users know exactly what to customize
- The CalSans font file needs to be downloaded and placed at public/fonts/CalSans-SemiBold.woff2
- Set preload: false on localFont when the font file doesn't exist yet to avoid build errors
