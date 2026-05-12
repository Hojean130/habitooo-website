import { cn } from "@/lib/utils";
import { Clock, Flame, Users } from "lucide-react";

type Member = {
  name: string;
  status: "in_session" | "completed" | "warming_up";
  remaining?: string;
};

const members: Member[] = [
  { name: "Mia", status: "in_session", remaining: "18:24" },
  { name: "Kai", status: "completed" },
  { name: "Ari", status: "warming_up", remaining: "25:00" },
  { name: "你", status: "in_session", remaining: "07:42" }
];

function StatusDot({ status }: { status: Member["status"] }) {
  if (status === "completed") {
    return <span className="h-2 w-2 rounded-full bg-secondary/40" aria-hidden="true" />;
  }
  return (
    <span
      className={cn(
        "h-2 w-2 rounded-full bg-brand-green shadow-[0_0_0_3px_rgba(22,163,74,0.14)]",
        status === "in_session" && "animate-live-pulse"
      )}
      aria-hidden="true"
    />
  );
}

export function LiveSpaceMock({
  title = "Live Space",
  className
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("card-surface overflow-hidden", className)}>
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border-default bg-white shadow-card">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-live-pulse" />
          </span>
          <div className="truncate text-sm font-semibold tracking-[-0.01em] text-primary">{title}</div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-xs text-secondary">
          <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>3 人正在進行</span>
        </div>
      </div>

      <div className="border-t border-border-default px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Clock className="h-4 w-4 text-secondary" aria-hidden="true" />
            <span>下一段 25:00</span>
          </div>
          <div className="text-xs text-secondary">加入這段</div>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border-default/60">
          <div
            className="h-full w-[72%] rounded-full bg-brand-green/90"
            aria-label="群組進度 72%"
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-secondary">
          <span>群組進度 72%</span>
          <span className="inline-flex items-center gap-1">
            <Flame className="h-4 w-4 text-secondary" aria-hidden="true" />
            <span>動量</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 pb-4 pt-0 sm:gap-3 sm:px-5 md:grid-cols-4">
        {members.map((m) => (
          <div key={m.name} className="card bg-white p-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-primary">{m.name}</div>
              <StatusDot status={m.status} />
            </div>
            <div className="mt-1 text-xs text-secondary">
              {m.status === "completed"
                ? "剛完成"
                : m.status === "warming_up"
                  ? "準備開始"
                  : "正在進行"}
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <div className="text-xs text-secondary">計時</div>
              <div className="font-mono text-sm text-primary/80">{m.remaining ?? "--:--"}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border-default px-4 py-3 sm:px-5 sm:py-4">
        <div className="text-xs leading-relaxed text-secondary">
          Kai 剛完成 · Ari 2 分鐘前加入 · 你要跟上嗎？
        </div>
      </div>
    </div>
  );
}

