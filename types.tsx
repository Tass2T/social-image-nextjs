export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    email?: string;
}

export interface Image {
    id: number;
    created_at?: string;
    image_path?: string;
    likes: number;
    user_id: string;
    visible: boolean;
}

export interface Comment {
    content?: string;
    created_at: string;
    id: number;
    image_id?: number;
    user_id?: string;
    modified_at?: string | null;
}
