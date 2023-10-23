import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


// const meta: Meta<typeof OnOff> = {
//     component: OnOff,
// };
//
// export default meta;

export default {
    title: "Uncontrolled OnOff",
    component: UncontrolledOnOff,
}

type Story = StoryObj<typeof UncontrolledOnOff>;

export const FirstStory: Story = {
    args: {},
}
const onChangeRatingHandler = action('onChange')

export const OnOffDemo = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={onChangeRatingHandler}/>
}