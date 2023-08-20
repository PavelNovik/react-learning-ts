import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordeon randering')
    return !props.collapsed ? (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    ) : (
        <>
            <AccordionTitle title={props.title}/>
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordeon Title randering')
    return (
        <h2>{props.title}</h2>
    )
}

function AccordionBody() {
    console.log('Accordeon Body randering')
    return (
        <ul>
            <li>1</li>
            <li> 2</li>
            <li> 3</li>
            <li> 4</li>
            <li> 5</li>
        </ul>
    )
}

export default Accordion;