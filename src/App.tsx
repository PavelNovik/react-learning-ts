import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordeon/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOFF";
import {UncontrolledAccordion} from "./components/Accordeon/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {RatingType} from "./components/Rating/Rating";

export type ItemType = {
    title: string
    value: any
}
function App() {
    // console.log('App rendering')
    const [onIndicator, setOnIndicator] = useState<boolean>(false)
    const [rating, setRating] = useState<RatingType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const items: ItemType[] = [{title: 'Pawel', value:1}, {title: 'Lera', value:2}, {title: 'Hleb', value:3}, {title: 'Vera', value:4}, {title: 'Tanya', value:5}, {title: 'Lena', value:6}, {title: 'Siarhey', value:7}]

    const changeLightHandler = (isOn: boolean) => {
        setOnIndicator(isOn)
    }
    const changeRating = (value: RatingType) => {
        setRating(value)
    }
    const changeAccordionCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const onClick= (value: any)=> {

    }

    return (
        <div className="App">
            <PageTitle title={"Controlled Elements"}/>
            <Accordion onClick={onClick} items={items} title={"Controlled accordion 1"} collapsed={collapsed} changeAccordionCollapsed={changeAccordionCollapsed}/>
            <Rating value={rating} changeRating={changeRating}/>
            <OnOff on={onIndicator} changeLight={changeLightHandler}/>
            <PageTitle title={"Uncontrolled Elements"}/>
            <UncontrolledAccordion title={"Uncontrolled accordion 1"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h2 style={{color: "darkgoldenrod"}}>
            {props.title}
        </h2>
    )
}

export default App;
