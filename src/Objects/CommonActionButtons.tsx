/**
 * Download CV
 * Play Game
 * Contact Me
 */

import { Button } from "@mui/material"
import { ActionInfo } from "./Interfaces"

interface ActionButtonProps {
    action : ActionInfo
}

export function ActionButton(props: ActionButtonProps){
    return(
        <Button href={props.action.link}>
            {props.action.label}
        </Button>
    )
}

export function OtherButton(){

    const contactMe : ActionInfo = {
        label: "",
        icon: <div/>,
        link: ""
    }

    return(
        <ActionButton action={contactMe} />
    )
}