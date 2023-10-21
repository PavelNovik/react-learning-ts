import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Accordion from './Accordion';
import {useState} from "react";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
//
// export default meta;

export default {
    title: "Accordion",
    component: Accordion
}

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        title: "Hello",
        collapsed: true,
        changeAccordionCollapsed: () => {
            onChangeActionHandler()
        }
    },
}

const onChangeActionHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion title={"Controlled collapsed accordion"} collapsed={true}
                      changeAccordionCollapsed={onChangeActionHandler}/>
}
export const OpenedAccordion = () => {
    return <Accordion title={"Controlled opened accordion"} collapsed={false} changeAccordionCollapsed={() => {
    }}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onClick = () => {
        setCollapsed(!collapsed)
    }
    return <Accordion title={"Controlled accordion demo"} collapsed={collapsed} changeAccordionCollapsed={onClick}/>
}