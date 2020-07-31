import React, {useState} from 'react';
import QR from './qr';

const Realm = require('realm');


class RealmService {
    repository;

    databaseOptions = {
        path: 'realmT4.realm',
        schema: [QR.schema],
        schemaVersion: 1,
    };

    initDB() {
        return new Promise((resolve, reject) => {
            Realm.open(this.databaseOptions)
                .then((realm) => {
                    this.repository = realm;
                    resolve();
                })
                .catch((err) => {
                    console.log('REALM ERROR', err);
                    reject();
                });
        });
    }

    getAllPastScans() {
        return this.repository.objects(QR.schema.name);
    }

}

export var realmService = new RealmService();

export var POBJ_Schema = {
    qr: QR.schema,
};

