class QR {
    title;
    data;
    date;

    constructor(title, data, date) {
        this.title = title;
        this.data = data;
        this.date = date;
    }
}

QR.schema = {
    name: 'qr',
    primaryKey: 'localId',
    properties: {
        localId: 'int',
        title: 'string?',
        data:  'string',
        date: 'date'
    }
};

module.exports = QR;
