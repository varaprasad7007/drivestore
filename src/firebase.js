import firebase from 'firebase';

const config={
    
    apiKey: "AIzaSyDJTHM7t3iGeyXD77GmMKNFcLdYff3hk44",
    authDomain: "fir-react-249f2.firebaseapp.com",
    databaseURL: "https://fir-react-249f2.firebaseio.com",
    projectId: "fir-react-249f2",
    storageBucket: "fir-react-249f2.appspot.com",
    messagingSenderId: "432404800208",
    appId: "1:432404800208:web:5467983e40565cafa134d5"
 
}

firebase.initializeApp(config);
export default firebase