import React, {useState} from 'react';
import './App.css';
// import Accordion from "./components/Accordeon/Accordion";
// import {Rating} from "./components/Rating/Rating";
import OnOFF from "./components/OnOff/OnOFF";
import UncontrolledAccordion from "./components/Accordeon/UncontrolledAccordion";
import UncontrolledRaiting from "./components/Rating/UncontrolledRaiting";


function App() {
    console.log('App randering')
    const [onIndicator, setOnIndicator] = useState<boolean>(false)

    const changeLightHandler = (isOn: boolean) => {
        setOnIndicator(isOn)
    }

    return (
        <div className="App">
            {/*<OnOFF on={onIndicator} changeLight={changeLightHandler}/>*/}
            {/*<OnOFF on={onIndicator} changeLight={changeLightHandler}/>*/}
            <UncontrolledAccordion title={"Uncontrolled accordion 1"} />
            <UncontrolledAccordion title={"Uncontrolled accordion 2"} />
            <OnOFF/>
            <OnOFF/>
<UncontrolledRaiting/>
<UncontrolledRaiting/>
            {/*<PageTitle title={"This is Header Title Element!"}/>*/}
            {/*<PageTitle title={"This is other user"}/>*/}

            {/*<Rating value={4}/>*/}
            {/*<Accordion title={"The first accordion"} collapsed={true}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Accordion title={"The second accordion"} collapsed={false}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={0}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle randering')
    return (
        <h2>
            {props.title}
        </h2>
    )
}

export default App;
