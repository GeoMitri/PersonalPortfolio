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
    description: string;
    tags: Tag[];
    backgroundImage: string; //??
}