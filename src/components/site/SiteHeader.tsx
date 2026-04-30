import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const NAV = [
  { to: "/", label: "Главная" },
  { to: "/manifesto", label: "Манифест" },
  { to: "/research", label: "Исследование и программа" },
  { to: "/community", label: "Сообщество" },
  { to: "/materials", label: "Материалы" },
  { to: "/partnership", label: "Партнёрство" },
  { to: "/join", label: "Участвовать" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo variant="compact" className="text-base sm:text-lg" />
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            сообщество
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <RouterNavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-secondary/80 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com"
            target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link
            to="/join"
            className="inline-flex h-9 items-center rounded-full bg-gradient-amber px-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Присоединиться
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-4" aria-label="Мобильная навигация">
            {NAV.map((item) => (
              <RouterNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 text-base transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  )
                }
              >
                {item.label}
              </RouterNavLink>
            ))}
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gradient-amber text-sm font-medium text-primary-foreground"
            >
              Присоединиться
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
