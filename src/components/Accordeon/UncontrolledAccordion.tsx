import React, {useState} from 'react';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionPropsType = {
    title: string

}
type AccordionBodyPropsType = {
    items: string[]

}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const items = ['Pawel', 'Lera', 'Hleb', 'Vera', 'Tanya', 'Lena', 'Siarhey']
    const [isCollapsed, setIsCollapsed] = useState(true)
    const onCLickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }


    return <>
        <AccordionTitle onClick={onCLickHandler} title={props.title}/>
        {!isCollapsed && <AccordionBody items={items}/>}
    </>

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={props.onClick}>{props.title}</h2>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul style={{listStyle: 'none'}}>
            {props.items.map((i,ind) => <li key={ind}>{i}</li>)}
        </ul>
    )
}

// export default UncontrolledAccordion;