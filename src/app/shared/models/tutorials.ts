export interface TutorialAuthor {
    name: string;
    avatar?: string;
    id?: number;
}
export type TutorialAction = 'created' | 'edit-body' | 'delete' | 'edit-title';
export interface Tutorial {
    id?: number;
    title?: string;
    action?: TutorialAction;
    title_link?: string;
    author?: TutorialAuthor;
    editors?: TutorialAuthor[];
    created_at?: string;
    updated_at?: string;
    likes?: number;
    comments?: number;
    body?: string;
    likes_count?: number;
    comments_count?: number;
}
