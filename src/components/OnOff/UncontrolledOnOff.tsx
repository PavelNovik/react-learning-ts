import React, {useState} from 'react';

// Условный рендеринг
const UncontrolledOnOff = () => {
    const [on, setOn] = useState(false)

    const onStyle = {
        width: "40px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginTop: "15px",
        padding: "3px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: on ? "white" : "red"
    }
    const idicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={idicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;