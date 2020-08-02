import {realmService} from '../../realm-service';
import moment from 'moment';
import PastScan from '../past-scan';
import {FlatList, View} from 'react-native';
import React, {useState, useEffect} from "react";

function AllTime(props) {
    const [pastScans, setPastScans] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            let pastScans = realmService.getAllPastScans();

            for (const pastScan of pastScans) {
                pastScan.momentDate = moment(pastScan.date);
                pastScan.momentDateYYYYMMDD = moment(pastScan.date).format('YYYY-MM-DD');
            }

            let pastScansArray = Array.from(pastScans);
            console.log(pastScansArray);

            setPastScans(pastScansArray);
        }, 1000);
    });

    const renderItem = ({item}) => (
        <PastScan item={item}/>
    );

    return <View style={{flex: 1}}>
        <FlatList data={pastScans}
                  style={{flex: 1}}
                  renderItem={renderItem}
                  keyExtractor={item => item.localId}/>

    </View>;
}

export default AllTime;
