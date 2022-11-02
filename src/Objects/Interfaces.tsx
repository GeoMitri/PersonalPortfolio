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
}

export interface ActionInfo {
    label: string;
    icon: ReactNode | null;
    link: string;
    //colour
    //button variant
} 