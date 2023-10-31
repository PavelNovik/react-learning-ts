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
    const selectItems = props.data.map(i => <div key={i.id} onClick={(e) => changeSelectValueHandler(e)}
                                                 className={'selectItem'} id={i.id}>{i.title}</div>)
    const selectedItem = props.data.find(c => c.id === props.select)
    return (
        <div>
            <h2 className="selectTitle"
                 onClick={props.onClick}
                 // onBlur={props.onClick}>{!props.select ? 'none' : props.data.filter(c => c.id === props.select)[0].title}</div>
                 // onBlur={props.onClick}>{selectedItem ? selectedItem.title : 'none'}</h2>
                 onBlur={props.onClick}>{selectedItem && selectedItem.title}</h2>
            {!props.collaps && <div className="selectBody">{selectItems}</div>}

        </div>
    );
};

export default MySelect;