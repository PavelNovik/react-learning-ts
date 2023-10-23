import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React, {useState} from "react";
import {OnOff} from "./OnOFF";

// const meta: Meta<typeof OnOff> = {
//     component: OnOff,
// };
//
// export default meta;

export default {
    title: "Controlled OnOff",
    component: OnOff
}

type Story = StoryObj<typeof OnOff>;

export const FirstStory: Story = {
    args: {
        on: true,
        changeLight: () => onChangeRatingHandler()
    },
}

const onChangeRatingHandler = action('onChange')

export const OffOnOff = () => {
    return <OnOff on={false} changeLight={onChangeRatingHandler}/>
}
export const OnOnOff = () => {
    return <OnOff on={true} changeLight={onChangeRatingHandler}/>
}
export const OnOffDemo = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff on={on} changeLight={setOn}/>
}