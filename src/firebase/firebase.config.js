// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnG5VCcJ5EywieK2VkER0qkqikQLIW6g",
  authDomain: "bookshelf-e4b68.firebaseapp.com",
  projectId: "bookshelf-e4b68",
  storageBucket: "bookshelf-e4b68.appspot.com",
  messagingSenderId: "762637815402",
  appId: "1:762637815402:web:9ac145715cdbff598c8413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export default auth; 