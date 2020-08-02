import React, {useState} from 'react';
import {View, Text, TextInput, Linking} from 'react-native';
import Modal from 'react-native-modal';
import strings from '../strings';
import Button from '../common/button';
import Hyperlink from 'react-native-hyperlink';

function OnQRScannedModal(props) {
    const [title, setTitle] = useState('');

    return <Modal
        animationType="fade"
        transparent={true}
        onBackdropPress={() => props.hideModal()}
        visible={props.isVisible}>
        <View style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
        }}>
            <TextInput
                onChangeText={(text) => setTitle(text)}
                underlineColorAndroid="#e0e0e0"
                       placeholder={strings.title}
                       placeholderTextColor="#e0e0e0"
                       autoCapitalize="none"
                       style={{marginBottom: 16}}/>
            <Hyperlink onPress={(url, text) =>
                Linking.openURL(url).catch(err =>
                    console.error('An error occured', url),
                )}>
                <Text style={{marginBottom: 16}}>{props.data}</Text>
            </Hyperlink>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button
                    onPress={() => {
                        let obj = {};
                        obj.title = title;
                        obj.data = props.data;

                        props.onSave(obj);
                    }}
                    color={'#567be2'}
                    text={strings.save}
                    icon={'save'}
                />
            </View>
        </View>
    </Modal>;
}

export default OnQRScannedModal;
