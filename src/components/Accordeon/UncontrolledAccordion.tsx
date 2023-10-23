import React, {useState} from 'react';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionPropsType = {
    title: string

}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const onCLickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }


    return <>
        <AccordionTitle onClick={onCLickHandler} title={props.title}/>
        {!isCollapsed && <AccordionBody/>}
    </>

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={props.onClick}>{props.title}</h2>
    )
}

function AccordionBody() {
    return (
        <ul style={{listStyle: 'none'}}>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
            <li> 4 </li>
            <li> 5 </li>
        </ul>
    )
}

// export default UncontrolledAccordion;