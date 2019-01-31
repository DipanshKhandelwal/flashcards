import React from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/index'
import { LinearGradient } from 'expo'

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
    this.props.navigation.navigate('DeckList')
  }

  render() {
    const { text } = this.state
    return (
      <View style={styles.container} >
        <View>
          <KeyboardAvoidingView>
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
            <View style={[styles.container, padding = 10]} >
              <Button
                onPress={this.addButtonPressed}
                title={"Create Deck"}
                titleStyle={{ color: 'white', marginRight: 20, marginLeft: 20, marginTop: 10, marginBottom: 10 }}
                disabled={text === ''}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#10455bdd', '#2aa1af'],
                  start: [.3, 0],
                  end: [1, 0],
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2f0f1'
  },
  heading: {
    flex: 10,
    margin: 50,
    fontSize: 35,
    fontWeight: '500',
    color: '#10455b',
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
