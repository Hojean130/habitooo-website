import Link from "next/link";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-default bg-background">
      <Container>
        <div className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-secondary">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link className="text-sm text-secondary hover:text-primary focus-ring" href="/privacy">
              Privacy
            </Link>
            <Link className="text-sm text-secondary hover:text-primary focus-ring" href="/terms">
              Terms
            </Link>
            <Link className="text-sm text-secondary hover:text-primary focus-ring" href="/support">
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

