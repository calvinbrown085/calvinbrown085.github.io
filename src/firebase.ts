import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-IvLmJRR56ymxnf2-KfVC3IVtF9BbpcU",
  authDomain: "calvinbrowngithub-site.firebaseapp.com",
  projectId: "calvinbrowngithub-site",
  storageBucket: "calvinbrowngithub-site.firebasestorage.app",
  messagingSenderId: "334598369108",
  appId: "1:334598369108:web:0866011b106087e21b62c1",
  measurementId: "G-L0GS4TQS0N"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
