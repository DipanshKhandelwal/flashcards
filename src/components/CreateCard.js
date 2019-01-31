import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/index'
import { LinearGradient } from 'expo'

class CreateCard extends React.Component {

  state = {
    question: '',
    answer: ''
  }

  answerChange = (answer) => {
    this.setState({ answer })
  }

  questionChange = (question) => {
    this.setState({ question })
  }

  addButtonPressed = () => {
    const deckId = this.props.navigation.getParam('deckId', null)
    const { question, answer } = this.state

    if (deckId) {
      this.props.dispatch(
        handleAddCard({
          question: question,
          answer: answer,
          deckId: deckId
        }))
      this.setState({ text: '' })
      this.props.navigation.navigate('DeckList')
    }
  }

  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container} >
        <Card
          containerStyle={{ flex: 1, marginBottom: 50, marginTop: 50 }}
          titleStyle={{ fontSize: 50 }}
          wrapperStyle={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-evenly', padding: 30 }}
          title="Add new card !!">
          <TextInput
            style={styles.input}
            placeholder={"Question ?"}
            onChangeText={this.questionChange}
            value={question}
          />
          <TextInput
            style={styles.input}
            placeholder={"Answer !!"}
            onChangeText={this.answerChange}
            value={answer}
          />
          <Button
            onPress={this.addButtonPressed}
            title={"Create Card"}
            titleStyle={{ color: 'white', marginRight: 20, marginLeft: 20, marginTop: 10, marginBottom: 10 }}
            disabled={answer === '' || question === ''}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#10455bdd', '#2aa1af'],
              start: [.3, 0],
              end: [1, 0],
            }}
          />
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2f0f1',
    padding: 15,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 0.8,
    borderColor: 'grey',
    padding: 15
  }
})

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CreateCard)
