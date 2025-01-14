import { View, Text , StyleSheet,ImageBackground} from 'react-native'

import icedCoffee from '@/assets/images/coffee-splash.png'

const explore = () => {
  return (
    <View style={Styles.container}>
      <ImageBackground
      source={icedCoffee}
      resizeMode='cover'
      style={Styles.image}>
      <Text style={Styles.text}>explore</Text>
      </ImageBackground>
    </View>
  )
}

export default explore

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
},
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 100,
  },
})