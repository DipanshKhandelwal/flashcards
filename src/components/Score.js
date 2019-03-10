import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements'
import { LinearGradient } from 'expo'
import { setLocalNotifications, clearLocalNotifications } from '../utils/helpers'

class Score extends React.Component {

  componentDidMount = () => {
    clearLocalNotifications().then(setLocalNotifications)
  }

  render() {
    const { score, totalQuestions, reset, deck } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f0f1', padding: 15, justifyContent: 'center' }} >
        <Card
          containerStyle={{ flex: 1, marginBottom: 50, marginTop: 50 }}
          titleStyle={{ fontSize: 60, alignSelf: 'center' }}
          wrapperStyle={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-evenly', margin: 30, marginTop: 0 }}
          title="Score">
          <View style={{ display: 'flex', flex: 4, justifyContent: 'space-between', alignItems: 'center' }} >
            <Text style={{ marginBottom: 10, fontSize: 40, fontWeight: '700' }}>
              {`${score}/${totalQuestions}`}
            </Text>
          </View>
          <View style={{ display: 'flex', flex: 2, justifyContent: 'space-evenly' }}>
            <Button
              icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='play' type='font-awesome' color='#ffffff' />}
              backgroundColor='#03A9F4'
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#205704', '#499a1f'],
                start: [.3, 0],
                end: [1, 0],
              }}
              onPress={() => reset()}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, elevation: 10 }}
              title='Play Again !!' />
            <Button
              icon={<Icon containerStyle={{ margin: 5, marginRight: 15 }} name='stop-circle' type='font-awesome' color='#ffffff' />}
              backgroundColor='#03A9F4'
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#ac0101', '#f33a3a'],
                start: [.3, 0],
                end: [1, 0],
              }}
              onPress={() => this.props.navigation.navigate('DeckDetails', { deck })}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, elevation: 10 }}
              title='End !!' />
          </View>
        </Card>
      </View>
    )
  }
}

export default Score