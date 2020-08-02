import React from 'react';
import {Linking, Text, View, StyleSheet} from 'react-native';
import Hyperlink from 'react-native-hyperlink';

function PastScan(props) {
    return <View style={styles.card}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Hyperlink onPress={(url, text) =>
            Linking.openURL(url).catch(err =>
                console.error('An error occured', url),
            )}>
            <Text style={styles.data}>{props.item.data}</Text>
        </Hyperlink>
    </View>;
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        margin: 16,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }, title: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: 'bold',
    }, data: {
        marginBottom: 4,
    },
});

export default PastScan;
