const StatisticLine = ({text, counter}) => <tr><td>{text} {counter}  {text === 'positive' && '%'} </td></tr>

export default StatisticLine