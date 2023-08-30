import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Appbar, Button, Card, Text, DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


type RouteProps = NativeStackScreenProps<RootStackParamList, 'Route'>;

const Route = ({ navigation }: RouteProps) => {

  const route = [

    {
      key: 1,
      truckName: 'Truck 1',
      type: 'pickup',
      capacity: '15000 kg',
      route: [
        {
          id:1,
          address: 'Depot',
          eta: '-'
        },
        {
          id:2,
          address: 'Flat PKNS, Seksyen 7',
          eta: '8.15 am'
        },
        {
          id:3,
          address: 'Sekolah Kebangasaan Seksyen 7',
          eta: '9.23 am'
        },
        {
          id:4,
          address: 'Kompleks Abatoir Shah Alam Jabatan Perkhidmatan Veterinar Malaysia',
          eta: '10.23 am'
        },
        {
          id:5,
          address: 'UiTM Shah Alam (Kolej Mawar)',
          eta: '11.11 am'
        },
        {
          id:6,
          address: 'Landfill',
          eta: '12.31 pm'
        },
        {
          id:7,
          address: 'Depot',
          eta: '1.21 pm'
        },
      ]
    },
    {
      key: 2,
      truckName: 'Truck 2',
      type: 'pickup',
      capacity: '15000 kg',
      route: [
        {
          id:1,
          address: 'Depot',
          eta: '-'
        },
        {
          id:2,
          address: 'Flat PKNS, Seksyen 7',
          eta: '8.15 am'
        },
        {
          id:3,
          address: 'Sekolah Kebangasaan Seksyen 7',
          eta: '9.23 am'
        },
        {
          id:4,
          address: 'Kompleks Abatoir Shah Alam Jabatan Perkhidmatan Veterinar Malaysia',
          eta: '10.23 am'
        },
        {
          id:5,
          address: 'UiTM Shah Alam (Kolej Mawar)',
          eta: '11.11 am'
        },
        {
          id:6,
          address: 'Landfill',
          eta: '12.31 pm'
        },
        {
          id:7,
          address: 'Depot',
          eta: '1.21 pm'
        },
      ]
    },
    {
      key: 3,
      truckName: 'Truck 3',
      type: 'pickup',
      capacity: '15000 kg',
      route: [
        {
          id:1,
          address: 'Depot',
          eta: '-'
        },
        {
          id:2,
          address: 'Flat PKNS, Seksyen 7',
          eta: '8.15 am'
        },
        {
          id:3,
          address: 'Sekolah Kebangasaan Seksyen 7',
          eta: '9.23 am'
        },
        {
          id:4,
          address: 'Kompleks Abatoir Shah Alam Jabatan Perkhidmatan Veterinar Malaysia',
          eta: '10.23 am'
        },
        {
          id:5,
          address: 'UiTM Shah Alam (Kolej Mawar)',
          eta: '11.11 am'
        },
        {
          id:6,
          address: 'Landfill',
          eta: '12.31 pm'
        },
        {
          id:7,
          address: 'Depot',
          eta: '1.21 pm'
        },
      ]
    },
    {
      key: 4,
      truckName: 'Truck 4',
      type: 'pickup',
      capacity: '10000 kg',
      route: [
        {
          id:1,
          address: 'Depot',
          eta: '-'
        },
        {
          id:2,
          address: 'Flat PKNS, Seksyen 7',
          eta: '8.15 am'
        },
        {
          id:3,
          address: 'Sekolah Kebangasaan Seksyen 7',
          eta: '9.23 am'
        },
        {
          id:4,
          address: 'Kompleks Abatoir Shah Alam Jabatan Perkhidmatan Veterinar Malaysia',
          eta: '10.23 am'
        },
        {
          id:5,
          address: 'UiTM Shah Alam (Kolej Mawar)',
          eta: '11.11 am'
        },
        {
          id:6,
          address: 'Landfill',
          eta: '12.31 pm'
        },
        {
          id:7,
          address: 'Depot',
          eta: '1.21 pm'
        },
      ]
    },


  ];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.statisticContainer}>
          <Text variant='titleLarge' style={styles.textTitle}>Collection Route</Text>
        </View>
        <Card style={{ margin: 10, backgroundColor: '#F5F5F5' }}>
          <Card.Content>
            <Text>Collection Date: 24 August 2023</Text>
            <Text style={{ marginTop: 10 }}>Truck Required: 4</Text>
            <Text style={{ marginTop: 10 }}>Total Waste: 50000 kg</Text>
          </Card.Content>

        </Card>
        <DataTable style={{ padding: 10 }}>
          <DataTable.Header style={{ backgroundColor: '#F5F5F5' }}>
            <DataTable.Title><Text style={{ fontWeight: 'bold' }}>Truck</Text></DataTable.Title>
            <DataTable.Title style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'bold' }}>Capacity(kg)</Text></DataTable.Title>
            <DataTable.Title style={{ justifyContent: 'center' }}><Text style={{ fontWeight: 'bold' }}>View Route</Text></DataTable.Title>
          </DataTable.Header>

          {route.map((item) =>
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.truckName}</DataTable.Cell>
              <DataTable.Cell>{item.capacity}</DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <Button style={styles.btnDisplay} mode="contained" onPress={() => navigation.navigate('View Route', { route:item })}>
                  Display
                </Button>
              </DataTable.Cell>
            </DataTable.Row>

          )}


          {/* {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.log}</DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <Button style={styles.btnDisplay} mode="contained" onPress={() => navigation.navigate('View Route', { route })}>
                  Display
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))} */}

        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Route;

const styles = StyleSheet.create({
  btnDisplay: {
    backgroundColor: '#0EA976',
  },
  textTitle: {
    fontSize: 25,
    marginTop: 10,

    padding: 8,
    textAlign: 'left',
  },
  container: {
    backgroundColor: 'white',
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
