import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { mockJobs } from '../data/mockJobs';
import type { Job } from '../types/database';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return url && key && !url.includes('placeholder') && !key.includes('placeholder');
};

// Fetch all active jobs ordered by posted_at desc
export function useAllJobs() {
  return useQuery<Job[], Error>({
    queryKey: ['jobs', 'all'],
    queryFn: async () => {
      // If Supabase is not configured, use mock data
      if (!isSupabaseConfigured()) {
        console.log('Using mock data (Supabase not configured)');
        return mockJobs.filter(job => job.is_active);
      }

      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_active', true)
        .order('posted_at', { ascending: false });

      if (error) {
        console.error('Supabase error, falling back to mock data:', error.message);
        return mockJobs.filter(job => job.is_active);
      }

      return data || [];
    },
  });
}

// Fetch active featured jobs
export function useFeaturedJobs() {
  return useQuery<Job[], Error>({
    queryKey: ['jobs', 'featured'],
    queryFn: async () => {
      // If Supabase is not configured, use mock data
      if (!isSupabaseConfigured()) {
        console.log('Using mock data (Supabase not configured)');
        return mockJobs.filter(job => job.is_active && job.featured);
      }

      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_active', true)
        .eq('featured', true)
        .order('posted_at', { ascending: false });

      if (error) {
        console.error('Supabase error, falling back to mock data:', error.message);
        return mockJobs.filter(job => job.is_active && job.featured);
      }

      return data || [];
    },
  });
}

// Fetch single job by slug
export function useJobBySlug(slug: string) {
  return useQuery<Job | null, Error>({
    queryKey: ['jobs', 'slug', slug],
    queryFn: async () => {
      // If Supabase is not configured, use mock data
      if (!isSupabaseConfigured()) {
        console.log('Using mock data (Supabase not configured)');
        return mockJobs.find(job => job.slug === slug && job.is_active) || null;
      }

      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // No rows returned
        }
        console.error('Supabase error, falling back to mock data:', error.message);
        return mockJobs.find(job => job.slug === slug && job.is_active) || null;
      }

      return data;
    },
    enabled: !!slug,
  });
}
