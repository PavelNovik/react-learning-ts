import React, {useEffect, useState} from "react";

export default {
    title: 'React/React.UseEffect/UseEffect demo',
}

export const SimpleExampleUseEffect = () => {
    console.log('Simple Example')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect without dependency')
        console.log('useEffect every render')
        document.title = counter.toString()
    });

    useEffect(() => {
        console.log('useEffect with empty [] of dependencies')
        console.log('useEffect only first render (ComponentDidMount)')
        document.title = counter.toString()

    }, []);

    useEffect(() => {
        console.log('useEffect with counter dependency')
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()

    }, [counter]);


    return <>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'blue', marginLeft: '10px'}}>{fake}</span>
    </>
}
//
// export const SimpleExampleWithoutDep = () => {
//     console.log('Simple Example 1')
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     useEffect(() => {
//         console.log('useEffect without dependency')
//         console.log('useEffect every render')
//     });
//
//
//     return <>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         {/*<NewMessagesCounter count={counter}/>*/}
//         <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
//         <button onClick={() => setFake(fake + 1)}>+</button>
//         {/*<NewMessagesCounter count={counter}/>*/}
//         <span style={{fontSize: '20px', color: 'blue', marginLeft: '10px'}}>{fake}</span>
//     </>
// }
//
// export const SimpleExampleWithCounterDep = () => {
//     console.log('Simple Example 2')
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     useEffect(() => {
//         console.log('useEffect with counter dependency')
//         console.log('useEffect first render and every counter change')
//     },[counter]);
//
//
//     return <>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         {/*<NewMessagesCounter count={counter}/>*/}
//         <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
//         <button onClick={() => setFake(fake + 1)}>+</button>
//         {/*<NewMessagesCounter count={counter}/>*/}
//         <span style={{fontSize: '20px', color: 'blue', marginLeft: '10px'}}>{fake}</span>
//     </>
// }
//
// export const SimpleExampleWithEmptyDep = () => {
//     console.log('Simple Example 3')
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     useEffect(() => {
//         console.log('useEffect with empty [] of dependencies')
//         console.log('useEffect only first render (ComponentDidMount)')
//     },[]);
//
//
//     return <>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         {/*<NewMessagesCounter count={counter}/>*/}
//         <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
//         <button onClick={() => setFake(fake + 1)}>+</button>
//         {/*<NewMessagesCounter count={counter}/>*/}
//         <span style={{fontSize: '20px', color: 'blue', marginLeft: '10px'}}>{fake}</span>
//     </>
// }

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    //
    // useEffect(() => {
    //     console.log('useEffect with empty [] of dependencies')
    //     console.log('useEffect only first render (ComponentDidMount)')
    //     setInterval(() => {
    //
    //     }, 1000)
    //
    // }, []);

    // useEffect(() => {
    //     console.log('useEffect without dependency')
    //     console.log('useEffect every render')
    //     document.title = counter.toString()
    // });
    //
    // useEffect(() => {
    //     console.log('useEffect with empty [] of dependencies')
    //     console.log('useEffect only first render (ComponentDidMount)')
    //     setTimeout(() => {
    //         document.title = counter.toString()
    //     }, 1000)
    //
    // }, []);
    //
    useEffect(() => {
        console.log('useEffect with counter dependency')
        console.log('useEffect first render and every counter change')
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)

    }, [counter]);

    // setTimeout(() => {
    //     document.title = counter.toString()
    // }, 1000)

    return <>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'blue', marginLeft: '10px'}}>{fake}</span>
    </>
}


export const SetIntervalExample = () => {
    // console.log('SetIntervalExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        // console.log('useEffect with empty [] of dependencies')
        // console.log('useEffect only first render (ComponentDidMount)')
        const exIntWx = setInterval(() => {
            console.log('interval')
            // setCounter(counter + 1)
            setCounter(state => state + 1)
        }, 1000)
        return ()=>clearInterval(exIntWx)
    }, []);

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'blue', marginLeft: '10px'}}>{fake}</span>
    </>
}

const divStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',

}

export const ClockExample = () => {
    // console.log('Clock Example')

    const [currentTime, setCurrentTime] = useState(new Date())
    const sec = currentTime.getSeconds()
    const min = currentTime.getMinutes()
    const hour = currentTime.getHours()

    useEffect(() => {
        // console.log('useEffect with empty [] of dependencies')
        // console.log('useEffect only first render (ComponentDidMount)')
        const timeInterval = setInterval(() => {
            console.log('tic')
            // setCounter(counter + 1)
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timeInterval)
    }, []);

    return <>
        <div style={divStyles}>
            <span>{hour} .  </span>
            <span> {min} .  </span>
            <span> {sec}</span>
        </div>
    </>
}