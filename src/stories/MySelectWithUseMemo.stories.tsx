import MySelect from "../components/Select/MySelect";
import {CountryType} from "../App";
import React, {useMemo, useState} from "react";

export default {
    title: 'React/React.memo/MySelectWithReactUseMemo select',
    component: MySelect
}

type MySelectPropsType = {
    countries: CountryType[]
}

const MySelect1S = (props: MySelectPropsType) => {
    const [coll, setColl] = useState<boolean>(true)
    const [sel, setSel] = useState<string>('0')

    console.log('first select')
    return <MySelect data={props.countries}
                     collaps={coll}
                     select={sel}
                     onClick={(arg) => setColl(arg)}
                     onChange={(v: string) => {
                         setSel(v)
                     }}
    />
}
const MySelect1 = React.memo(MySelect1S)
const MySelect2S = (props: MySelectPropsType) => {
    const [coll, setColl] = useState<boolean>(true)
    const [sel, setSel] = useState<string>('0')

    console.log('second select')
    return <MySelect data={props.countries}
                     collaps={coll}
                     select={sel}
                     onClick={(arg) => setColl(arg)}
                     onChange={(v: string) => {
                         setSel(v)
                     }}
    />
}
const MySelect2 = React.memo(MySelect2S)
const MySelect3S = (props: MySelectPropsType) => {
    const [coll, setColl] = useState<boolean>(true)
    const [sel, setSel] = useState<string>('0')

    console.log('third select')
    return <MySelect data={props.countries}
                     collaps={coll}
                     select={sel}
                     onClick={(arg) => setColl(arg)}
                     onChange={(v: string) => {
                         setSel(v)
                     }}
    />
}
const MySelect3 = React.memo(MySelect3S)

export const MySelectWithReactUseMemo = () => {
    const [count, setCount] = useState(0)
    const [countries, setCountry] = useState<CountryType[]>([
        {title: 'none', id: '0'},
        {title: 'Belarus', id: '1'},
        {title: 'Poland', id: '2'},
        {title: 'Ukraine', id: '3'},
        {title: 'Lithuania', id: '4'},
        {title: 'Latvia', id: '5'},
        {title: 'Finland', id: '6'},
        {title: 'China', id: '7'},
        {title: 'Russia', id: '8'},
        {title: 'India', id: '9'},
    ])

    const firstSetCountry = useMemo(() => {
        return countries.filter(c => +c.id > 0 && +c.id < 4)
    }, [countries])
    const secondSetCountry = useMemo(() => {
        return countries.filter(c => +c.id > 3 && +c.id < 7)
    }, [countries])
    const thirdSetCountry = useMemo(() => {
        return countries.filter(c => +c.id > 6)
    }, [countries])

    return <>
        <MySelect1 countries={firstSetCountry}/>
        <MySelect2 countries={secondSetCountry}/>
        <MySelect3 countries={thirdSetCountry}/>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setCountry([...countries, {title: 'Japan', id: (countries.length).toString()}])}>Add country</button>
    </>
}
