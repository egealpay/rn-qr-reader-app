import React, {useState} from 'react';
import QR from './qr';

const Realm = require('realm');


class RealmService {
    repository;

    databaseOptions = {
        path: 'realmT4.realm',
        schema: [QR.schema],
        schemaVersion: 2,
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
        return this.repository.objects(QR.schema.name).sorted('localId', true);
    }

    saveScan(object) {
        return new Promise((resolve, reject) => {
            try {
                this.repository.write(() => {
                    let max = this.repository.objects(QR.schema.name).max('localId');
                    if (max) {
                        object.localId = max + 1;
                    } else {
                        object.localId = 1;
                    }
                    object.date = new Date();
                    let obj = this.repository.create(QR.schema.name, object);
                    resolve(obj);
                });
            } catch (e) {
                reject(e);
                console.log('DB Error', QR.schema.name, ' ', e);
            }
        });
    }

}

export var realmService = new RealmService();

export var POBJ_Schema = {
    qr: QR.schema,
};

