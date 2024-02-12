import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    if (total === 0){
        return (
            <div>
                <h1>Statistics</h1>
                <table>
                    <tbody>
                        <StatisticLine text='No feedback given' />
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text='good' counter={good}/>
                    <StatisticLine text='neutral' counter={neutral}/>
                    <StatisticLine text='bad' counter={bad}/>
                    <StatisticLine text='all' counter={total}/>
                    <StatisticLine text='average' counter={((good + (bad * -1)) / total)}/>
                    <StatisticLine text='positive' counter={good / total * 100}/>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics