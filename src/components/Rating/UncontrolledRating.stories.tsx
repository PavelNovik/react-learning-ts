import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React, {useState} from "react";
import {UncontrolledRating} from "./UncontrolledRating";

// const meta: Meta<typeof Rating> = {
//     component: Rating,
// };
//
// export default meta;

export default {
    title: "React/UncontrolledComponents/Uncontrolled Rating",
    component: UncontrolledRating
}

type Story = StoryObj<typeof UncontrolledRating>;

export const FirstStory: Story = {
    args: {
    },
}


export const RatingDemo = () => {
    return <UncontrolledRating />
}