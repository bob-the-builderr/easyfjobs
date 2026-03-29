-- ============================================
-- EASYFUCKINGJOBS - SUPABASE DATABASE SCHEMA
-- ============================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- JOBS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS public.jobs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  salary TEXT,
  job_type TEXT NOT NULL DEFAULT 'Full-Time',
  workplace_type TEXT NOT NULL DEFAULT 'Remote',
  description TEXT,
  responsibilities TEXT[],
  requirements TEXT[],
  benefits TEXT[],
  tags TEXT[],
  company_logo_url TEXT,
  application_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  posted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS jobs_is_active_idx ON public.jobs(is_active);
CREATE INDEX IF NOT EXISTS jobs_featured_idx ON public.jobs(featured);
CREATE INDEX IF NOT EXISTS jobs_slug_idx ON public.jobs(slug);
CREATE INDEX IF NOT EXISTS jobs_posted_at_idx ON public.jobs(posted_at DESC);
CREATE INDEX IF NOT EXISTS jobs_job_type_idx ON public.jobs(job_type);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on jobs table
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Public read access for active jobs
CREATE POLICY "Public can read active jobs" ON public.jobs
  FOR SELECT
  USING (is_active = TRUE);

-- Admin can do everything (requires authenticated user with admin role)
-- Uncomment and customize based on your auth setup:
-- CREATE POLICY "Admins can do everything" ON public.jobs
--   FOR ALL
--   USING (auth.jwt() ->> 'role' = 'admin')
--   WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- ============================================
-- FUNCTION: Auto-update updated_at timestamp
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS set_updated_at ON public.jobs;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

