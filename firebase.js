import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOLVBP5F-Mf6F1bgLFRntPxgyq8WVl7Ts",
  authDomain: "login-paje-2ee80.firebaseapp.com",
  projectId: "login-paje-2ee80",
  storageBucket: "login-paje-2ee80.appspot.com",
  messagingSenderId: "741680912902",
  appId: "1:741680912902:web:3e453b6836856510b58187"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
