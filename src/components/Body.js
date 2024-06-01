import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase,";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Error from "./Error";

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
          path:"/",
          element:<Login/>
    
        },
        {
          path:"/browse",
          element:<Browse/>
    
        },
        {
          path:"/error",
          element:<Error/>

        },
      ]);

      const dispath = useDispatch()

    


      useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
          if(user){
            const { uid, email, displayName, photoURL } = user;
            dispath(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          }else{

            dispath(removeUser())
          }
        })
      },[])

      return (
        <>
        <RouterProvider router={appRouter}/>
        </>
      );
}

export default Body;