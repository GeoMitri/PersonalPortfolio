import { ReactNode } from "react";

export interface Achievement {
    name: string;
    description: string;
}

export interface Tag {
    name: string;
    icon: ReactNode;
}

export interface Project {
    name: string;
    subtitle: string;
    tags: Tag[];
    backgroundImage: string;
    about: string;
    experience: [string, 1 | 2 | 3 ][];
    // rank: string;
    // evaluations: string[];
    carouselItems: ReactNode[]
}

// interface ProjectXP {
//     name: string;
//     xpLevel: 1 | 2 | 3;
// }