INSERT INTO public.jobs (title, company, slug, salary, job_type, workplace_type, description, responsibilities, requirements, benefits, tags, featured, is_active, posted_at)
VALUES
  (
    'Senior Frontend Engineer',
    'Stripe',
    'senior-frontend-engineer-stripe',
    '$180,000 - $250,000',
    'Full-Time',
    'Remote',
    'Join Stripe''s frontend team to build the future of online payments.',
    ARRAY['Build and maintain React components', 'Collaborate with designers', 'Optimize performance'],
    ARRAY['5+ years React experience', 'TypeScript proficiency', 'Strong CSS skills'],
    ARRAY['Health insurance', 'Equity', 'Remote-first', 'Unlimited PTO'],
    ARRAY['React', 'TypeScript', 'Senior', 'Remote'],
    TRUE,
    TRUE,
    NOW() - INTERVAL '2 hours'
  ),
  (
    'Product Designer',
    'Figma',
    'product-designer-figma',
    '$150,000 - $200,000',
    'Full-Time',
    'Hybrid',
    'Design the tools that designers use every day.',
    ARRAY['Create user interfaces', 'Conduct user research', 'Build prototypes'],
    ARRAY['3+ years product design', 'Figma expertise', 'Portfolio required'],
    ARRAY['Health insurance', 'Learning budget', '4-day work week'],
    ARRAY['Design', 'Figma', 'UI/UX', 'Mid'],
    TRUE,
    TRUE,
    NOW() - INTERVAL '1 day'
  ),
  (
    'Full Stack Developer',
    'Vercel',
    'full-stack-developer-vercel',
    '$160,000 - $220,000',
    'Full-Time',
    'Remote',
    'Build the platform that powers the modern web.',
    ARRAY['Develop Next.js features', 'Maintain infrastructure', 'Write documentation'],
    ARRAY['Node.js expertise', 'React proficiency', 'DevOps experience'],
    ARRAY['Stock options', 'Remote-first', 'Conference budget'],
    ARRAY['Next.js', 'Node.js', 'Senior', 'Full Stack'],
    TRUE,
    TRUE,
    NOW() - INTERVAL '3 days'
  ),
  (
    'Backend Engineer',
    'Discord',
    'backend-engineer-discord',
    '$170,000 - $230,000',
    'Full-Time',
    'Remote',
    'Scale the infrastructure that powers millions of communities.',
    ARRAY['Design distributed systems', 'Optimize database performance', 'Build APIs'],
    ARRAY['Python or Rust experience', 'Distributed systems knowledge', 'PostgreSQL expertise'],
    ARRAY['Competitive salary', 'Equity', 'Gaming perks'],
    ARRAY['Python', 'Rust', 'Backend', 'Senior'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '4 hours'
  ),
  (
    'DevOps Engineer',
    'Cloudflare',
    'devops-engineer-cloudflare',
    '$140,000 - $190,000',
    'Full-Time',
    'Remote',
    'Help build a better internet with world-class infrastructure.',
    ARRAY['Manage Kubernetes clusters', 'Automate deployments', 'Monitor systems'],
    ARRAY['Kubernetes expertise', 'Terraform experience', 'CI/CD knowledge'],
    ARRAY['Remote work', 'Health benefits', 'Stock options'],
    ARRAY['Kubernetes', 'DevOps', 'Cloud', 'Mid'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '2 days'
  ),
  (
    'Junior React Developer',
    'Notion',
    'junior-react-developer-notion',
    '$80,000 - $110,000',
    'Full-Time',
    'Hybrid',
    'Start your career building productivity tools used by millions.',
    ARRAY['Build UI components', 'Fix bugs', 'Write tests'],
    ARRAY['React fundamentals', 'JavaScript knowledge', 'Eagerness to learn'],
    ARRAY['Mentorship program', 'Learning budget', 'Free lunch'],
    ARRAY['React', 'JavaScript', 'Entry', 'Junior'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '5 days'
  ),
  (
    'Mobile Engineer (iOS)',
    'Airbnb',
    'mobile-engineer-ios-airbnb',
    '$175,000 - $240,000',
    'Full-Time',
    'Hybrid',
    'Build the app that helps people belong anywhere.',
    ARRAY['Develop iOS features', 'Collaborate with Android team', 'Improve app performance'],
    ARRAY['Swift expertise', '5+ years iOS experience', 'Published apps'],
    ARRAY['Travel credits', 'Health insurance', 'Equity'],
    ARRAY['iOS', 'Swift', 'Mobile', 'Senior'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '1 week'
  ),
  (
    'Data Scientist',
    'Spotify',
    'data-scientist-spotify',
    '$155,000 - $210,000',
    'Full-Time',
    'Remote',
    'Use data to shape how the world listens to music.',
    ARRAY['Build ML models', 'Analyze user behavior', 'Present insights'],
    ARRAY['Python expertise', 'ML frameworks knowledge', 'Statistics background'],
    ARRAY['Free Spotify Premium', 'Music industry perks', 'Remote work'],
    ARRAY['Python', 'ML', 'Data Science', 'Senior'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '6 hours'
  ),
  (
    'Engineering Manager',
    'Linear',
    'engineering-manager-linear',
    '$200,000 - $280,000',
    'Full-Time',
    'Remote',
    'Lead a team building the best project management tool for software teams.',
    ARRAY['Manage engineering team', 'Define technical roadmap', 'Hire and mentor'],
    ARRAY['Previous management experience', 'Strong technical background', 'Leadership skills'],
    ARRAY['Equity', 'Unlimited PTO', 'Remote-first'],
    ARRAY['Management', 'Leadership', 'Lead', 'Engineering'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '3 hours'
  ),
  (
    'Frontend Developer (Contract)',
    'Shopify',
    'frontend-developer-contract-shopify',
    '$100/hour',
    'Contract',
    'Remote',
    'Help merchants build beautiful storefronts.',
    ARRAY['Build Liquid templates', 'Customize themes', 'Optimize performance'],
    ARRAY['JavaScript proficiency', 'Shopify experience preferred', 'CSS expertise'],
    ARRAY['Flexible hours', 'Remote work', 'Long-term contract'],
    ARRAY['JavaScript', 'Shopify', 'Contract', 'Mid'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '8 hours'
  ),
  (
    'Security Engineer',
    'GitHub',
    'security-engineer-github',
    '$165,000 - $225,000',
    'Full-Time',
    'Remote',
    'Protect the code that runs the world.',
    ARRAY['Conduct security audits', 'Build security tools', 'Respond to incidents'],
    ARRAY['Security certifications', 'Penetration testing experience', 'Code review skills'],
    ARRAY['Microsoft benefits', 'Equity', 'Remote work'],
    ARRAY['Security', 'DevSecOps', 'Senior', 'Engineering'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '4 days'
  ),
  (
    'Technical Writer Intern',
    'Atlassian',
    'technical-writer-intern-atlassian',
    '$35/hour',
    'Internship',
    'Hybrid',
    'Learn to write documentation that developers love.',
    ARRAY['Write API docs', 'Create tutorials', 'Update existing docs'],
    ARRAY['Strong writing skills', 'Technical curiosity', 'Currently enrolled student'],
    ARRAY['Mentorship', 'Potential full-time offer', 'Swag'],
    ARRAY['Writing', 'Documentation', 'Entry', 'Internship'],
    FALSE,
    TRUE,
    NOW() - INTERVAL '2 weeks'
  );

-- ============================================
-- VERIFICATION
-- ============================================

-- Verify the table was created
SELECT 'Jobs table created successfully!' AS status;

-- Show sample data count
SELECT COUNT(*) AS total_jobs FROM public.jobs WHERE is_active = TRUE;
SELECT COUNT(*) AS featured_jobs FROM public.jobs WHERE is_active = TRUE AND featured = TRUE;
