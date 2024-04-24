import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBXNb7NCOa5ygV_KR62-6d9R9WmE98zU7w",
  authDomain: "movie-24261.firebaseapp.com",
  projectId: "movie-24261",
  storageBucket: "movie-24261.appspot.com",
  messagingSenderId: "736833278218",
  appId: "1:736833278218:web:fbbedfd4ade7af3ddd2af3",
  measurementId: "G-F7WJF8K2DP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
