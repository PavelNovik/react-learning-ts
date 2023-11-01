import React, {useState, MouseEvent, KeyboardEvent, useEffect} from 'react';
import {CountryType} from "../../App";
import s from './MySelect.module.css'

type MySelectPropsType = {
    data: CountryType[]
    collaps: boolean
    onClick: (arg: boolean) => void
    onChange: (id: string) => void
    select: undefined | string
}

const MySelect = (props: MySelectPropsType) => {
    const [active, setActive] = useState(props.select)
    const activeItem = props.data.find(c => c.id === active)
    const changeSelectValueHandler = (e: MouseEvent<HTMLDivElement>) => {
        props.onChange(e.currentTarget.id)
        // setActive(selectedItem && selectedItem.id)
    }
    useEffect(() => {
        setActive(props.select)
    }, [props.select]);

    const selectedItem = props.data.find(c => c.id === props.select)
    const selectItems = props.data.map(i => <div
        key={i.id}
        onMouseEnter={() => setActive(i.id)}
        onClick={changeSelectValueHandler}
        className={s.selectItem + ' ' + (activeItem === i ? s.active : '')}
        id={i.id}>
        {i.title}
    </div>)

    const onClickHandler = () => {
        props.onClick(!props.collaps)
        setActive(props.select)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp') {
            // setActive((active && +active > 0 ? +active - 1 : 0).toString())
            props.onChange((active && +active > 0 ? +active - 1 : 0).toString())
            // active && props.onChange(active)
        }
        if (e.key === 'ArrowDown') {
            // setActive((active && +active < props.data.length - 1 ? +active + 1 : 5).toString())
            props.onChange((active && +active < props.data.length - 1 ? +active + 1 : 5).toString())
            // active && props.onChange(active)
        }
        if (e.key === 'Enter') {
            active && props.onChange(active)
            props.onClick(!props.collaps)
        }
        if(e.key === "Escape") {
            props.onClick(true)
        }
    }
    return (
        <div className={s.select} onClick={onClickHandler} onKeyDown={onKeyDownHandler} tabIndex={0}>
            <span className={s.selectTitle}
                  onClick={()=>props.onClick(!props.collaps)}
                // onBlur={props.onClick}>{!props.select ? 'none' : props.data.filter(c => c.id === props.select)[0].title}</div>
                // onBlur={props.onClick}>{selectedItem ? selectedItem.title : 'none'}</h2>
            >{selectedItem && selectedItem.title}</span>
            {!props.collaps && <div className={s.selectBody}>{selectItems}</div>}

        </div>
    );
};

export default MySelect;