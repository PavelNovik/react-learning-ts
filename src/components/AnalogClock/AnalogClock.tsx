import React, {memo, useEffect, useState} from 'react';
import s from './AnalogClock.module.css';

type AnalogClockPropstype = {
    isAnalogClock: boolean
    changeClockView: ()=> void
}
export const AnalogClock = memo((props: AnalogClockPropstype) => {
    const [date, setDate] = useState(new Date())


    const sec = date.getSeconds()
    const min = date.getMinutes()
    const hour = date.getHours()

    const get2digit = (num: number) => num < 10 ? '0' + num : num

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, []);


    return (<div onClick={props.changeClockView} className={s.clocks}>
            <div className={props.isAnalogClock ? s.clockContainer : s.digitClockContainer}>
                {props.isAnalogClock && <div style={{rotate: `${sec * 6}deg`}} className={s.secondArrow}></div>}
                {props.isAnalogClock && <div style={{rotate: `${min * 6}deg`}} className={s.minuteArrow}></div>}
                {props.isAnalogClock && <div style={{rotate: `${hour * 30}deg`}} className={s.hourArrow}></div>}
                {!props.isAnalogClock && <span>{get2digit(hour)}:</span>}
                {!props.isAnalogClock && <span>{get2digit(min)}:</span>}
                {!props.isAnalogClock && <span>{get2digit(sec)}</span>}
            </div>
            {/*<button onClick={props.changeClockView}>Change clock view</button>*/}
        </div>
    )
        ;
});

