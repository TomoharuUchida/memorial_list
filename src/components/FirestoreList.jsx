import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore,collection, query, onSnapshot, addDoc,where,serverTimestamp } from "firebase/firestore";
import { auth } from "../firebase";

const FirestoreList=()=> {
  const [records, setRecords] = useState([]);
  // const user = "";

  useEffect(() => {
    // const auth = getAuth()
  
    // login状態が変更されたら
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore()
        // loginしてたら
        // let records = []
        const q = query(collection(db, 'records'), where('uid', '==', `${user.uid}`))
        const unsub = onSnapshot(q, (querySnapshot) => {
          setRecords(
            querySnapshot.docs.map((doc) => ({
              title: doc.data().title,
              date: doc.data().date,
            }))
          );
        });
        return () => unsub();
      } else {
        setRecords([]);
      }
        // const q = query(collection(db, 'records'), where('uid', '==', `${user.uid}`))
        // onSnapshot(q, (snapshot) => {
        //   snapshot.docChanges().forEach((change) => {
        //     if (change.type === 'added') {
        //       console.log('added: ', change.doc.data())
        //       records.push({
        //         // id: change.doc.id,
        //         title: change.doc.data().title,
        //         date: change.doc.data().date,
        //         created_at: change.doc.data().created_at,
        //         updated_at: change.doc.data().updated_at
        //       })
        //       console.log(records)
        //     }
        //   })
        //   setRecords(records)
        // })
      // }
    })
  }, []);

  return (
    <div>
      {records.map((val,i) => (
        <div key={i}>{val.title}{val.date}</div>
      ))}
    </div>
  );
}
  
export default FirestoreList;
