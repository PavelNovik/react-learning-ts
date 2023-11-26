import {AnalogClock} from "./AnalogClock";
import React, {useEffect, useState} from "react";
import {action} from "@storybook/addon-actions";
import {StoryObj} from "@storybook/react";

export default {
    title: 'React/React.UseEffect/Clock',
    component: AnalogClock
}

type Story = StoryObj<typeof AnalogClock>
export const FirstClockStory: Story = {
    args: {
        isAnalogClock: true,
        changeClockView: () => onChangeHandler()
    }
}
const onChangeHandler = action('onChange')

export const AnalogClockStory = () => {
    return <AnalogClock isAnalogClock={true} changeClockView={onChangeHandler}/>
}

export const DigitalClockStory = () => {
    return <AnalogClock isAnalogClock={false} changeClockView={onChangeHandler}/>
}

export const AnalogDigitalClockStory = () => {
    const [isAnalogClock, setIsAnalogClock] = useState(true)
    return <AnalogClock isAnalogClock={isAnalogClock} changeClockView={() => setIsAnalogClock(!isAnalogClock)}/>
}

