import React, {useMemo, useState} from "react";

export default {
    title: 'React/React.memo/Use.Memo',
}

export const DifficultCounterExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

   resultA = useMemo(() => {
       let tempResult = 1
       for(let i = 1; i <=a; i++) {
           let fake = 0
           while (fake < 100000000) {
               fake++
               const fakeValue = Math.random()
           }
           tempResult *=i
       }
       return tempResult
    }, [a]);


    for(let i = 1; i <=b; i++) {
        resultB *=i
    }

    return <>
        <input value={a} onChange={(e)=> setA( Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=> setB( +e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

// const NewMessagesCounterSecret = (props: { count: number }) => {
//     console.log('im counter')
//     return <div>{props.count}</div>
// }

// const NewMessagesCounter = React.memo(NewMessagesCounterSecret)
const UsersSecret = (props: { users: string[] }) => {
    console.log('im user')

    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['John', 'Dave', 'Linda', 'Michel', 'Stan'])
    console.log('im main state')
    const newUsersArray = useMemo<string[]>(()=> {
       return users.filter(u=> u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={()=> setUsers([...users, 'A new User'])}>add user</button>
        {/*<NewMessagesCounter count={counter}/>*/}
        {counter}
        <Users users={newUsersArray}/>
    </>
}