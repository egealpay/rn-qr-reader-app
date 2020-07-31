import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import strings from '../strings';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {realmService} from '../RealmService';


const Last10Days = () => (
    <View style={{flex: 1}} />
);

const AllTime = () => (
    <View style={{flex: 1}} />
);

const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'#000'}
        inactiveColor={'#bababa'}
        indicatorStyle={{ backgroundColor: '#567be2' }}
        style={{ backgroundColor: 'transparent' }}
    />
);

function PastScansView(props) {
    const [pastScans, setPastScans] = useState([]);
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'first', title: strings.last10Days },
        { key: 'second', title: strings.allTime },
    ]);

    const renderScene = SceneMap({
        first: Last10Days,
        second: AllTime,
    });

    useEffect(() => {
        setTimeout(() => {
            let allPastScans = realmService.getAllPastScans();
            debugger;
            console.log("allPastScans: ", allPastScans);
        }, 1000);
    }, []);


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
                shadowColor: "#000",
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
            <Text style={{textAlign: 'center', fontSize: 16, marginVertical: 8}}>
                {strings.pastScans2}
            </Text>
        </View>;
    }

    function renderTabs() {
        return <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    }

    return <View style={{flex: 1}}>
        {renderPageInformation()}
        {renderTabs()}
        {renderNewScanButton()}
    </View>;
}

export default PastScansView;
