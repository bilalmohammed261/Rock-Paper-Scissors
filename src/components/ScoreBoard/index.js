import {Score} from './styledComponents'

const ScoreBoard = props => {
  const {score} = props
  return (
    <div>
      <h1>ROCK PAPER SCISSORS</h1>
      <div>
        <Score>Score</Score>
        <Score>{score}</Score>
      </div>
    </div>
  )
}

export default ScoreBoard
