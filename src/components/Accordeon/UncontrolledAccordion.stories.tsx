import type {StoryObj} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "Uncontrolled Accordion",
    component: UncontrolledAccordion,
}

type Story = StoryObj<typeof UncontrolledAccordion>;

export const FirstStory: Story = {
    args: {
        title: "Hello, I'm Uncontrolled Accordion",
    },
}


export const AccordionDemo = () => {

    return <UncontrolledAccordion title={"Uncontrolled accordion demo"}/>
}