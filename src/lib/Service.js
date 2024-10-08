import { createContext, createResource, createSignal, useContext } from "solid-js";
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore, orderBy, query } from "firebase/firestore";
import { ref, getDownloadURL, getStorage } from "firebase/storage";

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
const storage = getStorage(app);

const [posts, setPosts] = createSignal({});

export async function getAll()
{
    const docRef = collection(db, "projects");
    const q = query(docRef, orderBy("name"));
    const result = await getDocs(q);

    let arr = [];
    result.forEach(async (item) => {
      let project = item.data();
      arr.push(project);
    });
    console.log(arr);

    return arr;
}

export async function get(id)
{
  const docRef = doc(db, "projects", id);
  const result = await getDoc(docRef);
  return result.data();
}

export async function getProjectLinks(id)
{
  const docRef = doc(db, "projects", id);
  const result = await getDoc(docRef);
  return result.data().links;
}

export async function getProjectGallery(id)
{
  const docRef = doc(db, "projects", id);
  const result = await getDoc(docRef);
  return result.data().gallery;
}