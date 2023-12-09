import { initializeApp } from 'firebase/app';
import firebaseConfig from "../../firebase.config.json" assert { type: "json" };

const app = () => initializeApp(firebaseConfig);

export default app
