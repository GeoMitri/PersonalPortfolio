/**
 * Download CV
 * Play Game
 * Contact Me
 */

import { Button } from "@mui/material"
import { ReactNode } from "react"

interface ActionButtonProps {
    label : string,
    link : string,
    icon? : ReactNode
    color : "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | "player1" | "player2" | "player3" | "player4" | "neutral" | undefined
}

export function ActionButton(props: ActionButtonProps){
    return(
        <Button href={props.link} color={props.color}>
            {props.label}
        </Button>
    )
}

// export function ContactButton(){
//     return(
//         <ActionButton label="Contact Me!" link="" color="player4"/>
//     )
// }