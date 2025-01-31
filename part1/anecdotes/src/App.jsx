import { useState } from 'react'
import Button from "./components/Button.jsx";


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0))
    const copy = [...points]

    const hadleNext = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))
    const hadleVote = () => {
        copy[selected] += 1
        setPoints(copy)
    }



    return (
       <>
        <div>
            <h2>Anecdote of the day</h2>
            <h3>
                {anecdotes[selected]}
                <br/>
                has {points[selected]} votes
            </h3>
            <Button onClick={hadleNext} text='next anecdote' />
            <Button onClick={hadleVote} text='vote' />
        </div>
        <div>
            <h2>Anecdote with most votes</h2>
            {anecdotes[points.indexOf(Math.max(...points))]}
        </div>
    </>
    )
}

export default App