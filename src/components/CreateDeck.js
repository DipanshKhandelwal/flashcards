import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

class CreateDeck extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={[styles.container, justifyContent = 'space-around', flex = 5]} >
          <Text style={styles.heading} >
            Title of the new deck ??
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"Title of the deck !!"}
          />
        </View>
        <View style={styles.container} >
          <Button
            title={"Create Deck"}
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

export default CreateDeck