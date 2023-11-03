import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'React/React useCallback/Like useCallback',
}

const BooksSecret = (props: { books: string[], addBook: ()=> void }) => {
    console.log('im a book')

    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}


const Books = React.memo(BooksSecret)

export function useCallbackExample() {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'CSS', 'JS', 'React', 'TS'])
    console.log('im main state')
    const newBooksArray = useMemo<string[]>(() => {
        return books.filter(u => u.toLowerCase().indexOf('s') > -1)
    }, [books])
    const addNewBookHandler = () => setBooks([...books, "FrontEnd's book"])

    const addBookWithUseMemo = useMemo(()=> {
        return addNewBookHandler
    },[books])

    const addBookWithUseCallback = useCallback(addNewBookHandler, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {/*<NewMessagesCounter count={counter}/>*/}
        {counter}
        <Books books={newBooksArray} addBook={addBookWithUseCallback}/>
    </>
}