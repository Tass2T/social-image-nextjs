export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            comments: {
                Row: {
                    content: string | null;
                    created_at: string;
                    id: number;
                    image_id: number | null;
                    modified_at: string | null;
                    user_id: string | null;
                };
                Insert: {
                    content?: string | null;
                    created_at?: string;
                    id?: number;
                    image_id?: number | null;
                    modified_at?: string | null;
                    user_id?: string | null;
                };
                Update: {
                    content?: string | null;
                    created_at?: string;
                    id?: number;
                    image_id?: number | null;
                    modified_at?: string | null;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'comments_image_id_fkey';
                        columns: ['image_id'];
                        isOneToOne: false;
                        referencedRelation: 'images';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'comments_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    },
                ];
            };
            images: {
                Row: {
                    created_at: string;
                    id: number;
                    image_path: string | null;
                    likes: number | null;
                    user_id: string | null;
                    visible: boolean | null;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    image_path?: string | null;
                    likes?: number | null;
                    user_id?: string | null;
                    visible?: boolean | null;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    image_path?: string | null;
                    likes?: number | null;
                    user_id?: string | null;
                    visible?: boolean | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'images_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    },
                ];
            };
            users: {
                Row: {
                    avatar_url: string | null;
                    email: string | null;
                    full_name: string | null;
                    id: string;
                };
                Insert: {
                    avatar_url?: string | null;
                    email?: string | null;
                    full_name?: string | null;
                    id: string;
                };
                Update: {
                    avatar_url?: string | null;
                    email?: string | null;
                    full_name?: string | null;
                    id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'users_id_fkey';
                        columns: ['id'];
                        isOneToOne: true;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    },
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
