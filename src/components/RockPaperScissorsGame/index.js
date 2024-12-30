import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {RulesImg} from './styledComponents'
import ChoiceItem from '../ChoiceItem'
import ScoreBoard from '../ScoreBoard'

import 'reactjs-popup/dist/index.css'

class RockPaperScissorsGame extends Component {
  state = {
    score: 0,
    isGameOver: false,
    userChoice: {},
    opponentChoice: {},
    result: '',
  }

  makeSelection = id => {
    const {choicesList} = this.props
    const userChoice = choicesList.find(choice => choice.id === id)
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    let result = ''

    if (userChoice.id === opponentChoice.id) {
      result = 'IT IS DRAW'
    } else if (
      (userChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (userChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER') ||
      (userChoice.id === 'PAPER' && opponentChoice.id === 'ROCK')
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      result = 'YOU WON'
    } else {
      this.setState(prevState => ({score: prevState.score - 1}))
      result = 'YOU LOSE'
    }
    this.setState({
      userChoice,
      opponentChoice,
      isGameOver: true,
      result,
    })
  }

  resetGame = () => {
    this.setState({
      userChoice: '',
      opponentChoice: '',
      isGameOver: false,
      result: '',
    })
  }

  renderResult = () => {
    const {userChoice, opponentChoice, result} = this.state

    return (
      <div>
        <div>
          <p>YOU</p>
          <img src={userChoice.imageUrl} alt="your choice" />
        </div>
        <div>
          <p>OPPONENT</p>
          <img src={opponentChoice.imageUrl} alt="opponent choice" />
        </div>
        <div>
          <p>{result}</p>
          <button type="button" onClick={this.resetGame}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <>
        <ul>
          {choicesList.map(choice => (
            <ChoiceItem
              key={choice.id}
              choice={choice}
              makeSelection={this.makeSelection}
            />
          ))}
        </ul>
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              RULES
            </button>
          }
        >
          {close => (
            <>
              <div>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rule-img"
                />
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
            </>
          )}
        </Popup>
      </>
    )
  }

  render() {
    const {isGameOver, score} = this.state
    console.log()

    return (
      <div>
        <ScoreBoard score={score} />
        {isGameOver ? this.renderResult() : this.renderGame()}
      </div>
    )
  }
}

export default RockPaperScissorsGame
