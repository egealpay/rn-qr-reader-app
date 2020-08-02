import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import strings from '../strings';
import OnQRScannedModal from './on-qr-scanned-modal';

function ScannerView(props) {
    const [showFlash, setShowFlash] = useState(false);
    const [showOnQRScannedModal, setShowOnQRScannedModal] = useState(false);
    const [scannedObject, setScannedObject] = useState(null);

    function onSuccess(e) {
        console.log(e);

        /*Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err),
        );*/

        setScannedObject(e);
        setShowOnQRScannedModal(true);

    };

    return (
        <View style={{flex: 1}}>
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
                markerStyle={{borderRadius: 16, borderColor: '#567be2'}}
                cameraProps={{
                    notAuthorizedView: <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text>{strings.cameraPermissionIsRequired}</Text>
                    </View>,
                    ratio: '1:1',
                    overflow: 'hidden',
                }}
                permissionDialogTitle={strings.warning}
                permissionDialogMessage={strings.cameraPermissionIsRequired}
                bottomViewStyle={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
                bottomContent={
                    <TouchableOpacity
                        onPress={() => setShowFlash(!showFlash)}
                        style={{
                            backgroundColor: '#567be2',
                            flexDirection: 'row',
                            padding: 16,
                            paddingLeft: 12,
                            marginEnd: 16,
                            borderRadius: 4,
                        }}>
                        <Feather name={showFlash ? 'zap' : 'zap-off'} color={'#fff'} size={18}/>
                        <Text style={{
                            marginLeft: 8,
                            color: '#fff',
                        }}>{showFlash ? strings.flashOn : strings.flashOff}</Text>
                    </TouchableOpacity>
                }
            />
            <OnQRScannedModal isVisible={showOnQRScannedModal}/>
        </View>
    );
}

export default ScannerView;

const styles = StyleSheet.create({});
