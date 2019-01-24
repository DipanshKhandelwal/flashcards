import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/index'

class CreateDeck extends React.Component {

  state = {
    text: ''
  }

  textChange = (text) => {
    this.setState({ text })
  }

  addButtonPressed = () => {
    this.props.dispatch(handleAddDeck({ title: this.state.text }))
    this.setState({ text: '' })
  }

  render() {
    const { text } = this.state
    return (
      <View style={styles.container} >
        <View style={[styles.container, justifyContent = 'space-around', flex = 5]} >
          <Text style={styles.heading} >
            Title of the new deck ??
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"Title of the deck !!"}
            onChangeText={this.textChange}
            value={text}
          />
        </View>
        <View style={styles.container} >
          <Button
            onPress={this.addButtonPressed}
            title={"Create Deck"}
            disabled={text===''}
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
    fontSize: 15,
    padding: 10,
    paddingRight: 30,
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

export default connect(mapStateToProps)(CreateDeck)
