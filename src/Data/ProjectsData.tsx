import * as TAGS from "./ProjectTagsData";
import {Project} from "../Objects/Interfaces";
import YoutubeItem from "../PlayAround/YoutubeTesting";
import Carousel from "react-material-ui-carousel";

export const GridBlade : Project = {
    name: "GridBlade",
    subtitle: "Learn linear algebra concepts through turn-based combat.",
    tags: [TAGS.Serious, TAGS.Playable],
    backgroundImage: "/images/other.jpg",
    about: "Gridblade is a puzzle-adventure game where players use linear algebra to slash enemies.fight monsters by intercepting them with lines. Upon beginning the first level the player encounters a friendly frog named Ribbit. Ribbit hands the player a weapon called the GridBlade, which has the power to slash lines in the air to strike enemies. Ribbit explains that the GridBlade requires commands to work, in the form of linear equations.",
    carouselItems: [

    ],
    experience: [
        ["Serious game design methodology", 3],
        ["Correllations between game design and pedagogy", 3],
        ["2D graphics programming", 2],
        ["Effective communication in agile development", 2], 
        ["Scriptable Objects", 1], 
        ["Exposure to games & graphics conferences", 1],
    ]
}

export const SteppingStones : Project = {
    name: "Stepping Stones",
    subtitle: "Solve colourful puzzles with Steppa the Rabbit.",
    tags: [TAGS.ForFun, TAGS.Commercial, TAGS.Playable],
    backgroundImage: "/images/Projects/SteppingStones/JustSteppa.jpg",
    about: 
        "Stepping Stones is a procedurally-generated puzzle game solved by controlling a rabbit named Steppa. Each time she steps on a Stepping Stone, it iterates to the next colour. I spent most of my design time refining the difficulty and timer algorithms. The intention was to create an accessible game anyone could play, while rewarding mastery with greater challenges and rewards. Stepping Stones is my first commercialised solo project, available now on both Google Play and iOS App Store",
    carouselItems: [

    ],
    experience: [
        ["Scoping for publishing-related tasks", 3], 
        ["App store release procedures", 3], 
        ["Game marketing approaches", 3],
        ["Prototyping with non-gamers", 2],
        ["Procedural generation", 2],
        ["Resilience", 2],
        ["Monetisation & business modelling", 1],
        ["Shader programming", 1],
    ]
}

export const SmartStep : Project = {
    name: "Smart±Step",
    subtitle: "A collection of exergames training balance and fall prevention.",
    tags: [TAGS.Serious, TAGS.Commercial],
    backgroundImage: "/images/other.jpg",
    about: "Rehabilitate. Falls & balance. Client Allity. Solo devloper. Software engineer. Revamping code.",
    carouselItems: [],
    experience: [
        ["Maintaining existing projects", 3],
        ["Documentation for developers and end-users", 3],
        ["Interface design for tech-inexperienced users", 2],
        ["Remote troubleshooting", 2],
        ["Git & version control management", 2],
        ["Agile team rituals", 2],
        ["Hardware & software system design", 2],
        ["Negotiating scope with clients", 2],
        ["Documenting with Jira and Confluence", 2],
        ["Networking with databases and web applications", 1],
        ["Shell scripting", 1],
        ["Learning from mistakes", 1],
        ["Data serialisation", 1],
    ]
}

export const ChoiceStepper : Project = {
    name: "Choice Stepper Reaction Test",
    subtitle: "A research tool assessing reaction time in varied stimuli conditions.",
    tags: [TAGS.Serious],
    backgroundImage: "",
    about: "revamp. new devices. UI. Export. Researcher tools.",
    carouselItems: [],
    experience: [
        ["Assessing feesability of legacy projects", 3],
        ["Hardware-related UI considerations", 2],
        ["Documentation for developers and end-users", 2],
        ["Git & version control management", 1],
        ["Agile team rituals", 1],
    ]
}

export const SallysApples : Project = {
    name: "Sally's Apples",
    subtitle: "Retrieve Stacy's lost apples in VR while training hazard perception.",
    tags: [TAGS.Serious],
    backgroundImage: "/other.jpg",
    about: "VR. Oculus. Vicon. Motek. Treadmill hardware. Data export. Teaching interns. Simulation.",
    carouselItems: [],
    experience: [
        ["VR design considerations", 3],
        ["3D Motion capture synchronisation", 3],
        ["VR programming", 2],
        ["Application networking via OSC", 2],
        ["Strategies in managing feature creep", 2],
        ["Task scale and  estimation", 2],
        ["Mentoring developer interns", 2],
        ["Lua programming", 1],
        ["Humanoid animation", 1],
    ]
}

