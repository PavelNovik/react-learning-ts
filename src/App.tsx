import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOFF from "./components/OnOff/OnOFF";
import UncontrolledAccordion from "./components/Accordeon/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
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
            <UncontrolledOnOff on={onIndicator} changeLight={changeLightHandler}/>
            <UncontrolledAccordion title={"Uncontrolled accordion 1"}/>
            {/*<UncontrolledAccordion title={"Uncontrolled accordion 2"} />*/}
            <OnOFF/>
            {/*<OnOFF/>*/}
            <UncontrolledRating/>
            {/*<UncontrolledRating/>*/}
            {/*<PageTitle title={"This is Header Title Element!"}/>*/}
            {/*<PageTitle title={"This is other user"}/>*/}

            <Rating value={rating} changeRating={changeRating}/>

            <Accordion title={"Controlled accordion 1"} collapsed={collapsed} changeAccordionCollapsed={changeAccordionCollapsed}/>

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
        <h2>
            {props.title}
        </h2>
    )
}

export default App;
