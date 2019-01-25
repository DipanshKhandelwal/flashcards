import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckElement extends React.Component {
  render() {
    const { deck } = this.props
    return (
      <View style={{ flex: 1, padding: 20 }} >
        <TouchableOpacity onPress={() => this.props.deckClicked(deck)} >
          <Text style={{ fontSize: 20 }} >{deck.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckElement