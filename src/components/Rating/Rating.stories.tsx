import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import React, {useState} from "react";
import {Rating, RatingType} from "./Rating";

// const meta: Meta<typeof Rating> = {
//     component: Rating,
// };
//
// export default meta;

export default {
    title: "Rating",
    component: Rating
}

type Story = StoryObj<typeof Rating>;

export const FirstStory: Story = {
    args: {
        value: 0 || 1 || 2 || 3 || 4 || 5,
        changeRating: () => {
            onChangeRatingHandler()
        }
    },
}

const onChangeRatingHandler = action('onChange')

export const StartRating = () => {
    return <Rating value={0} changeRating={onChangeRatingHandler}/>
}
export const FullRating = () => {
    return <Rating value={5} changeRating={onChangeRatingHandler}/>
}
export const RatingDemo = () => {
    const [val, setVal] = useState<RatingType>(0)
    return <Rating value={val} changeRating={setVal}/>
}