import { createContext, createResource, useContext } from "solid-js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const DbContext = createContext();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJHuyfxU_BHggJEskweu3abbIUaNJeOo",
  authDomain: "my-portfolio-34f74.firebaseapp.com",
  projectId: "my-portfolio-34f74",
  storageBucket: "my-portfolio-34f74.appspot.com",
  messagingSenderId: "873309696890",
  appId: "1:873309696890:web:a34ffb1e11eb06b94c1cc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchData(source, {value, refetching})
{
  db.collection("projects").get().then((q) => {
    return q;
  });
}

export function DbProvider(props)
{
  const dbRef = db;

  return ( <DbContext.Provider value={dbRef}>
    {props.children}
    </DbContext.Provider>
  )
};

export default function useDbContext()
{
  return useContext(DbProvider);
}