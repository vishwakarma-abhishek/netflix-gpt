// import USER_IOCN from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase,";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ()=>{
   
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
          if(user){
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse")
          }else{

            dispatch(removeUser())
            navigate("/")
          }
        })
      },[])


    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
            navigate("/error")
          });      
    }
    return (
        <div className="absolute py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
            <img className="h-20 mx-5"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"/>
            { user && <div className="flex items-center z-10   rounded-md mx-5">
               <img alt="user icon" className="w-14 m-2 " src={user.photoURL}></img>
               <button className="text-white font-semibold m-2 text-lg" onClick={handleSignOut}>[ Sign out ]</button>
            </div> }

        </div>
        
    );
};

export default Header;