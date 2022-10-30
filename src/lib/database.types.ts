export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          avatar_url: string | null
          website: string | null
          user_email: string
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          avatar_url?: string | null
          website?: string | null
          user_email?: string
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          avatar_url?: string | null
          website?: string | null
          user_email?: string
        }
      }
      test: {
        Row: {
          id: number
          created_at: string | null
        }
        Insert: {
          id: number
          created_at?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
        }
      }
      todos: {
        Row: {
          user_email: string | null
          id: number
          user_id: string
          task: string | null
          is_complete: boolean | null
          inserted_at: string
        }
        Insert: {
          user_email?: string | null
          id?: number
          user_id: string
          task?: string | null
          is_complete?: boolean | null
          inserted_at?: string
        }
        Update: {
          user_email?: string | null
          id?: number
          user_id?: string
          task?: string | null
          is_complete?: boolean | null
          inserted_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