export const LastIsland : Project = {
    name: "Last Island",
    subtitle: "Save the planet from destruction using real sustainability models.",
    tags: [TAGS.Serious],
    backgroundImage: "Research. Collaborate academics. Sustainability models. Co-authored paper.",
    about: "Last Island is a cooperative digtally-assisted board game for 1-4 players whose mission is to sustain the last livable place on Earth. By taking turns in placing structure tiles on the field, players attempt balance population, environment health and production in order to maintain its society. The game was an accompaniment to a co-authored research paper which explores the possibilities of sustainable futures through play.",
    carouselItems: [],
    experience: [
        ["Data modelling and visualisation", 3],
        ["Collaborative game design", 2],
        ["Playtesting for research data", 2],
    ]
}

export const DescendantOfSoul : Project = {
    name: "Descendant of Soul",
    subtitle: "Unleash an arsenal of elemental spells in a combat-focused adventure.",
    tags: [TAGS.ForFun],
    backgroundImage: "",
    about: "",
    carouselItems: [
        <YoutubeItem videoID="3xGINJpLSp8"/>
    ],
    experience: [
        ["Constructing game design documentation", 3],
        ["Scrum master for game developers and sound designers", 3],
        ["Scriptable Objects", 2],
        ["Procedural Animation", 2],
        ["Customising the Unity Editor", 2],
        ["Handling feature creep", 2],
        ["Maintenance of team morale", 2],
    ]
}

export const GetMeOut : Project = {
    name: "Get Me Out!",
    subtitle: "Escape gauntlets by apparating your own platforms.",
    tags: [TAGS.ForFun],
    backgroundImage: "",
    about: "Get Me Out! is a retro-inspired platformer. ",
    carouselItems: [
        <YoutubeItem videoID="b2gnY7oeugA"/>
    ],
    experience: [
        ["Task delegation", 3],
        ["Conflict resolution with divergent team members", 3],
        ["Agile user stories", 2],
        ["Object Pooling", 2],
        ["Game sound design", 2],
        ["Version control with Unity Collaborate", 2],
        ["Level design", 1],
        ["2D physics effectors", 1],
    ]
}

export const SpaceWars : Project = {
    name: "Space Wars",
    subtitle: "Blast your friends by firing projectiles in space.",
    tags: [TAGS.ForFun],
    backgroundImage: "",
    about: "",
    carouselItems: [
        <YoutubeItem videoID="tsTM33re0f4"/>,
        <YoutubeItem videoID="tsTM33re0f4"/>,
        //<img src="/images/SpaceWars/4player.png" alt="broken"/>
    ],
    experience: [
        ["Effective playtesting", 3],
        ["Empowering reserved personalities", 3],
        ["Physical prototyping", 2],
        ["2D physics effectors", 1],
    ]
}

export const WatchDesignerPro : Project = {
    name: "Watch Designer Pro",
    subtitle: "A Unity-based mobile app for customising personal watches.",
    tags: [TAGS.NonGame],
    backgroundImage: "",
    about: "",
    carouselItems: [],
    experience: [
        ["Bridging communication between a client and developers", 3],
        ["Mobile UI design and development", 2],
        ["3D modelling and tweening using BlendShapes", 2],
    ]
}

export const MusicCollection : Project = {
    name: "Music (Collection)",
    subtitle: "Listen in to some of my songs and jingles!",
    tags: [TAGS.NonGame],
    backgroundImage: "",
    about: "",
    carouselItems: [],
    experience: [
        ["Digital music composition", 3],
        ["Sound design", 1],
    ]
}

export const PachinkoTutorial : Project = {
    name: "Pachinko Tutorial",
    subtitle: "Create your own Pachinko game in this short course for Unity.",
    tags: [TAGS.NonGame],
    backgroundImage: "",
    about: "",
    carouselItems: [],
    experience: [
        ["Teach", 1]
    ]
}


// export const PROJECTS_DATA: Project[] = 
// [
//     GridBlade, SteppingStones, SmartStep, ChoiceStepper, SallysApples, LastIsland, 
//     DescendantOfSoul, GetMeOut, SpaceWars, WatchDesignerPro
// ];