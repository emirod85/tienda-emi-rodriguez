import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4Df4i2I8U735OSlxjBawMlK4pqvIGk2k",
  authDomain: "ecommerce-remi.firebaseapp.com",
  projectId: "ecommerce-remi",
  storageBucket: "ecommerce-remi.appspot.com",
  messagingSenderId: "594946066785",
  appId: "1:594946066785:web:27c31128c70ba974701d20",
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
