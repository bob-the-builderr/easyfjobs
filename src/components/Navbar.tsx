import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-14 bg-background border-b border-border">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl tracking-tight font-[family-name:var(--font-heading)]">
<span className="text-primary">Easy</span>
<span className="text-foreground">Fucking</span>
<span className="text-accent">Jobs</span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
