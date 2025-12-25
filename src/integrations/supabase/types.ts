export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      bus_routes: {
        Row: {
          created_at: string
          distance_km: number | null
          estimated_time_minutes: number | null
          fare: number | null
          from_location: string
          id: string
          is_active: boolean
          route_name: string
          route_number: string
          to_location: string
          total_stops: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          distance_km?: number | null
          estimated_time_minutes?: number | null
          fare?: number | null
          from_location: string
          id?: string
          is_active?: boolean
          route_name: string
          route_number: string
          to_location: string
          total_stops?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          distance_km?: number | null
          estimated_time_minutes?: number | null
          fare?: number | null
          from_location?: string
          id?: string
          is_active?: boolean
          route_name?: string
          route_number?: string
          to_location?: string
          total_stops?: number
          updated_at?: string
        }
        Relationships: []
      }
      bus_schedules: {
        Row: {
          arrival_time: string
          bus_number: string
          created_at: string
          days_of_week: string[] | null
          departure_time: string
          id: string
          is_active: boolean
          route_id: string
          updated_at: string
        }
        Insert: {
          arrival_time: string
          bus_number: string
          created_at?: string
          days_of_week?: string[] | null
          departure_time: string
          id?: string
          is_active?: boolean
          route_id: string
          updated_at?: string
        }
        Update: {
          arrival_time?: string
          bus_number?: string
          created_at?: string
          days_of_week?: string[] | null
          departure_time?: string
          id?: string
          is_active?: boolean
          route_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bus_schedules_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "bus_routes"
            referencedColumns: ["id"]
          },
        ]
      }
      bus_stops: {
        Row: {
          area: string | null
          created_at: string
          id: string
          latitude: number | null
          longitude: number | null
          stop_code: string | null
          stop_name: string
        }
        Insert: {
          area?: string | null
          created_at?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          stop_code?: string | null
          stop_name: string
        }
        Update: {
          area?: string | null
          created_at?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          stop_code?: string | null
          stop_name?: string
        }
        Relationships: []
      }
      buses: {
        Row: {
          bus_number: string
          created_at: string
          current_latitude: number | null
          current_longitude: number | null
          current_stop_id: string | null
          id: string
          last_updated: string | null
          route_id: string | null
          status: string | null
        }
        Insert: {
          bus_number: string
          created_at?: string
          current_latitude?: number | null
          current_longitude?: number | null
          current_stop_id?: string | null
          id?: string
          last_updated?: string | null
          route_id?: string | null
          status?: string | null
        }
        Update: {
          bus_number?: string
          created_at?: string
          current_latitude?: number | null
          current_longitude?: number | null
          current_stop_id?: string | null
          id?: string
          last_updated?: string | null
          route_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buses_current_stop_id_fkey"
            columns: ["current_stop_id"]
            isOneToOne: false
            referencedRelation: "bus_stops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "buses_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "bus_routes"
            referencedColumns: ["id"]
          },
        ]
      }
      route_stops: {
        Row: {
          arrival_time_offset: number | null
          created_at: string
          id: string
          route_id: string
          stop_id: string
          stop_order: number
        }
        Insert: {
          arrival_time_offset?: number | null
          created_at?: string
          id?: string
          route_id: string
          stop_id: string
          stop_order: number
        }
        Update: {
          arrival_time_offset?: number | null
          created_at?: string
          id?: string
          route_id?: string
          stop_id?: string
          stop_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "route_stops_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "bus_routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_stops_stop_id_fkey"
            columns: ["stop_id"]
            isOneToOne: false
            referencedRelation: "bus_stops"
            referencedColumns: ["id"]
          },
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
