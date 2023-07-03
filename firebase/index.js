// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcl7oDi9iE5rajZiQHxdGCmcAplGqjVwk",
  authDomain: "bach-hoa-vinh.firebaseapp.com",
  projectId: "bach-hoa-vinh",
  storageBucket: "bach-hoa-vinh.appspot.com",
  messagingSenderId: "570915553058",
  appId: "1:570915553058:web:5c6da181da68c9a4326f7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
exports.storage = getStorage(app);
