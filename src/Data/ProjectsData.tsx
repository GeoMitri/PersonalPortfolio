import * as TAGS from "./ProjectTagsData";
import {Project} from "../Objects/Interfaces";
import YoutubeItem from "../Components/Project/ProjectTemplate-YoutubeItem";
import Carousel from "react-material-ui-carousel";

export const GridBlade : Project = {
    name: "GridBlade",
    subtitle: "Learn linear algebra concepts through turn-based combat.",
    tags: [TAGS.Serious, TAGS.Playable],
    backgroundImage: "/images/Projects/Gridblade/GridBladePoster.png",
    about: "Gridblade is a puzzle-adventure game where players use linear algebra to slash enemies. After falling into a dark cave you find a helpful frog called Ribbit. Ribbit hands you a weapon called the GridBlade, which has the power to slash lines in the air to strike enemies. The GridBlade requires enchants in the form of linear equations to work. The game was an accompaniment to a solo research paper which establishes direct correllations between game design and pedagogy.",
    carouselItems: [
        <img src="/images/Projects/Gridblade/gbs.JPG.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
        <img src="/images/Projects/Gridblade/GridBladeRepresentativeImage.JPG.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
        <img src="/images/Projects/Gridblade/GridBladePoster.png" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
    ],
    experience: [
        ["Serious game design methodologies", 3],
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
    backgroundImage: "/images/Projects/SmartStep/Linda-Step-Mat.png",
    about: "Smart±Step is a collection of exergames played with a dance mat, designed to reduce falls risk in older people. After the systems were used for neuroscience research, the system needed to be updated and distributed for commercialisation. New features include multi-user support, automatic system updating, remote troubleshooting tools and a high score system. Now, Smart±Step is set up in 50+ aged care homes across Australia.",
    carouselItems: [
        <img src="/images/Projects/SmartStep/MainMenu.png" height={390} width={640} alt="broken"/>,
        <img src="/images/Projects/SmartStep/Linda-Step-Mat.png" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
        <img src="/images/Projects/SmartStep/Training2.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
    ],
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
    backgroundImage: "/images/Projects/CSRT/1.jpg",
    about: "The Choice Stepper Reaction Time software a compilation of tasks used for researchers to test reaction times on participants' feet. Players step on arrows on a mat corresponding to instructions on screen. Variations include incongruence with distrating elements (e.g. a Left arrow labeled as \"Right\") and \"catcing\" arrows that fall with gravity. The project was once using legacy code, which prompted a decision to remake the software from scratch.",
    carouselItems: [
        <img src="/images/Projects/CSRT/0.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
        <img src="/images/Projects/CSRT/1.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
        <img src="/images/Projects/CSRT/Training1.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,
    ],
    experience: [
        ["Planning progress on existing projects", 3],
        ["Hardware-related UI considerations", 2],
        ["Documentation for developers and end-users", 2],
        ["Git & version control management", 1],
        ["Agile team rituals", 1],
    ]
}

export const SallysApples : Project = {
    name: "Sally's Apples VR",
    subtitle: "Retrieve Stacy's lost apples in VR while training hazard perception.",
    tags: [TAGS.Serious],
    backgroundImage: "/images/Projects/SallysApples/HomeScreen(2).JPG",
    about: "Sally’s Apples VR is an exergame project designed to train hazard recognition and avoidance for the elderly. Along with the headset, the equipment also includes a motion capture system and an advanced dual-belt treadmill. In VR, players walk along a footpath while collecting floating apples with their hands. Players must avoid trip/slip hazards at their feet, otherwise, treadmill will cause a perturbation. The game was an accompaniment to a research project which assesses the impact of perturbations on balance safety in a simulated environment.",
    carouselItems: [
        <YoutubeItem videoID="y0Pc--_MUwo"/>,
        <img src="/images/Projects/SallysApples/HomeTitle.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/SallysApples/Obstacle.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/SallysApples/ResearcherView.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/SallysApples/Shovel_001.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
    ],
    experience: [
        ["VR design considerations", 3],
        ["3D Motion capture synchronisation", 3],
        ["VR programming", 2],
        ["Application networking via OSC", 2],
        ["Strategies in managing feature creep", 2],
        ["Task scale and  estimation", 2],
        ["Mentoring developer interns", 2],
        ["Augmented Reality programming", 1],
        ["Lua programming", 1],
    ]
}

export const LastIsland : Project = {
    name: "Last Island",
    subtitle: "Save the planet from destruction using real sustainability models.",
    tags: [TAGS.Serious],
    backgroundImage: "/images/Projects/LastIsland/state1.jpg",
    about: "Last Island is a cooperative digtally-assisted board game for 1-4 players whose mission is to sustain the last livable place on Earth. By taking turns in placing structure tiles on the field, players attempt balance population, environment health and production in order to maintain its society. The game was an accompaniment to a co-authored research paper which explores the possibilities of sustainable futures through play.",
    carouselItems: [
        <img src="/images/Projects/LastIsland/state1.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/LastIsland/table.jpg" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/LastIsland/a.png" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/LastIsland/LastIslandLogo(2).png" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
    ],
    experience: [
        ["Data modelling and visualisation", 3],
        ["Collaboration on game design", 2],
        ["Adapting to research requirements", 2],
        ["Playtesting for data collection", 1],
    ]
}

export const DescendantOfSoul : Project = {
    name: "Descendant of Soul",
    subtitle: "Unleash an arsenal of elemental spells in a combat-focused adventure.",
    tags: [TAGS.ForFun],
    backgroundImage: "/images/Projects/DescendantOfSoul/Screenshot2(2).JPG",
    about: "Descendant Of Soul is a 3D action-adventure where you play as a character named Dos. Being the daughter of a weaponsmith and an elementalist, she harnesses both skills to defeat a team of bosses and discover her past. The game features a skill tree for different spells, allowing players to explore different combos and playstyles. ",
    carouselItems: [
        <YoutubeItem videoID="3xGINJpLSp8"/>,
        <img src="/images/Projects/DescendantOfSoul/Screenshot1.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/DescendantOfSoul/Screenshot2.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/DescendantOfSoul/Screenshot3.JPG" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
        <img src="/images/Projects/DescendantOfSoul/dosPoster.png" height={390} width={640} style={{objectFit:"contain"}} alt="broken"/>,        
    ],
    experience: [
        ["Constructing game design documentation", 3],
        ["Scrum master for game developers and sound designers", 3],
        ["Scriptable Objects", 2],
        ["Procedural Animation", 2],
        ["Customising the Unity Editor", 2],
        ["Handling feature creep", 2],
        ["Maintenance of team morale", 2],
        ["Humanoid animation", 1],
    ]
}

export const GetMeOut : Project = {
    name: "Get Me Out!",
    subtitle: "Escape gauntlets by apparating your own platforms.",
    tags: [TAGS.ForFun],
    backgroundImage: "/images/Projects/GetMeOut/Image.png",
    about: "Get Me Out! is a retro-inspired platformer where players add their own platforms to complete each level.",
    carouselItems: [
        <YoutubeItem videoID="b2gnY7oeugA"/>
    ],
    experience: [
        ["Agile user stories", 3],
        ["Conflict resolution with divergent team members", 3],
        ["Task delegation", 2],
        ["Game sound design", 2],
        ["Version control with Unity Collaborate", 2],
        ["Object pooling", 1],
        ["Level design", 1],
        ["2D physics effectors", 1],
    ]
}

export const SpaceWars : Project = {
    name: "Space Wars",
    subtitle: "Blast your friends by firing projectiles in space.",
    tags: [TAGS.ForFun],
    backgroundImage: "/images/Projects/SpaceWars/4player.png",
    about: "Space Wars is a multiplayer turn-based strategy game played in space. Each turn, players can either fire at their enemies, or blast themselves on another planet. One core element of the challenge is to fire projectiles guided by the orbit of surrounding planets. This was one of the first Unity games I completed in a group of students.",
    carouselItems: [
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
    backgroundImage: "/images/Projects/WatchDesignerPro/w2Cropped.png",
    about: "Watch Designer Pro is a proof-of-concept mobile application where users customise their own watch face to later be 3D printed in production. The development approach was founded on \"blend shapes\", which allowed different variations of a watch face to be tweened between. This project was in collaboration with commercial partners at the University of Technology.",
    carouselItems: [],
    experience: [
        ["Communicating between a client and developers", 3],
        ["Mobile UI design and development", 2],
        ["Mesh deformation using BlendShapes", 2],
        ["Business considerations for software", 1],
    ]
}

export const MusicCollection : Project = {
    name: "Music (Collection)",
    subtitle: "Listen in to some of my songs and jingles!",
    tags: [TAGS.NonGame],
    backgroundImage: "/images/Projects/Music.png",
    about: "Music production is a little hobby of mine! I have been producing music as a past-time for about 10 years. I've enjoyed exploring different styles, moods and purpoes. Occasionally I use my music for games I produce, though I am yet to commit myself to the craft professionally. I would describe my comfort style as Electronica, Synth-Pop and Shoegaze.",
    carouselItems: [],
    experience: [
        ["Digital music composition", 3],
        ["Sound design", 1],
    ]
}

// export const PachinkoTutorial : Project = {
//     name: "Pachinko Tutorial",
//     subtitle: "Create your own Pachinko game in this short course for Unity.",
//     tags: [TAGS.NonGame],
//     backgroundImage: "",
//     about: "",
//     carouselItems: [],
//     experience: [
//         ["Teach", 1]
//     ]
// }


// export const PROJECTS_DATA: Project[] = 
// [
//     GridBlade, SteppingStones, SmartStep, ChoiceStepper, SallysApples, LastIsland, 
//     DescendantOfSoul, GetMeOut, SpaceWars, WatchDesignerPro
// ];