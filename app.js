// ▨ Import thingies
// ▨ Submit Config to Login, etc
// ▨ Init FB app
// ▨ Init FB services
// ▨ CRUD on FB db?

// ▨ Import thingies
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, query, where, doc, getDoc
} from 'firebase/firestore'

// ▨ Submit Config to Login, etc
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBysp9DRDZzTrhSCu5YH_4HkY2QeFLjviI",
    authDomain: "mata-1bd0e.firebaseapp.com",
    projectId: "mata-1bd0e",
    storageBucket: "mata-1bd0e.appspot.com",
    messagingSenderId: "758767048869",
    appId: "1:758767048869:web:4536af28f03c2a1bda554c",
    measurementId: "G-109ZRBTJSW"
};


// ▨ Init FB app
export const app = initializeApp(firebaseConfig)
// ▨ Init FB db service
const db = getFirestore(app)

// ▨ CRUD on FB db?
// Create a Reference. FB9 applies collection to db service
async function queryCollection(){
    
}