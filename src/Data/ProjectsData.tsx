import * as TAGS from "./ProjectTagsData";
import {Project} from "../Objects/Interfaces";
import YoutubeItem from "../Components/Project/ProjectTemplate-YoutubeItem";
import Carousel from "react-material-ui-carousel";
import { Button, Card, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { red } from "@mui/material/colors";
import CollectionItem from "../Components/Project/ProjectTemplate-CollectionItem";

const sizes = {
    xsH: 390/2,
    xsW: 640/2,
    msH: 390,
    msW: 640,
}

export const GridBlade : Project = {
    name: "GridBlade",
    subtitle: "Learn linear algebra concepts through turn-based combat.",
    tags: [TAGS.Serious, TAGS.Playable, TAGS.Favourite],
    backgroundImage: "/images/Projects/Gridblade/GridBladePoster.png",
    about: "Gridblade is a puzzle-adventure game where players use linear algebra to slash enemies. After falling into a dark cave you find a helpful frog called Ribbit. Ribbit hands you a weapon called the GridBlade, which has the power to slash lines in the air to strike enemies. The GridBlade requires enchants in the form of linear equations to work. The game was an accompaniment to a solo research paper which establishes direct correllations between game design and pedagogy.",
    carouselItems: [
        <img src="/images/Projects/Gridblade/gbs.JPG.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/Gridblade/GridBladeRepresentativeImage.JPG.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/Gridblade/GridBladePoster.png" style={{ objectFit: "contain", height:"100%", width:"100%"}} alt="broken" />,
    ],
    experience: [
        ["Serious game design methodologies", 3],
        ["Correllations between game design and pedagogy", 3],
        ["2D graphics programming", 2],
        ["Effective communication in agile development", 2],
        ["Scriptable Objects", 1],
        ["Exposure to games & graphics conferences", 1],
    ],
    ExternalItems: <>
        <Button size="large" href="https://e9a96fb5-1520-448c-8f80-77dad0462b21.filesusr.com/ugd/85ed56_6f214b46acd547f2a51fc2cd7930e1be.pdf" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>        
            <Typography color={"neutral.light"}>
                Short Paper
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/1MSAYDrDfmz_a7jrG8Xbc-AqfiWk-znIS/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>        
            <Typography color={"neutral.light"}>
                Design Proposal
            </Typography>
        </Button>
        <Button size="large" href="https://sorzee.itch.io/gridblade" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <SportsEsportsIcon/>        
            <Typography color={"neutral.light"}>
                Play
            </Typography>
        </Button>
    </>}

export const SteppingStones : Project = {
    name: "Stepping Stones",
    subtitle: "Solve colourful puzzles with Steppa the Rabbit.",
    tags: [TAGS.ForFun, TAGS.Commercial, TAGS.Playable, TAGS.Favourite],
    backgroundImage: "/images/Projects/SteppingStones/JustSteppa.jpg",
    about: "Stepping Stones is a procedurally-generated puzzle game solved by controlling a rabbit named Steppa. Each time she steps on a Stepping Stone, it iterates to the next colour. I spent most of my design time refining the difficulty and timer algorithms. The intention was to create an accessible game anyone could play, while rewarding mastery with greater challenges and rewards. Stepping Stones is my first commercialised solo project, available now on both Google Play and iOS App Store",
    carouselItems: [
        <YoutubeItem videoID="Si7zGLAJ8Eo" />,
        <img src="/images/Projects/SteppingStones/BeeHard.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/SteppingStones/SSShop.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
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
    ],
    ExternalItems: <>
        <Button size="large" href="https://apps.apple.com/au/app/stepping-stones-puzzles/id1566840554" target="_blank" variant="contained" color="player2" sx={{margin:1}}>
            <SportsEsportsIcon/>
            <Typography color={"neutral.light"}>
                iOS
            </Typography>
        </Button>
        <Button size="large" href="https://play.google.com/store/apps/details?id=com.Sorzee.SteppingStones&hl=en&gl=US" target="_blank" variant="contained" color="player2" sx={{margin:1}}>
            <SportsEsportsIcon/>
            <Typography color={"neutral.light"}>
                Android
            </Typography>
        </Button>

    </>
}

export const SmartStep : Project = {
    name: "Smart±Step",
    subtitle: "A collection of exergames training balance and fall prevention.",
    tags: [TAGS.Serious, TAGS.Commercial],
    backgroundImage: "/images/Projects/SmartStep/Linda-Step-Mat.png",
    about: "Smart±Step is a collection of exergames played with a dance mat, designed to reduce falls risk in ageing people. After the systems were used for neuroscience research, the system needed to be updated and distributed for commercialisation. New features include multi-user support, automatic system updating, remote troubleshooting tools and a high score system. Now, Smart±Step is set up in 50+ aged care homes across Australia.",
    carouselItems: [
        <img src="/images/Projects/SmartStep/MainMenu.png" height={390} width={640} alt="broken" />,
        <img src="/images/Projects/SmartStep/Linda-Step-Mat.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/SmartStep/Training2.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
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
    ],
    ExternalItems: <>
        <Button size="large" href="https://neura.edu.au/news-media/media-releases/older-aussies-turn-to-video-games-to-improve-balance-and-brain-function" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Read More
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/1vT31pzJeWVodoHMG67wSywTBn21pshLp/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Troubleshooting Guide
            </Typography>
        </Button>
    </>
}

export const ChoiceStepper : Project = {
    name: "Choice Stepper Reaction Test",
    subtitle: "A research tool assessing reaction time in varied stimuli conditions.",
    tags: [TAGS.Serious],
    backgroundImage: "/images/Projects/CSRT/1.JPG",
    about: "The Choice Stepper Reaction Time software a collection of sub-tasks used for researchers to test reaction times on participants' feet. Players step on arrows on a mat corresponding to instructions on screen. Variations include incongruence with distrating elements (e.g. a Left arrow labeled as \"Right\") and \"catcing\" arrows that fall with gravity. The project was once using legacy code, which prompted a decision to remake the software from scratch.",
    carouselItems: [
        <img src="/images/Projects/CSRT/0.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/CSRT/1.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/CSRT/Training1.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
    ],
    experience: [
        ["Planning progress on existing projects", 3],
        ["Hardware-related UI considerations", 2],
        ["Documentation for developers and end-users", 2],
        ["Git & version control management", 1],
        ["Agile team rituals", 1],
    ],
    ExternalItems: undefined
}

export const SallysApples : Project = {
    name: "Sally's Apples VR",
    subtitle: "Retrieve Stacy's lost apples in VR while training hazard perception.",
    tags: [TAGS.Serious, TAGS.Favourite],
    backgroundImage: "/images/Projects/SallysApples/HomeScreen(2).JPG",
    about: "Sally’s Apples VR is an exergame project designed to train hazard recognition and avoidance for the elderly. Along with the headset, the equipment also includes a motion capture system and an advanced dual-belt treadmill. In VR, players walk along a footpath while collecting floating apples with their hands. Players must avoid trip/slip hazards at their feet, otherwise, treadmill will cause a perturbation. The game was an accompaniment to a research project which assesses the impact of perturbations on balance safety in a simulated environment.",
    carouselItems: [
        <YoutubeItem videoID="y0Pc--_MUwo" />,
        <img src="/images/Projects/SallysApples/HomeTitle.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/SallysApples/Obstacle.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/SallysApples/ResearcherView.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/SallysApples/Shovel_001.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
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
    ],
    ExternalItems: undefined
}

export const LastIsland : Project = {
    name: "Last Island",
    subtitle: "Save the planet from destruction using real sustainability models.",
    tags: [TAGS.Serious, TAGS.Favourite],
    backgroundImage: "/images/Projects/LastIsland/state1.jpg",
    about: "Last Island is a cooperative digtally-assisted board game for 1-4 players whose mission is to sustain the last livable place on Earth. By taking turns in placing structure tiles on the field, players attempt to balance population, environment health and production in order to maintain its society. The game was an accompaniment to a co-authored research paper which explores the possibilities of sustainable futures through play.",
    carouselItems: [
        <img src="/images/Projects/LastIsland/state1.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/LastIsland/l5.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/LastIsland/table.jpg" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/LastIsland/a.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/LastIsland/LastIslandLogo(2).png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
    ],
    experience: [
        ["Data modelling and visualisation", 3],
        ["Collaboration on game design", 2],
        ["Adapting to research requirements", 2],
        ["Playtesting for data collection", 2],
    ],
    ExternalItems: <>
        <Button size="large" href="https://dl.acm.org/doi/pdf/10.1145/3290688.3290746?casa_token=jpG8lzG1qTgAAAAA:ZeNq_i4uTvA9kmv40t4sLng08ZrCTZqrh9IF5rfaAk_PJz2knkrW35kqvJ02mQiuEUQ2sBw5DT8" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Short Paper
            </Typography>
        </Button>
        <Button size="large" href="https://e9a96fb5-1520-448c-8f80-77dad0462b21.filesusr.com/ugd/85ed56_4232b68004db41929c9b9581169f1f3d.pdf" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Rulebook
            </Typography>
        </Button>
        <Button size="large" href="https://e9a96fb5-1520-448c-8f80-77dad0462b21.filesusr.com/ugd/85ed56_8ea7a96b9b294c7896b02b44c41effe4.pdf" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Printouts
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/15wYMUg-w8QHDsIQA5qmgVT3dt-MxqtGK/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Player Questionnaire
            </Typography>
        </Button>
        <Button size="large" href="https://e9a96fb5-1520-448c-8f80-77dad0462b21.filesusr.com/archives/85ed56_e4264b7dca71453b97f8c23352bee6b6.zip?dn=Last%20Island%20Windows%20Edition.zip" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <DownloadIcon/>
            <Typography color={"neutral.light"}>
                Digital Assistant
            </Typography>
        </Button>
    </>
}

export const DescendantOfSoul : Project = {
    name: "Descendant of Soul",
    subtitle: "Unleash an arsenal of elemental spells in a combat-focused adventure.",
    tags: [TAGS.ForFun],
    backgroundImage: "/images/Projects/DescendantOfSoul/Screenshot2(2).JPG",
    about: "Descendant Of Soul is a 3D action-adventure where you play as a character named Dos. Being the daughter of a weaponsmith and an elementalist, she harnesses both skills to defeat a team of bosses and discover her past. The game features a skill tree for different spells, allowing players to explore different combos and playstyles. ",
    carouselItems: [
        <YoutubeItem videoID="3xGINJpLSp8" />,
        <img src="/images/Projects/DescendantOfSoul/Screenshot1.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/DescendantOfSoul/Screenshot2.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/DescendantOfSoul/Screenshot3.JPG" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/DescendantOfSoul/dosPoster.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
    ],
    experience: [
        ["Constructing game design documentation", 3],
        ["Scrum master for game developers and sound designers", 3],
        ["Scriptable Objects", 2],
        ["Procedural Animation", 2],
        ["Unity custom editors", 2],
        ["Handling feature creep", 2],
        ["Maintenance of team morale", 2],
        ["Humanoid animation", 1],
    ],
    ExternalItems: <>
        <Button size="large" href="https://drive.google.com/file/d/1mSxvRLF6F5OQviDkiBclQnbNuBwi4xx9/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Design Pitch
            </Typography>
        </Button>
    </>
}

export const GetMeOut : Project = {
    name: "Get Me Out!",
    subtitle: "Escape gauntlets by apparating your own platforms.",
    tags: [TAGS.ForFun, TAGS.Playable],
    backgroundImage: "/images/Projects/GetMeOut/Image.png",
    about: "Get Me Out! is a retro-inspired platformer where players add their own platforms to complete each level. Traverse three different worlds with increasingly difficult puzzles and obstacles while revisiting classic arcade-style levels.",
    carouselItems: [
        <YoutubeItem videoID="b2gnY7oeugA" />
    ],
    experience: [
        ["Agile methodology and user stories", 3],
        ["Team conflict resolution", 3],
        ["Task delegation", 2],
        ["Brainstorming techniques", 2],
        ["Game sound design", 2],
        ["Version control with Unity Collaborate", 2],
        ["Object pooling", 1],
        ["Level design", 1],
        ["2D physics effectors", 1],
    ],
    ExternalItems: <>
        <Button size="large" href="https://drive.google.com/file/d/1GoKre_UGTZ4HS6jPwFObusALHIHT1jj8/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Sprint Report
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/open?id=1y0-enKzeFqmb75_nWKY9N5vwgA2EEAYD" variant="contained" color="player2" sx={{margin:1}}>
            <SportsEsportsIcon/>
            <Typography color={"neutral.light"}>
                Download (Windows)
            </Typography>
        </Button>
    </>}

export const SpaceWars : Project = {
    name: "Space Wars",
    subtitle: "Blast your friends by firing projectiles in space.",
    tags: [TAGS.ForFun, TAGS.Playable],
    backgroundImage: "/images/Projects/SpaceWars/4player.png",
    about: "Space Wars is a multiplayer turn-based strategy game played in space. Each turn, players can either fire at their enemies, or blast themselves on another planet. One core element of the challenge is to fire projectiles guided by the orbit of surrounding planets. This was one of the first Unity games I completed in a group of students.",
    carouselItems: [
        <YoutubeItem videoID="tsTM33re0f4" />,
    ],
    experience: [
        ["Effective playtesting", 3],
        ["Empowering reserved personalities", 3],
        ["Physical prototyping", 2],
        ["2D physics effectors", 1],
    ],
    ExternalItems: <>
        <Button size="large" href="https://drive.google.com/file/d/1a_29aNhy9r6kUT8HKCgNjAUU0wDl5qrh/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Design Diary
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/1CtmSEtRkz7vro8b6Z7z5tkCj4VN6pgN8/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
            <DownloadIcon/>
            <Typography color={"neutral.light"}>
                Download (Windows)
            </Typography>
        </Button>
    </>
}

export const WatchDesignerPro : Project = {
    name: "Watch Designer Pro",
    subtitle: "A Unity-based mobile app for customising personal watches.",
    tags: [TAGS.NonGame],
    backgroundImage: "/images/Projects/WatchDesignerPro/w2Cropped.png",
    about: "Watch Designer Pro is a proof-of-concept mobile application where users customise their own watch face to later be 3D printed in production. The development approach was founded on \"blend shapes\", which allowed different variations of a watch face to be tweened between. This project was in collaboration with commercial partners at the University of Technology.",
    carouselItems: [
        <img src="/images/Projects/WatchDesignerPro/w1.PNG.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/WatchDesignerPro/w2.PNG.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
    ],
    experience: [
        ["Communicating between a client and developers", 3],
        ["Maintaining project documentation", 2],
        ["Mobile UI design and development", 2],
        ["Mesh deformation using BlendShapes", 2],
        ["Jira and Confluence proficiency", 1],
        ["Business considerations for software", 1],
    ],
    ExternalItems: <>
        <Button size="large" href="https://drive.google.com/file/d/1aLBBqg2i99Eyq4Z4y-J5LsKOvJK-a-xA/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Meeting Minutes
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/1VpHeB-052alinuNEgRD_6alC4EJ3-bHu/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Design Diary
            </Typography>
        </Button>
    </>
}

export const AcademicCollection : Project = {
    name: "Academic Collection",
    subtitle: "Some of game design research and educational work at UTS.",
    tags: [TAGS.NonGame],
    backgroundImage: "/images/Projects/AcademicCollection/ClassPamorama.JPG",
    about: "As a tutor at the University of Technology, I produced a few items that explore game design without a developed game. I have them all bundled here.",
    carouselItems: [
        <img src="/images/Projects/AcademicCollection/ClassPamorama.JPG" style={{ objectFit: "cover", height:"100%", width:"100%" }} alt="broken" />,
    ],
    experience: [
        ["Academic and professional communication", 2],
        ["Game design philosophy", 2],
        ["Empathy for learning experiences", 1],
        ["Ambition to learn and educate", 1],
    ],
    ExternalItems: <>
        <CollectionItem 
        title={"Teaching Resources"} 
        description={"As a UTS tutor and ambassador I was responsible for delivering Unity design and development tutorals and workshops. My content has been delivered to undergraduate and postgraduate students, multimedia industry professionals and high school students."}
        externalItems={
            <>
                <Button size="large" href="https://drive.google.com/file/d/1g-hTEVThHAmMj0XoKonI0Aih74AdOHIf/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
                    <OpenInNewIcon/>
                    <Typography color={"neutral.light"}>
                        Playtesting: Common Mistakes
                    </Typography>
                </Button>
                <Button size="large" href="https://drive.google.com/file/d/1gKYCmmXmckcYT-VCRLmIfyD_LKPTt3lO/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
                    <OpenInNewIcon/>
                    <Typography color={"neutral.light"}>
                        Pachinko Tutorial
                    </Typography>
                </Button>
                <Button size="large" href="https://docs.google.com/presentation/d/1CoLMt5Rz4eIQ22B9YkIlKkEfCpD7Nl_Z/edit?usp=sharing&ouid=102356558400890477406&rtpof=true&sd=true" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
                    <OpenInNewIcon/>
                    <Typography color={"neutral.light"}>
                        3D Platforming Workshop
                    </Typography>
                </Button>
            </>}
        />
        <CollectionItem 
        title={"Resarch Project: Memories in Competitive Games"} 
        description={"As more personal posessions become digitised, the significance of physical keepsake objects has been put into question. My research makes a comparison between physical items from sports and digital rewards in competitive digital games, and how their physical nature makes an impact on our memory recollection and sense of achievement."} 
        externalItems={
            <>
                <Button size="large" href="https://drive.google.com/file/d/1QFI6WVGWyGG1_0y3CM4vniYT_6xYTdUf/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
                    <OpenInNewIcon/>
                    <Typography color={"neutral.light"}>
                        Research Paper
                    </Typography>
                </Button>
                <Button size="large" href="https://drive.google.com/file/d/1dT4S5TBdkVLiqrPBzGVanRxY1hnxU9UA/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}}>
                    <OpenInNewIcon/>
                    <Typography color={"neutral.light"}>
                        Poster
                    </Typography>
                </Button>
            </>}
        />
    </>
}

export const ProjectBattle : Project = {
    name: "Project Battle",
    subtitle: "A WIP turn-based tactical game involving weapons, elements and friends.",
    tags: [TAGS.ForFun],
    backgroundImage: "/images/Projects/BattleParty/PBScreenshot1.png",
    about: "Project Battle is a prototype for a tactical turn-based game where 2-4 players engage in combat for team victory. Each character has their own weapons and spells but can gather more for a tailored and dynamic gameplay experience. Alongside game design documentation, a Unity networking prototype was built. This also included a card-printing pipeline, translating datasheets into a printable image format. After refining my career goals towards serious games, I reluctantly decided to shelve the project for the time being.",
    carouselItems: [
        <img src="/images/Projects/BattleParty/PBScreenshot1.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/BattleParty/image23.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/BattleParty/Characters+UltsNoArt.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
        <img src="/images/Projects/BattleParty/BPCardBacks.png" style={{ objectFit: "contain", height:"100%", width:"100%" }} alt="broken" />,
    ],
    experience: [
        ["Iterative prototyping methodologies", 3],
        ["Prototyping using Tabletop Simulator", 2],
        ["Networking with industry professionals", 2],
        ["Digital games market analysis", 2],
        ["Unity UI for physical prototyping", 2],
        ["Tabletop game UX", 2],
        ["Unity network progamming and architecture", 2],
        ["Unity custom editors", 2],
        ["3D humanoid modelling, rigging and animation", 2],
        ["Digital publishing and storefront requirements", 1],
        ["Player empathy", 1],
        ["Considerations for prototyping mediums", 1],
        ["Data collection", 1],
        ["Community engagement", 1],
        ["Markdown notation", 1],
    ],
    ExternalItems: <>
        <Button size="large" href="https://docs.google.com/presentation/d/1NgSJI30H0DOfXR6d1FyzvkMWUZ78pEwJNNaFBVx7M-k/edit?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Quick Start Guide
            </Typography>
        </Button>
        <Button size="large" href="https://docs.google.com/spreadsheets/d/1iKXxFW5HaoAdzWcTGSBDosv8N3rgXLkEQZgnA5ILsDU/edit?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Design Pillars
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/1-A3jmou0woooXiioapFcQ2LJs320ErA_/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Playtest Sample 1 
            </Typography>
        </Button>
        <Button size="large" href="https://drive.google.com/file/d/1kU6SalQ_yqyY9LuSHcR45qoIXaPBJ67-/view?usp=sharing" variant="contained" color="player2" target="_blank" sx={{margin:1}} >
            <OpenInNewIcon/>
            <Typography color={"neutral.light"}>
                Playtest Sample 2
            </Typography>
        </Button>
    </>
}

// export const MusicCollection : Project = {
//     name: "Music (Collection)",
//     subtitle: "Listen in to some of my songs and jingles!",
//     tags: [TAGS.NonGame],
//     backgroundImage: "/images/Projects/Music.png",
//     about: "Music production is a little hobby of mine! I have been producing music as a past-time for about 10 years. I've enjoyed exploring different styles, moods and purpoes. Occasionally I use my music for games I produce, though I am yet to commit myself to the craft professionally. I would describe my comfort style as Electronica, Synth-Pop and Shoegaze.",
//     carouselItems: [],
//     experience: [
//         ["Digital music composition", 3],
//         ["Sound design", 1],
//     ],
//     ExternalItems: undefined
// }

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