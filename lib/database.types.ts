export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          name: string
          company: string | null
          email: string
          phone: string | null
          service_needed: string
          budget: string
          message: string
          lead_source: string | null
          status: string | null
          ip_address: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          company?: string | null
          email: string
          phone?: string | null
          service_needed: string
          budget: string
          message: string
          lead_source?: string | null
          status?: string | null
          ip_address?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          company?: string | null
          email?: string
          phone?: string | null
          service_needed?: string
          budget?: string
          message?: string
          lead_source?: string | null
          status?: string | null
          ip_address?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
    }
  }
}
