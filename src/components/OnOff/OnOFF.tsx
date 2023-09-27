import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    // changeLight: (isOn: boolean) => void
}

// Условный рендеринг
const OnOff = (props: PropsType) => {
    const [on, setOn] = useState(false)

    const onStyle = {
        width: "40px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginTop: "15px",
        padding: "3px",
        // backgroundColor: props.on? "green" : "white"
        backgroundColor: on ? "green" : "white"

    }
    const offStyle = {
        width: "40px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        // backgroundColor: props.on? "white" : "red"
        backgroundColor: on ? "white" : "red"

    }
    const idicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        // backgroundColor: props.on? "green" : "red"
        backgroundColor: on ? "green" : "red"

    }


    return (
        <div>
            {/*<div style={onStyle} onClick={() => props.changeLight(true)}>On</div>*/}
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            {/*<div style={offStyle} onClick={() => props.changeLight(false)}>Off</div>*/}
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={idicatorStyle}></div>

        </div>
    );
};

export default OnOff;