import { Tech } from './tech';
import { Company } from './company';

export interface Project {
    title: string;
    description: string;
    tech: Tech[];
    company: Company;
}