import {realmService} from '../../repository/realm-service';
import PastScan from '../past-scan';
import {FlatList, View, Text} from 'react-native';
import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import strings from '../../strings';

const AllTime = forwardRef((props, ref) => {
    const [pastScans, setPastScans] = useState([]);

    useImperativeHandle(ref, () => ({
        reload() {
            loadPastScans();
        },
    }));

    useEffect(() => {
        setTimeout(() => {
            loadPastScans();
        }, 1000);
    }, []);

    function loadPastScans() {
        let pastScans = realmService.getAllPastScans();
        let pastScansArray = Array.from(pastScans);
        setPastScans(pastScansArray);
    }

    const renderItem = ({item}) => (
        <PastScan item={item}/>
    );

    return <View style={{flex: 1}}>
        {pastScans.length > 0 ?
            <FlatList data={pastScans}
                      style={{flex: 1}}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}/> :
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center'}}>{strings.noSavedScan}</Text>
            </View>}

    </View>;
});

export default AllTime;
