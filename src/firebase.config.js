// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqf9f9zQGj7JgNdWFbZDYc9A9C49JWPac",
  authDomain: "simple-todo-vue-f862d.firebaseapp.com",
  projectId: "simple-todo-vue-f862d",
  storageBucket: "simple-todo-vue-f862d.appspot.com",
  messagingSenderId: "1078081525101",
  appId: "1:1078081525101:web:da56ae673ea2fa3ec73664",
  measurementId: "G-QN9YE9Z7V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app