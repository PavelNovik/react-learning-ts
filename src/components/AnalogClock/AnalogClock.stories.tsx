import {AnalogClock} from "./AnalogClock";
import React, {useEffect, useState} from "react";

export default {
    title: 'React/React.UseEffect/Clock',
}

export const AnalogClockStory = ()=> {
    return <AnalogClock isAnalogClock={true} changeClockView={()=>{}}/>
}

export const DigitalClockStory = ()=> {
    return <AnalogClock isAnalogClock={false} changeClockView={()=>{}}/>
}

export const AnalogDigitalClockStory = ()=> {
    const [isAnalogClock, setIsAnalogClock] = useState(true)
    return <AnalogClock isAnalogClock={isAnalogClock} changeClockView={()=>setIsAnalogClock(!isAnalogClock)}/>
}

