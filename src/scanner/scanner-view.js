import React, {useState, useRef, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import strings from '../strings';
import OnQRScannedModal from './on-qr-scanned-modal';
import Button from '../common/button';
import {realmService} from '../repository/realm-service';

function ScannerView(props) {
    const [showFlash, setShowFlash] = useState(false);
    const [showOnQRScannedModal, setShowOnQRScannedModal] = useState(false);
    const [scannedObject, setScannedObject] = useState(null);

    const scanner = useRef(null);

    useEffect(
        () =>
            props.navigation.addListener('beforeRemove', (e) => {
                props.route.params.reload();
            }),
        [props.navigation]
    );

    function onSuccess(e) {
        setScannedObject(e);
        setShowOnQRScannedModal(true);
    };

    function onSave(obj) {
        realmService.saveScan(obj)
            .then(() => {
                setShowOnQRScannedModal(false);
                scanner.current && scanner.current.reactivate();
            });
    }

    return (
        <View style={{flex: 1}}>
            <QRCodeScanner
                ref={scanner}
                onRead={(e) => onSuccess(e)}
                showMarker={true}
                reactivate={false}
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
                    <Button
                        onPress={() => setShowFlash(!showFlash)}
                        color={'#567be2'}
                        text={showFlash ? strings.flashOn : strings.flashOff}
                        icon={showFlash ? 'zap' : 'zap-off'}
                    />
                }
            />
            <OnQRScannedModal
                hideModal={() => {
                    setShowOnQRScannedModal(false);
                    scanner.current && scanner.current.reactivate();
                }}
                onSave={(obj) => onSave(obj)}
                isVisible={showOnQRScannedModal}
                data={scannedObject && scannedObject.data}
            />
        </View>
    );
}

export default ScannerView;

const styles = StyleSheet.create({});
