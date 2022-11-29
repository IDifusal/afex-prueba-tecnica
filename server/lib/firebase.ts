import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC1T37d59hUIhAhbrhyztUOSQhz-okGnNc",
    authDomain: "ong-andes-sur.firebaseapp.com",
    projectId: "ong-andes-sur",
    storageBucket: "ong-andes-sur.appspot.com",
    messagingSenderId: "319024319197",
    appId: "1:319024319197:web:3c393892bb23d9d056e934",
}
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp)
