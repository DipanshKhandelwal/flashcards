import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class DeckDetails extends React.Component {
  render() {

    const deck = this.props.navigation.getParam('deck', {})

    return (
      <View style={{ flex: 1, backgroundColor: '#cfcfcf' }} >
        <View style={styles.headingContainer} >
          <Text style={styles.heading} >DeckDetails</Text>
        </View>
        <View style={{ flex: 1 }} >
          <Text style={styles.heading} >{deck.title}</Text>
          <Text style={styles.heading} >{deck.id}</Text>
          <Text style={styles.heading} >{deck.timestamp}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around' }} >
          <Button style={{ flex: 1 }} title="Add Card" />
          <Button style={{ flex: 1 }} title="Start Quiz" />
          <Button style={{ flex: 1 }} title="Delete Deck" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    padding: 15
  },
  heading: {
    fontSize: 35
  }
})

export default DeckDetails