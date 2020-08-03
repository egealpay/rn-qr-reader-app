import {realmService} from '../../repository/realm-service';
import moment from 'moment';
import PastScan from '../past-scan';
import {FlatList, Text, View} from 'react-native';
import React, {useState, useEffect, useImperativeHandle, forwardRef} from 'react';
import strings from '../../strings';

const Last10Days = forwardRef((props, ref) => {
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
        let pastScansArray = [];

        for (const pastScan of pastScans) {
            pastScan.momentDate = moment(pastScan.date);
            pastScan.momentDateYYYYMMDD = moment(pastScan.date).format('YYYY-MM-DD');

            pastScansArray.push(pastScan);
        }

        let today = moment();
        let tenDaysAgo = today.subtract(10, 'days').format('YYYY-MM-DD');

        let pastTenDaysScansArray = pastScansArray.filter((pastScan) => pastScan.momentDateYYYYMMDD >= tenDaysAgo);

        setPastScans(pastTenDaysScansArray);
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

export default Last10Days;
