import React, {useState} from 'react';
import QR from './qr';
const Realm = require('realm');


class RealmService {
    repository;

    databaseOptions = {
        path: 'realmT4.realm',
        schema: [QR.schema],
        schemaVersion: 1
    };

    initDB() {
        Realm.open(this.databaseOptions)
            .then((realm) => {
                this.repository = realm;
            })
            .catch((err) => {
                console.log('REALM ERROR', err);
            });
    }

}

export var realmService = new RealmService();

export var POBJ_Schema = {
    qr: QR.schema
};

