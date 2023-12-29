import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnLBg-cAo1MqW5zj7JpzlDY8DLH6PPloA",
  authDomain: "photo-portfolio-42170.firebaseapp.com",
  projectId: "photo-portfolio-42170",
  storageBucket: "photo-portfolio-42170.appspot.com",
  messagingSenderId: "658624718627",
  appId: "1:658624718627:web:da558a04958bc751bdce96",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
