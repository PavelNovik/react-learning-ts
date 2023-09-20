import React from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log('App randering')

    return (
        <div className="App">
            {/*<PageTitle title={"This is Header Title Element!"}/>*/}
            {/*<PageTitle title={"This is other user"}/>*/}

            <Rating value={4}/>
            <Accordion title={"The first accordion"} collapsed={true}/>
            <Rating value={3}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Accordion title={"The second accordion"} collapsed={false}/>
            <Rating value={5}/>
            <Rating value={1}/>
            <Rating value={0}/>

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
