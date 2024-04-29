// Import the functions you need from the SDKs you nee
import { getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app"
 // Initialize Firebase
const firebase = () => {
  function config(){
    const firebaseConfig = {
      apiKey: "AIzaSyBLWMykLM_BDroX0FUMRbv341lg2hNQmbA",
      authDomain: "netflix-25526.firebaseapp.com",
      projectId: "netflix-25526",
      storageBucket: "netflix-25526.appspot.com",
      messagingSenderId: "213371834464",
      appId: "1:213371834464:web:b9baf2e573e45c0748f305",
      measurementId: "G-D0SSSQ8ZT2"
    };
    initializeApp(firebaseConfig);
  }
  config();
  return (
    getAuth()
  )
}

export default firebase;
