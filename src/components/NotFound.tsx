import { Link } from 'react-router-dom';
import { ArrowLeft, Ghost } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
          <Ghost className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
          404
        </h1>
        <p className="text-xl text-foreground mb-2 font-[family-name:var(--font-heading)]">
          Page not found
        </p>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to jobs
        </Link>
      </div>
    </div>
  );
}
