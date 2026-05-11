import { cn } from "@/lib/utils";

export function Container({
  size = "page",
  className,
  children
}: {
  size?: "page" | "text" | "legal";
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    size === "legal"
      ? "container-legal"
      : size === "text"
        ? "container-text"
        : "container-page";
  return <div className={cn(base, className)}>{children}</div>;
}

