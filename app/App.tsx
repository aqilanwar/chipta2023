import * as React from 'react';
import {AppRegistry, SafeAreaView, ScrollView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import DashboardScreen from './components/Dashboard';
import LogScreen from './components/Log';
import RouteScreen from './components/Route';
import ViewBin from './components/ViewBin';
import RegisterBin from './components/RegisterBin';
import ViewRoute from './components/ViewRoute';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Log" component={LogScreen} />
          <Stack.Screen name="Route" component={RouteScreen} />
          <Stack.Screen name="View Bin" component={ViewBin} />
          <Stack.Screen name="Register Bin" component={RegisterBin} />
          <Stack.Screen name="View Route" component={ViewRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
