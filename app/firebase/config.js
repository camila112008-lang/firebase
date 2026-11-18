// firebase/config.js
import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBO1J7JH2wu_irUiEbnqx6xPY1NrwU2kB8",
  authDomain: "fir-f42ea.firebaseapp.com",
  projectId: "fir-f42ea",
  storageBucket: "fir-f42ea.firebasestorage.app",
  messagingSenderId: "242657560455",
  appId: "1:242657560455:web:d72f4c449c4bab470ab522",
};

const app = initializeApp(firebaseConfig);

// En el celular la sesión se guarda con AsyncStorage para no pedir
// el login cada vez que abres la app. En el navegador basta getAuth.
export const auth = Platform.OS === 'web'
  ? getAuth(app)
  : initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

export const db = getFirestore(app);