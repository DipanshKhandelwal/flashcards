import React from 'react'
import { View } from 'react-native'
import Question from './Question'
import Score from './Score'

class Quiz extends React.Component {

  state = {
    index: 0,
    score: 0,
    cards: [],
    deck: null
  }

  reset = () => {
    this.setState({
      index: 0,
      score: 0,
    })
  }

  answered = (answer) => {
    var marks = 0
    if (answer == 'correct') marks += 1
    this.setState((oldState) => {
      return {
        ...oldState,
        index: oldState.index + 1,
        score: oldState.score + marks
      }
    })
  }

  componentDidMount = () => {
    const deck = this.props.navigation.getParam('deck', null)
    this.setState({ deck })
    let data = []
    if (deck && deck.cards) {
      Object.keys(deck.cards)
        .sort((a, b) => deck.cards[b].timestamp - deck.cards[a].timestamp)
        .map((card) => {
          data.push(deck.cards[card])
        })
      this.setState({ cards: data })
    }
  }

  render() {
    const { index, cards, score, deck } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f0f1', padding: 15, justifyContent: 'center' }} >
        {
          index < cards.length
            ? <Question
              answered={this.answered}
              questionNumber={index + 1}
              card={cards[index]}
              totalQuestions={cards.length}
            />
            : <Score
              navigation={this.props.navigation}
              reset={this.reset}
              score={score}
              totalQuestions={cards.length}
              deck={deck}
            />
        }
      </View>
    )
  }
}

export default Quiz