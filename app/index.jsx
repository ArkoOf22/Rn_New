import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'

import { Link } from 'expo-router'

import icedCoffeImg from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeImg}
        resizeMode='cover'
        style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
        <Link style={{marginHorizontal: 'auto'}} href="/explore" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}> Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 150,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  link: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 150,
    backgroundColor: 'rgba(0,0,0,0.5)',
    textDecorationLine: 'underline',
    padding: 10,
  },
  button: {
  justifyContent: 'center',
  height: 50,
  borderRadius: 20,
  backgroundColor: 'rgba(0,0,0,0.75)',
  padding: 10,
 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },


})