import { Tech } from './tech';

export interface Topic {
    id?: string;
    title: string;
    summary: string;
    content: string;
    icon: string;
    tech: Tech[];
}
