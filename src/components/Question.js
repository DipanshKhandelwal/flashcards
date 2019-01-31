import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements'
import { LinearGradient } from 'expo'

class Question extends React.Component {
  render() {
    const { answered, questionNumber, card, totalQuestions } = this.props
    if(!card) return <Text>No Card!!</Text>
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f0f1', padding: 15, justifyContent: 'center' }} >
        <Card
          containerStyle={{ flex: 1, marginBottom: 50, marginTop: 50 }}
          titleStyle={{ fontSize: 20, alignSelf: 'flex-start' }}
          wrapperStyle={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-evenly', margin: 30, marginTop: 0 }}
          title={`${questionNumber}/${totalQuestions}`}>
          <View style={{ display: 'flex', flex: 4, justifyContent: 'space-between', alignItems: 'center' }} >
            <Text style={{ marginBottom: 10, fontSize: 40, fontWeight: '700' }}>
              {card.question}
            </Text>
            <TouchableOpacity>
              <Text style={{ margin: 20, fontSize: 15}} >
                See Answer
            </Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flex: 2, justifyContent: 'space-evenly' }}>
            <Button
              icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='check' type='font-awesome' color='#ffffff' />}
              backgroundColor='#03A9F4'
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#205704', '#499a1f'],
                start: [.3, 0],
                end: [1, 0],
              }}
              onPress={() => answered("correct")}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='Correct' />
            <Button
              icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='times' type='font-awesome' color='#ffffff' />}
              backgroundColor='#03A9F4'
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#ac0101', '#f33a3a'],
                start: [.3, 0],
                end: [1, 0],
              }}
              onPress={() => answered("incorrect")}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='Incorrect' />
          </View>
        </Card>
      </View>
    )
  }
}

export default Question