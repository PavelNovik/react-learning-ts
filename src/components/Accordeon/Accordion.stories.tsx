import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from "react";
import {ItemType} from "../../App";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
//
// export default meta;

export default {
    title: "Controlled Accordion",
    component: Accordion
}
const items: ItemType[] = [{title: 'Pawel', value:1}, {title: 'Lera', value:2}, {title: 'Hleb', value:3}, {title: 'Vera', value:4}, {title: 'Tanya', value:5}, {title: 'Lena', value:6}, {title: 'Siarhey', value:7}]

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        title: "Hello, I'm Controlled Accordion",
        collapsed: true,
        items: items,
        changeAccordionCollapsed: () => {
            onChangeActionHandler()
        },
        onClick: (value: any) => {
            onChangeActionHandler(value)
        }
    },
}

const onChangeActionHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion title={"Controlled collapsed accordion"} collapsed={true}
                      changeAccordionCollapsed={onChangeActionHandler} items={items} onClick={onChangeActionHandler}/>
}
export const OpenedAccordion = () => {
    return <Accordion title={"Controlled opened accordion"} collapsed={false} changeAccordionCollapsed={() => {
    }} items={items} onClick={onChangeActionHandler}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onClick = () => {
        onChangeActionHandler()
        setCollapsed(!collapsed)
    }
    return <Accordion title={"Controlled accordion demo"} collapsed={collapsed} changeAccordionCollapsed={onClick} onClick={onChangeActionHandler}  items={items}/>
}