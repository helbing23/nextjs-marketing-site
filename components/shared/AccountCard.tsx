// [CHANGE] Replace with real user/account data or remove if not needed
interface AccountCardProps {
  name?: string;
  role?: string;
  avatarInitials?: string;
}

export function AccountCard({
  name = "[CHANGE] User Name",
  role = "[CHANGE] Role / Company",
  avatarInitials = "U",
}: AccountCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-secondary p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
        {avatarInitials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-text-primary">{name}</p>
        <p className="truncate text-xs text-text-tertiary">{role}</p>
      </div>
    </div>
  );
}
