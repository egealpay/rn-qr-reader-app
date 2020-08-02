import React from 'react';
import {View, Text} from 'react-native';
import Modal from "react-native-modal";

function OnQRScannedModal(props) {
    return <Modal
        animationType="slide"
        visible={props.isVisible}>
        <View style={{
            backgroundColor: 'white',
            padding: 15,
            justifyContent: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            alignItems: 'stretch'
        }}>
            <Text>abc</Text>
        </View>
    </Modal>;
}

export default OnQRScannedModal;
