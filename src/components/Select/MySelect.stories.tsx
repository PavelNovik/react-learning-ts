import type {StoryObj} from '@storybook/react';
import {CountryType} from "../../App";
import MySelect from "./MySelect";
import {useState} from "react";
import Select from "./Select";

export default {
    title: "React/Select/MySelect",
    component: MySelect
}

type Story = StoryObj<typeof MySelect>;
const countries: CountryType[] = [{title: 'none', id: '0'}, {title: 'Belarus', id: '1'}, {
    title: 'Poland',
    id: '2'
}, {
    title: 'Ukraine',
    id: '3'
}, {title: 'Lithuania', id: '4'}, {title: 'Latvia', id: '5'}]

export const FirstMySelectStory: Story = {
    args: {
        data: countries,
        collaps: true,
        select: undefined,
        onClick: () => {
        },
        onChange: () => {
        }
    },
}

export const MyControlledSelect = () => {
    const [coll, setColl] = useState<boolean>(true)
    const [sel, setSel] = useState<string | undefined>('0')

    return <MySelect data={countries} collaps={coll} select={sel} onClick={(arg) => setColl(arg)}
                     onChange={(v: string) => {
                         setSel(v)
                     }}/>
}