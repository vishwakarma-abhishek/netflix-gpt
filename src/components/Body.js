import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
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

    



      return (
        <>
        <RouterProvider router={appRouter}/>
        </>
      );
}

export default Body;