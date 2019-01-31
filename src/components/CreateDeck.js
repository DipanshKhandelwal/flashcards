import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements'
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
        <Card
          containerStyle={{ flex: 1, marginBottom: 50, marginTop: 50 }}
          titleStyle={{ fontSize: 50 }}
          wrapperStyle={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-evenly', padding: 30 }}
          title="Title of the new deck ??">
          <TextInput
            style={{ borderWidth: 0.8, borderColor: 'grey', padding: 15 }}
            placeholder={"Title of the deck !!"}
            onChangeText={this.textChange}
            value={text}
          />
          <Button
            onPress={this.addButtonPressed}
            title={"Create Card"}
            titleStyle={{ color: 'white', marginRight: 20, marginLeft: 20, marginTop: 10, marginBottom: 10, elevation: 10 }}
            disabled={text === ''}
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
  }
})

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CreateDeck)
