import { Search } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchFilterBar({ searchQuery, onSearchChange }: SearchFilterBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="pt-6 pb-3 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search job titles, keywords, or companies"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-11 pl-10 pr-4 bg-input-bg border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="h-11 px-6 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
