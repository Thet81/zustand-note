import {useFeedBack} from '../store'
const Statistics = () => {
  const {good,neutral,bad,total} = useFeedBack()
  const all = good + neutral + bad
  // const average = good && neutral && bad === 0 ? 0 : (good * 1) + (neutral * 0) + (bad * -1) / all
  const average = (good * 1 ) + (neutral * 0) + (bad * -1) / all
  const positive = good === 0 ? 0 : (good * 100) / total
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><td>good</td><td>{good}</td></tr>
          <tr><td>neutral</td><td>{neutral}</td></tr>
          <tr><td>bad</td><td>{bad}</td></tr>
          <tr><td>all</td><td>{all}</td></tr>
          <tr><td>average</td><td>{average}</td></tr>
          <tr><td>positive</td><td>{positive}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
