import { cn } from "@/lib/utils";

export function Section({
  id,
  tone = "default",
  className,
  children
}: {
  id?: string;
  tone?: "default" | "surface";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-14 sm:py-20 md:py-24",
        tone === "surface" ? "bg-surface" : "bg-background",
        className
      )}
    >
      {children}
    </section>
  );
}

