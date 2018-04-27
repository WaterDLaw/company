import { Tech } from './tech';
import { Company } from './company';
import { Topic } from './topic';
import { Device } from './device';

export interface Project {
    title: string;
    description: string;
    tech: Tech[];
    featured: boolean;
    image: string;
    company: Company;
    topic: Topic;
    devices: Device[];
}
