import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeAccordionCollapsed: () => void
}


function Accordion(props: AccordionPropsType) {
    // console.log('Accordion rendering')
    return <>
            <AccordionTitle onClick={props.changeAccordionCollapsed} title={props.title}/>
            { !props.collapsed && <AccordionBody/>}
        </>

}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('Accordion Title rendering')
    return (
        <h2 onClick={props.onClick}>{props.title}</h2>
    )
}

function AccordionBody() {
    // console.log('Accordion Body rendering')
    return (
        <ul>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
            <li> 4 </li>
            <li> 5 </li>
        </ul>
    )
}

export default Accordion;