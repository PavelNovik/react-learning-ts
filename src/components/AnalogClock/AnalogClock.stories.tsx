import {AnalogClock} from "./AnalogClock";
import React, {useEffect, useState} from "react";

export default {
    title: 'React/Clock Digital-Analog',
}

export const AnalogClockStory = ()=> {
    const [isAnalogClock, setIsAnalogClock] = useState(true)
    return <AnalogClock isAnalogClock={isAnalogClock} changeClockView={()=>setIsAnalogClock(!isAnalogClock)}/>
}

