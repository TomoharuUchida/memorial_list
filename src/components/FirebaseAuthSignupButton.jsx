import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";



function FirebaseAuthSignupButton() {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ユーザー登録処理
    const clickSignupButton = () => {
    try{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log('user created')
            })
            .catch((error) => {
            alert(error.message)
            console.error(error)
            })
        } catch (e) {
            console.error(e)
        }  
    }

    // ログイン処理
    const clickLoginButton = () => {
        console.log(email,password);
    try{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log('login succeed',userCredential.user)
            })
            .catch((error) => {
            alert(error.message)
            console.error(error)
            })
    } catch (e) {
            console.error(e)
        }  
    }


        return (
    <div>
        <h2>{isLogin ?"ログイン" :"ユーザー登録"}</h2>
        
        <form>
                    <div>
                        <label>メールアドレス</label>
                        <input
                        name="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div>
                        <label>パスワード</label>
                        <input
                        name="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                     <div>
                        <button
                            type="button"
                            onClick={isLogin
                                ? clickLoginButton
                                : clickSignupButton}
                    >{ isLogin ? "ログイン" :"ユーザー登録"}</button>
                    </div>
                </form>
                <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? "アカウント作成":"ログインへ戻る"}</span>
       
    </div>
   
  );
}
  
export default FirebaseAuthSignupButton;