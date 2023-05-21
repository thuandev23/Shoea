// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlBfNJq1YdGIES0G2q-57ExWwKVXcB0oY',
  authDomain: 'shoea-firebase.firebaseapp.com',
  projectId: 'shoea-firebase',
  storageBucket: 'shoea-firebase.appspot.com',
  messagingSenderId: '194959080030',
  appId: '1:194959080030:web:864f9543ceb35740d892cf',
  measurementId: 'G-WSLK0QCZXN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};
