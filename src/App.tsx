import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/Navbar';
import { SearchFilterBar } from './components/SearchFilterBar';
import { FeaturedJobs } from './components/FeaturedJobs';
import { JobListings } from './components/JobListings';
import { NotFound } from './components/NotFound';

// Create Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
      <SearchFilterBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FeaturedJobs />
      <JobListings searchQuery={searchQuery} />
      </main>
      <footer className="border-t border-border py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:px-6 lg:px-8">
          all right reserved easyfuckingjobs 2026
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={
            <div className="min-h-screen bg-background flex flex-col">
              <Navbar />
              <main className="flex-1">
                <NotFound />
              </main>
              <footer className="border-t border-border py-4">
                <div className="mx-auto max-w-7xl px-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:px-6 lg:px-8">
                  all right reserved easyfuckingjobs 2026
                </div>
              </footer>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
