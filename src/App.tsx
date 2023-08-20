import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    console.log('App randering')

    return (
        <div className="App">
            <Title/>
            <Rating/>
            <Accordeon/>
            <Rating/>

        </div>
    );
}

function Title() {
    console.log('Title randering')
    return (
        <>
            This is Header Title Element!
        </>
    )
}

function Rating() {
    console.log('Rating randering')
    return (
        <>
            <Star/>
            <Star/>

        </>
    )
}

function Accordeon() {
    console.log('Accordeon randering')
    return (
        <>
            <AccordeonTitle/>
            <AccordeonBody/>
        </>
    )
}

function AccordeonTitle() {
    console.log('Accordeon Title randering')
    return (
        <>
            This is Accordeon!
        </>
    )
}

function AccordeonBody() {
    console.log('Accordeon Body randering')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </>
    )
}

function Star() {
    console.log('Star randering')
    return (
        <>
            <h2>Star</h2>
        </>
    )
}

export default App;
