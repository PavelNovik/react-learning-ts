import React, {useState, MouseEvent} from 'react';
import {CountryType} from "../../App";

type MySelectPropsType = {
    data: CountryType[]
    collaps: boolean
    onClick: () => void
    onChange: (id: string) => void
    select: undefined | string
}

const MySelect = (props: MySelectPropsType) => {

    const changeSelectValueHandler = (e: MouseEvent<HTMLDivElement>) => {
        props.onChange(e.currentTarget.id)
    }

    return (
        <div>
            <div className="selectTitle"
                 onClick={props.onClick} onBlur={props.onClick}>{!props.select ? 'none' : props.data.filter(c => c.id === props.select)[0].title}</div>
            {!props.collaps && <div className="selectBody">
                {props.data.map(i => <div key={i.id} onClick={(e) => changeSelectValueHandler(e)}
                                         className={'selectItem'} id={i.id}>{i.title}</div>)}
            </div>}

        </div>
    );
};

export default MySelect;