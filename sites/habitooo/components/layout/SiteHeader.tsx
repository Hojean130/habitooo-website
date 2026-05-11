import Link from "next/link";
import { Brand } from "@/components/Brand";
import { Container } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Brand />
          <nav className="flex items-center gap-5">
            <Link className="text-sm text-secondary hover:text-primary focus-ring" href="/privacy">
              Privacy
            </Link>
            <Link className="text-sm text-secondary hover:text-primary focus-ring" href="/terms">
              Terms
            </Link>
            <Link className="text-sm text-secondary hover:text-primary focus-ring" href="/support">
              Support
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

