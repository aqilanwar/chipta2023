import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


type DashboardProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard = ({ navigation }: DashboardProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.cardRow}>
          <Text style={styles.textTitle}>Dashboard</Text>
          <View style={styles.cardContainer}>
            {/* First Card */}
            <Card style={[styles.card, { backgroundColor: '#0EA976' }]}>
              <Card.Content>
                <Text style={styles.textHeader} >Total Waste Bins</Text>
                <Text style={styles.textContent}>150</Text>
              </Card.Content>
            </Card>

            {/* Second Card */}
            <Card style={[styles.card, { backgroundColor: '#A90E0E' }]}>
              <Card.Content>
                <Text style={styles.textHeader}>Log</Text>
                <Text style={styles.textContent} >5</Text>
              </Card.Content>
            </Card>

            {/* Third Card */}
            <Card style={[styles.card, { backgroundColor: '#520EA9' }]}>
              <Card.Content>
                <Text style={styles.textHeader}>Full waste bin</Text>
                <Text style={styles.textContent}>25</Text>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.iconsRow}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register Bin')}>
              <Image source={require('../src/1.png')} style={styles.icon} />
              <Text style={styles.iconText}>Register Bin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('View Bin')}>
              <Image source={require('../src/2.png')} style={styles.icon} />
              <Text style={styles.iconText}>View Bin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Log')}>
              <Image source={require('../src/3.png')} style={styles.icon} />
              <Text style={styles.iconText}>Log</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Route')}>
              <Image source={require('../src/4.png')} style={styles.icon} />
              <Text style={styles.iconText}>Route</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.statisticContainer}>
          <Text variant='titleLarge' style={styles.textTitle}>Statistic</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({

  textTitle: {
    fontSize: 25,
    padding:8,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  cardRow: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardContainer: {
    padding: 2,
    flexDirection: 'row', // Arrange cards horizontally
    justifyContent: 'space-between', // Space between cards
  },
  card: {
    width: '32%', // Adjust card width as needed
  },
  textHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  textContent: {
    fontSize: 12,
    color: 'white',
    textAlign: 'right',
  },
  iconsRow: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    flexDirection: 'row', // Arrange icons and text in a row
    justifyContent: 'space-around', // Space between icons
    alignItems: 'center', // Center icons and text vertically
    paddingVertical: 5, // Add vertical padding
  },
  iconContainer: {
    margin: '5%',
    alignItems: 'center', // Center items horizontally
  },
  icon: {
    maxHeight: 50,
    maxWidth: 50,
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: 10,
    textAlign: 'center', // Center text horizontally
  },
});
