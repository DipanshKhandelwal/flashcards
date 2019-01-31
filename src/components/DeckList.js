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
      <View style={{ flex: 1, backgroundColor: '#e2f0f1' }} >
        <View style={{ flex: 1, justifyContent: 'center' }} >
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

const mapStateToProps = (state) => {
  return {
    deckIds: Object.keys(state)
      .sort((a, b) => state[b].timestamp - state[a].timestamp),
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)
