import './App.css';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs,addDoc,serverTimestamp } from 'firebase/firestore/lite';
import { auth } from "./firebase";
import{onAuthStateChanged} from "firebase/auth"

const App = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  
  const clickButton = async() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
          // const id = '003'
          // const title = 'test'
          // const date = 'test'
          // const uid = ''
          
        const db = getFirestore()
        // await
          const docRef = addDoc(collection(db, 'records'), {
            uid: uid,
            // id: id,
            title: title,
            date: date,
            created_at: serverTimestamp(),
            updated_at: serverTimestamp()
          })
        console.log('Document', docRef)
        setTitle("");
        setDate("");
      } else {
        alert("ログインしてください")
      }
    })
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="">記念日</label>
          <textarea
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          >
          </textarea>
          <input
            type="date"
            value={date}
            onChange={(e)=>{setDate(e.target.value)}}/>
        </div>
      </form>
       <div>
        <button onClick={()=>clickButton()} disabled={!title || !date}>Firestore追加</button>
      </div>
    </div>
   
  );
};


export default App;
