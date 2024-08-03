import { StaticImageData } from 'next/image';

export interface Project {
	
	paragraphs: string[];
	tech: string[];
	source: string;
	live: string;
	youtubeUrl?: string;
	name: string;
	detail?: string;
}
