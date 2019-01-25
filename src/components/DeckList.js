import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeckElement from './DeckElement'
import { handleReceiveDecks } from '../actions/index'

class DeckList extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(handleReceiveDecks())
  }

  deckClicked = (deck) => {
    this.props.navigation.navigate('DeckDetails', {deck: deck})
  }

  render() {

    const { deckIds, decks } = this.props

    return (
      <View style={{ flex: 1, backgroundColor: '#cfcfcf' }} >
        <View style={styles.headingContainer} >
          <Text style={styles.heading} >DeckList</Text>
        </View>
        <View style={{ flex: 1 }} >
          <FlatList
            data={deckIds}
            renderItem={({item}) => {
              return <DeckElement key={item} deck={decks[item]} deckClicked={this.deckClicked} />
            }}
            keyExtractor={(item) => item }

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

const mapStateToProps = (state) => {
  return {
    deckIds: Object.keys(state)
      .sort((a, b) => state[b].timestamp - state[a].timestamp),
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)
