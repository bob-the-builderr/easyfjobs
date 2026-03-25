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
    <div className="min-h-screen bg-background">
      <Navbar />
      <SearchFilterBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FeaturedJobs />
      <JobListings searchQuery={searchQuery} />
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
            <div className="min-h-screen bg-background">
              <Navbar />
              <NotFound />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
