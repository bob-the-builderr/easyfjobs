import { Link } from 'react-router-dom';
import { useAllJobs } from '../hooks/useJobs';
import type { Job } from '../types/job';

interface JobListingsProps {
  searchQuery: string;
}

function JobListingBar({ job }: { job: Job }) {
  return (
    <Link
      to={`/jobs/${job.slug}`}
      className="group flex items-center gap-5 bg-card border border-border rounded-lg px-5 py-4 hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Company Logo */}
      {job.company_logo_url ? (
        <img
          src={job.company_logo_url}
          alt={job.company}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-semibold text-muted-foreground uppercase">
            {job.company.slice(0, 2)}
          </span>
        </div>
      )}

      {/* Middle Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-card-foreground truncate group-hover:opacity-80 transition-opacity">
          {job.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">{job.company}</p>
        {job.salary && (
          <p className="text-sm font-semibold text-card-foreground mt-1 truncate">
            {job.salary}
          </p>
        )}
      </div>

      {/* Countries / Flags */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {(() => {
          let countries: string[] = [];
          if (Array.isArray(job.countries)) {
            countries = job.countries;
          } else if (typeof job.countries === 'string') {
            const cleaned = (job.countries as string).replace(/[{}]/g, '');
            countries = cleaned ? cleaned.split(',').map((c) => c.trim()) : [];
          }

          // FALLBACK FOR TESTING - If no countries are set, show a 🇺🇸 flag
          if (!countries || countries.length === 0) {
            countries = ['US'];
          }

          return countries.map((countryCode) => {
            if (!countryCode) return null;
            
            try {
              const code = countryCode.toUpperCase().trim();
              if (code.length !== 2) return null;
              
              // Use flagcdn.com for visual consistency across all OS (including Windows)
              return (
                <img
                  key={countryCode}
                  src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
                  width="20"
                  height="15"
                  alt={code}
                  className="rounded-sm shadow-sm"
                  title={code}
                />
              );
            } catch (err) {
              console.error('Error generating flag for', countryCode, err);
              return null;
            }
          });
        })()}
      </div>

      {/* Tags - Desktop Only */}
      <div className="hidden md:flex items-center gap-2 flex-shrink-0">
        {(job.tags || []).slice(0, 3).map(tag => (
          <span
            key={tag}
            className="text-[11px] font-medium border border-border text-card-foreground px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <button className="hidden sm:block h-9 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex-shrink-0">
        Apply
      </button>
    </Link>
  );
}

function SkeletonBar() {
  return (
    <div className="flex items-center gap-5 bg-muted border border-border rounded-lg px-5 py-4 animate-pulse h-20">
      <div className="w-12 h-12 rounded-full bg-border flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-3/4 bg-border rounded" />
        <div className="h-3 w-1/2 bg-border rounded" />
      </div>
    </div>
  );
}

function filterJobs(jobs: Job[], searchQuery: string): Job[] {
  if (!searchQuery.trim()) return jobs;

  const searchLower = searchQuery.toLowerCase();
  return jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchLower) ||
      job.company.toLowerCase().includes(searchLower) ||
      (job.tags || []).some(tag => tag.toLowerCase().includes(searchLower));
    return matchesSearch;
  });
}

export function JobListings({ searchQuery }: JobListingsProps) {
  const { data: allJobs, isLoading } = useAllJobs();

  const filteredJobs = allJobs ? filterJobs(allJobs, searchQuery) : [];

  return (
    <section className="pt-3 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            All Jobs
          </h2>
          <span className="text-sm text-muted-foreground">
            {isLoading ? 'Loading...' : `${filteredJobs.length} jobs found`}
          </span>
        </div>

        {/* Job Listings */}
        <div className="space-y-3">
          {isLoading ? (
            // Loading Skeletons
            <>
              <SkeletonBar />
              <SkeletonBar />
              <SkeletonBar />
              <SkeletonBar />
              <SkeletonBar />
            </>
          ) : filteredJobs.length === 0 ? (
            // Empty State
            <div className="text-center py-12">
              <p className="text-muted-foreground">No jobs found matching your search.</p>
            </div>
          ) : (
            // Job Listings
            filteredJobs.map(job => (
              <JobListingBar key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
