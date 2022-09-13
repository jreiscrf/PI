import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkto9OAwqM_zVs0GIbo8zVtCT5Q27BBzE",
  authDomain: "aumigos-e372a.firebaseapp.com",
  projectId: "aumigos-e372a",
  storageBucket: "aumigos-e372a.appspot.com",
  messagingSenderId: "547342819627",
  appId: "1:547342819627:web:26eddf51dd28df2aef656e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
