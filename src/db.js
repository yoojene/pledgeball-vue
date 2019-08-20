import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAjXxGN2ipPe7dOUBhoB-38SUpLWPncv0M",
  authDomain: "AUTH_DOMAIN_HERE",
  databaseURL: "https://pledgeball-org.firebaseio.com/",
  projectId: "pledgeball-org",
  storageBucket: "STORAGE_BUCKET_HERE",
  messagingSenderId: "MESSAGING_ID_HERE"
}
// Get a Firestore instance
export const db = firebase
  .initializeApp({
    projectId: 'pledgeball-org' })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
