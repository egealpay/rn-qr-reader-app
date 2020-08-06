import React, {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import strings from '../strings';
import {TabView, TabBar} from 'react-native-tab-view';
import {InterstitialAd, TestIds} from '@react-native-firebase/admob';
import Last10Days from './tabs/tab-last-10-days';
import AllTime from './tabs/tab-all-time';

//const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3656039189200211/4356382170';
//const interstitial = InterstitialAd.createForAdRequest(adUnitId);

const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'#000'}
        inactiveColor={'#bababa'}
        indicatorStyle={{backgroundColor: '#567be2'}}
        style={{backgroundColor: 'transparent'}}
    />
);

function PastScansView(props) {
    const [isAdWatched, setIsAdWatched] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        {key: 'first', title: strings.last10Days},
        {key: 'second', title: strings.allTime},
    ]);

    const last10DaysRef = useRef(null);
    const allTimeRef = useRef(null);

    /*useEffect(() => {
        const eventListener = interstitial.onAdEvent(type => {});

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return () => {
            eventListener();
        };
    }, []);*/

    function reload() {
        allTimeRef.current && allTimeRef.current.reload();
        last10DaysRef.current && last10DaysRef.current.reload();
    }


    function renderNewScanButton() {
        return <TouchableOpacity
            onPress={() => props.navigation.navigate('Scanner', {reload: () => reload()})}
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
                shadowColor: '#000',
                shadowOffset: {
                    width: 1,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
            <Feather name={'camera'} color={'#fff'} size={24}/>
        </TouchableOpacity>;
    }

    function renderPageInformation() {
        return <View style={{padding: 16}}>
            <Text style={{textAlign: 'center', fontSize: 16, marginTop: 32}}>
                {strings.pastScans1}
            </Text>
            {/*<Text style={{textAlign: 'center', fontSize: 16, marginVertical: 8}}>
                {strings.pastScans2}
            </Text>*/}
        </View>;
    }

    function renderTabs() {
        return <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={({route}) => {
                switch (route.key) {
                    case 'first':
                        return <Last10Days ref={last10DaysRef}/>;
                    case 'second':
                        return <AllTime ref={allTimeRef}/>;
                    default:
                        return null;
                }
            }}
            onIndexChange={(_index) => {
                if (_index === 1 && !isAdWatched) {
                    // Show ad
                    //interstitial.show();
                    setIsAdWatched(true);
                }

                setIndex(_index);
            }}
        />;
    }

    return <View style={{flex: 1}}>
        {renderPageInformation()}
        {renderTabs()}
        {renderNewScanButton()}
    </View>;
}

export default PastScansView;
