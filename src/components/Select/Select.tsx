import React, { ChangeEvent, useState } from 'react';
import { CountryType } from "../../App";


const Select = () => {
    const [select, setSelect] = useState<undefined | string>(undefined)

    const countries: CountryType[] = [{ title: 'Belarus', id: '1' }, { title: 'Poland', id: '2' }, {
        title: 'Ukraine',
        id: '3'
    }, { title: 'Lithuania', id: '4' }, { title: 'Latvia', id: '5' }]
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.currentTarget.value)
    }


    return (
        <select name="country" id="country" value={select} onChange={(e) => onChangeHandler(e)}>
            <option key={'none'}>none</option>
            {countries.map(i => <option key={i.id} value={i.id}>{i.title}</option>)}
        </select>


    );
};

export default Select;