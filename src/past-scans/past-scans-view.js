import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function PastScansView(props) {

    function renderNewScanButton() {
        return <TouchableOpacity
            onPress={() => props.navigation.navigate('Scanner')}
            style={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: '#567be2',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Feather name={'camera'} color={'#fff'} size={24}/>
        </TouchableOpacity>;
    }

    return <View style={{flex: 1}}>
        {renderNewScanButton()}
    </View>;
}

export default PastScansView;
