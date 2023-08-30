import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DataTable, Button } from 'react-native-paper'


type ViewRouteProps = NativeStackScreenProps<RootStackParamList, 'View Route'>;

const ViewRoute = ({ route }: ViewRouteProps) => {
    const item = route.params;
    const destination = item.route.route;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.statisticContainer}>
                    <Text variant='titleLarge' style={styles.textTitle}>Route</Text>
                    <Text variant='titleLarge' style={styles.lastUpdated}>Best Route for {item.route.truckName}</Text>

                </View>

                <DataTable style={{ padding: 10 }}>
                    <DataTable.Header style={{ backgroundColor: '#F5F5F5' }}>
                        <DataTable.Title><Text style={{ fontWeight: 'bold' }}>Address</Text></DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'flex-end' }}><Text style={{ fontWeight: 'bold' }}>ETA</Text></DataTable.Title>
                    </DataTable.Header>
                    {destination.map((route) =>
                        <DataTable.Row>
                            <DataTable.Cell>{route.id}. {route.address}</DataTable.Cell>
                            <DataTable.Cell style={{ justifyContent: 'flex-end' }}>{route.eta}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                </DataTable>
            </ScrollView>
        </SafeAreaView>
    );
};
export default ViewRoute

const styles = StyleSheet.create({
    lastUpdated: {
        fontSize: 12,
        marginLeft: 10
    },

    btnDisplay: {
        backgroundColor: '#0EA976',
    },
    textTitle: {
        fontSize: 25,
        marginTop: 10,
        color: '#000000',
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

