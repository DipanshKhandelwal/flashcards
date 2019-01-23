import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import DeckElement from './DeckElement'

class DeckList extends React.Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor: '#cfcfcf' }} >
        <View style={styles.headingContainer} >
          <Text style={styles.heading} >DeckList</Text>
        </View>
        <View style={{ flex: 1}} >
        <FlatList
          style={{ backgroundColor : '#afafaf', flex: 1}}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
          renderItem={({item}) => 
            <DeckElement style={{ flex: 1 }} >{item.key}</DeckElement>
          }
        />
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

export default DeckList