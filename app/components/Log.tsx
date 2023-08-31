import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Card, Text, DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


type LogProps = NativeStackScreenProps<RootStackParamList, 'Log'>;

const Log = ({ navigation }: LogProps) => {

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'SA-1',
      log: 'Capacity is 100%',
      date: '24/8/23 10.00am',
    },
    {
      key: 2,
      name: 'PJ-9',
      log: 'Capacity is 25%',
      date: '24/8/23 10.00am',
    },
    {
      key: 3,
      name: 'PJ-2',
      log: 'Lost connection',
      date: '24/8/23 8.00am',
    },
    {
      key: 4,
      name: 'SJ-32',
      log: 'Capacity is 75%',
      date: '24/8/23 8.00am',
    },
    {
      key: 5,
      name: 'SA-5',
      log: 'Capacity is 25%',
      date: '24/8/23 8.00am',
    },
    {
      key: 6,
      name: 'SJ-12',
      log: 'Capacity is 25%',
      date: '24/8/23 8.00am',
    },
    {
      key: 7,
      name: 'PJ-7',
      log: 'Capacity is 100%',
      date: '24/8/23 8.00am',
    },
    {
      key: 8,
      name: 'SA-8',
      log: 'Capacity is 75%',
      date: '24/8/23 8.00am',
    },
    {
      key: 9,
      name: 'SJ-21',
      log: 'Capacity is 25%',
      date: '24/8/23 8.00am',
    },
    {
      key: 10,
      name: 'PJ-15',
      log: 'Capacity is 50%',
      date: '24/8/23 8.00am',
    }
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.statisticContainer}>
          <Text variant='titleLarge' style={styles.textTitle}>Latest Log</Text>
          <Text variant='titleLarge' style={styles.lastUpdated}>Last updated : 24 August 2023, 10.00 am</Text>
        </View>
        <DataTable style={{ padding: 10 }}>
          <DataTable.Header style={{ backgroundColor: '#F5F5F5' }}>
            <DataTable.Title>Bin Id</DataTable.Title>
            <DataTable.Title>Log</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.key}.{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.log}</DataTable.Cell>
              <DataTable.Cell>{item.date}</DataTable.Cell>
            </DataTable.Row>
          ))}

        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Log;

const styles = StyleSheet.create({

  lastUpdated: {
    fontSize: 12,
    marginLeft:10
  },

  textTitle: {
    fontSize: 25,
    padding: 8,
    textAlign: 'left',
    marginTop: 10,

  },
  container: {
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
