import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDlB5A0FPg0xyd1waAQ7yGLF-1ao8jXxgM",
    authDomain: "gallery-73bf1.firebaseapp.com",
    projectId: "gallery-73bf1",
    storageBucket: "gallery-73bf1.appspot.com",
    messagingSenderId: "155868764093",
    appId: "1:155868764093:web:cbfe17a073156a379ba4d4"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig)

const galleryStorage = firebase.default.storage()
const galleryFirestore = firebase.default.firestore()
const timestamp = firebase.default.firestore.FieldValue.serverTimestamp

export {galleryStorage, galleryFirestore, timestamp}