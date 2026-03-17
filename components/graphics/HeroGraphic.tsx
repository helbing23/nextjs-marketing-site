export function HeroGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Browser chrome */}
      <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-bg-primary px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-error/60" />
            <div className="h-3 w-3 rounded-full bg-warning/60" />
            <div className="h-3 w-3 rounded-full bg-success/60" />
          </div>
          <div className="mx-auto flex w-48 items-center gap-2 rounded-md bg-bg-secondary px-3 py-1 text-xs text-text-tertiary">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {/* [CHANGE] Update with your real URL */}
            example.com
          </div>
        </div>
        {/* Screen content placeholder */}
        <div className="space-y-3 p-6">
          <div className="h-4 w-3/4 rounded bg-border" />
          <div className="h-4 w-1/2 rounded bg-border/60" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-20 rounded-lg bg-border/40"
              />
            ))}
          </div>
          <div className="mt-2 h-8 w-32 rounded-lg bg-accent/30" />
        </div>
      </div>
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-accent/5 blur-2xl" />
    </div>
  );
}
