import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { handleRemoveDeck } from '../actions/index'
import { Card, Button, Text, Icon } from 'react-native-elements'
import { LinearGradient } from 'expo'

class DeckDetails extends React.Component {

  deleteDeck = (deck) => {
    this.props.dispatch(handleRemoveDeck(deck))
    this.props.navigation.navigate('DeckList')
  }

  render() {
    const deck = this.props.navigation.getParam('deck', {})
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f0f1', padding: 15, justifyContent: 'center' }} >
        <Card
          containerStyle={{ flex: 1, marginBottom: 50, marginTop: 50 }}
          titleStyle={{ fontSize: 50 }}
          wrapperStyle={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-evenly', padding: 30 }}
          title={deck.title}>
          <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: '700' }}>
            {deck.cards ? Object.keys(deck.cards).length : 0} Cards
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>
            {Date(deck.timestamp).toLocaleString().slice(4, 15)}
          </Text>
          <Button
            icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='plus' type='font-awesome' color='#ffffff' />}
            backgroundColor='#03A9F4'
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#10455bdd', '#2aa1af'],
              start: [.3, 0],
              end: [1, 0],
            }}
            onPress={() => this.props.navigation.navigate('CreateCard', { deckId: deck.id })}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, elevation: 10 }}
            title='ADD CARD' />
          {
            deck.cards && Object.keys(deck.cards).length > 0
              ?
              <Button
                icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='play' type='font-awesome' color='#ffffff' />}
                backgroundColor='#03A9F4'
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#205704', '#499a1f'],
                  start: [.3, 0],
                  end: [1, 0],
                }}
                onPress={() => {
                  this.props.navigation.navigate('Quiz', { deck: deck })
                }}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, elevation: 10 }}
                title='START QUIZ'
              />
              :
              <Button
                icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='play' type='font-awesome' color='#dedede' />}
                backgroundColor='#03A9F4'
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#858585', '#bfbfbf'],
                  start: [.3, 0],
                  end: [1, 0],
                }}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='START QUIZ'
                titleProps={{ color: '#dedede' }}
              />
          }
          <Button
            icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='trash' type='font-awesome' color='#ffffff' />}
            backgroundColor='#03A9F4'
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#ac0101', '#f33a3a'],
              start: [.3, 0],
              end: [1, 0],
            }}
            onPress={() => this.deleteDeck(deck)}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, elevation: 10 }}
            title='DELETE DECK' />
        </Card>
      </View>
    )
  }
}

export default connect()(DeckDetails)