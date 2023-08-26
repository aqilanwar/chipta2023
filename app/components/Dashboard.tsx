import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DashboardProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard = ({ navigation }: DashboardProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

export default Dashboard

const styles = StyleSheet.create({})