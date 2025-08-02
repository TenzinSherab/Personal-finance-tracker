import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://egqohdrqvcemuzkyijoc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVncW9oZHJxdmNlbXV6a3lpam9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzY5MjUsImV4cCI6MjA2OTY1MjkyNX0.8RhyU-wR5DfPNm1BDrRUHwHT9jUs7T0zgxS6fspe2oU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      transactions: {
        Row: {
          id: string
          user_id: string
          type: 'income' | 'expense'
          amount: number
          category: string
          description: string
          date: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'income' | 'expense'
          amount: number
          category: string
          description: string
          date: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'income' | 'expense'
          amount?: number
          category?: string
          description?: string
          date?: string
          created_at?: string
        }
      }
    }
  }
}