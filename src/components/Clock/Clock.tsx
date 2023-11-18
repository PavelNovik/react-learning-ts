import React, {useEffect, useState} from 'react';

export const Clock: React.FC = () => {

    const [date, setDate] = useState(new Date())

    const s = date.getSeconds()
    const m = date.getMinutes()
    const h = date.getHours()

    const get2digit = (num: number) => num < 10 ? '0' + num : num

    useEffect(() => {
        // console.log('useEffect with empty [] of dependencies')
        // console.log('useEffect only first render (ComponentDidMount)')
        const intervalId = setInterval(() => {
            console.log('interval')
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, []);

    return (
        <div>
            {/*{time}*/}
            <span>{get2digit(h)}</span>:
            <span>{get2digit(m)}</span>:
            <span>{get2digit(s)}</span>
        </div>
    );
};

