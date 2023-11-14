import React, {useState} from "react";

export default {
    title: 'React/React.UseState/UseState demo',
}

function generationData() {
    console.log('Generating data just now!')
    return Math.floor(Math.random()*10)
}

export const Example1 = () => {
    console.log('Example 1')
    const initialState = React.useMemo(generationData, [])
    const [counter, setCounter] = useState(initialState)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
    </>
}
export const Example2 = () => {
    console.log('Example 2')
    const [counter, setCounter] = useState(generationData)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
    </>
}

export const Example3 = () => {
    console.log('Example 3')
    const [counter, setCounter] = useState(generationData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        <span style={{fontSize: '20px', color: 'green', marginLeft: '10px'}}>{counter}</span>
    </>
}