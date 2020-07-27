class QR {
    data;
    date;

    constructor(data, date) {
        this.data = data;
        this.date = date;
    }
}

QR.schema = {
    name: 'qr',
    primaryKey: 'localId',
    properties: {
        localId: 'int',
        data:  'string',
        date: 'date'
    }
};

module.exports = QR;
