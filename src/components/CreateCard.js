import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/index'

class CreateCard extends React.Component {

  state = {
    question: '',
    answer: ''
  }

  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container} >
        <View style={[styles.container, justifyContent = 'space-around', flex = 1]} >
          <Text style={styles.heading} >
            Add a new card !!
          </Text>
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
        </View>
        <View style={styles.container} >
          <Button
            onPress={this.addButtonPressed}
            title={"Create Card"}
            disabled={answer === '' || question === ''}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    flex: 10,
    margin: 50,
    fontSize: 35,
    color: 'blue',
    alignSelf: 'center'
  },
  input: {
    flex: 1,
    padding: 10,
    minWidth: 300,
    paddingRight: 30,
    margin: 30,
    paddingLeft: 30,
    borderWidth: 0.8,
    borderColor: 'grey'
  },
})

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CreateCard)
