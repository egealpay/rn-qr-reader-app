// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
    "en-US":{
        appTitle: 'QR & Barcode Scanner',
        scanQrCode:"Scan QR Code",
        placeQrToFrame:"Place QR Code inside the frame to scan",
        avoidShake:"Please avoid shake to get result quickly",
        warning: 'Warning',
        cameraPermissionIsRequired: 'Camera permission is required!',
        pastScans1: 'It will keep your last 10 days history.',
        pastScans2: 'You can access your all scanned history by watching an ad.',
        last10Days: 'Last 10 Days',
        allTime: 'All Time',
        flashOn: 'FLASH ON',
        flashOff: 'FLASH OFF',
        save: 'SAVE',
        title: 'Title',
        noSavedScan: 'You dont have any scan history'
    },
    en:{
        appTitle: 'QR & Barcode Scanner',
        scanQrCode:"Scan QR Code",
        placeQrToFrame:"Place QR Code inside the frame to scan.",
        avoidShake:"Please avoid shake to get result quickly",
        warning: 'Warning',
        cameraPermissionIsRequired: 'Camera permission is required!',
        pastScans1: 'It will keep your last 10 days history.',
        pastScans2: 'You can access your all scanned history by watching an ad.',
        last10Days: 'Last 10 Days',
        allTime: 'All Time',
        flashOn: 'FLASH ON',
        flashOff: 'FLASH OFF',
        save: 'SAVE',
        title: 'Title',
        noSavedScan: 'You dont have any scan history'
    },
    tr: {
        appTitle: 'QR & Barkod Okuyucu',
        scanQrCode:"QR Kodu Okut",
        placeQrToFrame:"QR Kodunu okutmak için kodu kameraya tutunuz",
        avoidShake:"Daha hızlı sonuç almak için telefonu sabit tutunuz",
        warning: 'Uyarı',
        cameraPermissionIsRequired: 'Kamera izni gereklidir!',
        pastScans1: 'Son 10 günde yaptığınız QR okumalarını bulabilirsiniz.',
        pastScans2: 'Tüm QR okumalarınızı görmek için 1 adet reklam izlemeniz gerekmektedir.',
        last10Days: 'Son 10 Gün',
        allTime: 'Tüm Zamanlar',
        flashOn: 'FLASH AÇIK',
        flashOff: 'FLASH KAPALI',
        save: 'KAYDET',
        title: 'Başlık',
        noSavedScan: 'Henüz hiç bir şey kaydetmediniz.'
    }
});

export default strings;
