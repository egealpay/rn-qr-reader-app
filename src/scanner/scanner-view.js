import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import strings from '../strings';

function ScannerView(props) {
    const [showFlash, setShowFlash] = useState(false);

    function onSuccess (e) {
        console.log(e);

        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    return (
        <QRCodeScanner
            onRead={(e) => onSuccess(e)}
            showMarker={true}
            reactivate={true}
            reactivateTimeout={3000}
            flashMode={showFlash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            topContent={
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>
                        {strings.scanQrCode}
                    </Text>
                    <Text>
                        {strings.placeQrToFrame}
                    </Text>
                    <Text>
                        {strings.avoidShake}
                    </Text>
                </View>
            }
            cameraProps={{
                notAuthorizedView: <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text>{strings.cameraPermissionIsRequired}</Text>
                </View>,
                ratio: '1:1',
                overflow: 'hidden',
            }}
            permissionDialogTitle={strings.warning}
            permissionDialogMessage={strings.cameraPermissionIsRequired}
        />
    );
}

export default ScannerView;

const styles = StyleSheet.create({
});
