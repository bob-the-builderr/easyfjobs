export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string;
          title: string;
          company: string;
          slug: string;
          salary: string | null;
          job_type: string;
          workplace_type: string;
          description: string | null;
          responsibilities: string[] | null;
          requirements: string[] | null;
          benefits: string[] | null;
          tags: string[] | null;
          company_logo_url: string | null;
          application_url: string | null;
          featured: boolean;
          is_active: boolean;
          posted_at: string;
          expires_at: string | null;
          created_at: string;
          updated_at: string;
          countries?: string[] | null;
        };
        Insert: {
          id?: string;
          title: string;
          company: string;
          slug: string;
          salary?: string | null;
          job_type?: string;
          workplace_type?: string;
          description?: string | null;
          responsibilities?: string[] | null;
          requirements?: string[] | null;
          benefits?: string[] | null;
          tags?: string[] | null;
          company_logo_url?: string | null;
          application_url?: string | null;
          featured?: boolean;
          is_active?: boolean;
          posted_at?: string;
          expires_at?: string | null;
          created_at?: string;
          updated_at?: string;
          countries?: string[] | null;
        };
        Update: {
          id?: string;
          title?: string;
          company?: string;
          slug?: string;
          salary?: string | null;
          job_type?: string;
          workplace_type?: string;
          description?: string | null;
          responsibilities?: string[] | null;
          requirements?: string[] | null;
          benefits?: string[] | null;
          tags?: string[] | null;
          company_logo_url?: string | null;
          application_url?: string | null;
          featured?: boolean;
          is_active?: boolean;
          posted_at?: string;
          expires_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export type Job = Database['public']['Tables']['jobs']['Row'];
export type JobInsert = Database['public']['Tables']['jobs']['Insert'];
export type JobUpdate = Database['public']['Tables']['jobs']['Update'];
