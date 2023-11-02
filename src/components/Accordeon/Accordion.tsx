import React from "react";
import {ItemType} from "../../App";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (value: any)=> void
}

export const Accordion = React.memo(AccordionS)

function AccordionS(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <>
        <AccordionTitle onClick={props.changeAccordionCollapsed} title={props.title}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </>

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo(AccordionTitleS)
function AccordionTitleS(props: AccordionTitlePropsType) {
    console.log('Accordion Title rendering')
    return (
        <h2 onClick={(e) => props.onClick()}>{props.title}</h2>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=> void
}

const AccordionBody = React.memo(AccordionBodyS)
function AccordionBodyS(props: AccordionBodyPropsType) {
    console.log('Accordion Body rendering')
    return (
        <ul style={{listStyle: 'none'}}>
            {props.items.map((i) => <li key={i.value} onClick={()=> {props.onClick(i.value)}}> {i.title} </li>)}
        </ul>
    )
}

// export default Accordion;