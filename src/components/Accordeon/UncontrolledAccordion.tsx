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

export const UncontrolledAccordion = React.memo(UncontrolledAccordionS)
function  UncontrolledAccordionS  (props: AccordionPropsType) {
    console.log('rend ua')
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

const AccordionTitle = React.memo(AccordionTitleS)
function AccordionTitleS(props: AccordionTitlePropsType) {
    console.log('rend ua title')

    return (
        <h2 onClick={props.onClick}>{props.title}</h2>
    )
}

const AccordionBody = React.memo(AccordionBodyS)
function AccordionBodyS(props: AccordionBodyPropsType) {
    console.log('rend ua body')

    return (
        <ul style={{listStyle: 'none'}}>
            {props.items.map((i,ind) => <li key={ind}>{i}</li>)}
        </ul>
    )
}

// export default UncontrolledAccordion;