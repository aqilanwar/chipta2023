import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../src/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Smart Waste{'\n'}Management  System</Text>
      <Button style={styles.button} mode="contained"  onPress={() => navigation.navigate('Dashboard')}>
        Get Started
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0EA976',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    maxWidth: 300,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 30,
    fontSize: 16,
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 30,
  },
  logo: {
    height: 80,
    resizeMode: 'contain',
  },
});

export default Home