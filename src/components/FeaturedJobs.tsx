import { useFeaturedJobs } from '../hooks/useJobs';
import type { Job } from '../types/job';

function getCountries(job: Job): string[] {
  const rawCountries = (job as Job & { countries?: unknown }).countries;

  if (Array.isArray(rawCountries)) {
    return rawCountries
      .filter((country): country is string => typeof country === 'string' && country.trim().length > 0)
      .map((country) => country.trim().toUpperCase());
  }

  if (typeof rawCountries === 'string') {
    const cleaned = (rawCountries as string).replace(/[{}]/g, '');
    return cleaned
      ? cleaned
          .split(',')
          .map((country: string) => country.trim().toUpperCase())
          .filter(Boolean)
      : [];
  }

  return [];
}

function CountryFlags({ countries }: { countries: string[] }) {
  if (countries.length === 0) return null;

  return (
    <div className="flex items-center justify-end gap-1.5 flex-wrap">
      {countries.slice(0, 4).map((countryCode) => {
        if (countryCode.length !== 2) return null;

        return (
          <img
            key={countryCode}
            src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png 2x`}
            width="20"
            height="14"
            alt={countryCode}
            className="h-[14px] w-[20px] rounded-sm border border-border/70 object-cover"
            title={countryCode}
          />
        );
      })}
    </div>
  );
}

function FeaturedJobCard({ job }: { job: Job }) {
  const countries = getCountries(job);

  return (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          {job.company_logo_url ? (
            <img
              src={job.company_logo_url}
              alt={job.company}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                {job.company.slice(0, 2)}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="line-clamp-2 text-base font-semibold leading-tight text-card-foreground transition-colors group-hover:text-primary">
              {job.title}
            </p>
            <p className="mt-1 truncate text-sm font-medium text-muted-foreground">
              {job.company}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-start pt-0.5">
          <CountryFlags countries={countries} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
        <div className="min-w-0">
          {job.salary ? (
            <p className="text-sm font-semibold text-foreground">{job.salary}</p>
          ) : (
            <p className="text-sm font-semibold text-muted-foreground">Salary not listed</p>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (job.application_url) {
              window.open(job.application_url, '_blank', 'noopener,noreferrer');
            }
          }}
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export function FeaturedJobs() {
  const { data: featuredJobs, isLoading } = useFeaturedJobs();

  if (isLoading) {
    return (
      <section className="pt-3 pb-3 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-24 bg-muted rounded animate-pulse" />
          </div>
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4 min-w-full">
              {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[300px] sm:w-[360px] lg:w-[420px] flex-shrink-0 h-48 bg-muted rounded-lg animate-pulse"
              />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!featuredJobs || featuredJobs.length === 0) {
    return null;
  }

  // Show only first 4 featured jobs
  const displayJobs = featuredJobs.slice(0, 4);

  return (
    <section className="pt-3 pb-3 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          ⭐ Featured Jobs
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 pb-2">
          <div className="flex gap-3 sm:gap-4 min-w-full">
            {displayJobs.map((job) => (
              <div key={job.id} className="w-[300px] sm:w-[360px] lg:w-[420px] flex-shrink-0">
                <FeaturedJobCard job={job} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
