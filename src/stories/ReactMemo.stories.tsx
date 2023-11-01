import React, {useState} from "react";

export default {
    title: 'React/React.memo/React.Memo demo'
}

const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log('im counter')
    return <div>{props.count}</div>
}

const NewMessagesCounter = React.memo(NewMessagesCounterSecret)
const UsersSecret = (props: { users: string[] }) => {
    console.log('im user')

    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['John', 'Dave', 'Linda', 'Michel', 'Stan'])
    console.log('im main state')

    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={()=> setUsers([...users, 'new User'])}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}