// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
    "en-US":{
        scanQrCode:"Scan QR Code",
        placeQrToFrame:"Place QR Code inside the frame to scan",
        avoidShake:"Please avoid shake to get result quickly",
    },
    en:{
        scanQrCode:"Scan QR Code",
        placeQrToFrame:"Place QR Code inside the frame to scan.",
        avoidShake:"Please avoid shake to get result quickly",
    },
    tr: {
        scanQrCode:"QR Kodu Okut",
        placeQrToFrame:"QR Kodunu okutmak için kodu kameraya tutunuz",
        avoidShake:"Daha hızlı sonuç almak için telefonu sabit tutunuz",
    }
});

export default strings;
