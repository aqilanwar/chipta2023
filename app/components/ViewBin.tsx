import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ViewBin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.comingSoonText}>Coming Soon</Text>
      <Image
        source={require('../src/2.png')} // Replace with your image source
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
  },
});

export default ViewBin;
