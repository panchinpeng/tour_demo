import firebase from "firebase/app"
import "firebase/database"
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyC32ZLSruJijuhrQAUpl34l-rMKrf-xUXE",
    authDomain: "attractions-f04da.firebaseapp.com",
    databaseURL: "https://attractions-f04da.firebaseio.com",
    projectId: "attractions-f04da",
    storageBucket: "attractions-f04da.appspot.com",
    messagingSenderId: "344298957071",
    appId: "1:344298957071:web:dca24b019170d0875f767a",
    measurementId: "G-EDB2C6WZYG"
  }
  firebase.initializeApp(firebaseConfig)
}
const fdb = firebase.database()
export { fdb }
