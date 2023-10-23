import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordeon/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOFF";
import {UncontrolledAccordion} from "./components/Accordeon/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {RatingType} from "./components/Rating/Rating";


function App() {
    // console.log('App rendering')
    const [onIndicator, setOnIndicator] = useState<boolean>(false)
    const [rating, setRating] = useState<RatingType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const changeLightHandler = (isOn: boolean) => {
        setOnIndicator(isOn)
    }
    const changeRating = (value: RatingType) => {
        setRating(value)
    }
    const changeAccordionCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <PageTitle title={"Controlled Elements"}/>
            <Accordion title={"Controlled accordion 1"} collapsed={collapsed} changeAccordionCollapsed={changeAccordionCollapsed}/>
            <Rating value={rating} changeRating={changeRating}/>
            <OnOff on={onIndicator} changeLight={changeLightHandler}/>
            <PageTitle title={"Uncontrolled Elements"}/>
            <UncontrolledAccordion title={"Uncontrolled accordion 1"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff />
            {/*<UncontrolledAccordion title={"Uncontrolled accordion 2"} />*/}
            {/*<OnOFF/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<PageTitle title={"This is other user"}/>*/}
            {/*<Accordion title={"The second accordion"} collapsed={false}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    // console.log('PageTitle rendering')
    return (
        <h2 style={{color: "darkgoldenrod"}}>
            {props.title}
        </h2>
    )
}

export default App;
