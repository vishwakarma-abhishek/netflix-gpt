import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase,";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const dispath = useDispatch();


  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    SetIsSignIn(!isSignIn);
  };



  const onButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    setErrorMsg(checkValidation(email.current.value, password.current.value));
    if (errorMsg) return;

    if (!isSignIn) {
      // sign up logic

        createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value

      ) .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://cdn-icons-png.flaticon.com/512/10753/10753869.png",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispath(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } 
    else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute top-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className="text-white">
        <form
          className="absolute bg-black p-12  w-3/12 my-64 mx-auto right-0 left-0 bg-opacity-75 rounded-lg px-14"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isSignIn ? (
            <h1 className="text-2xl font-bold p-2">Sign In</h1>
          ) : (
            <h1 className="text-2xl font-bold p-2">Sign Up</h1>
          )}
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              required
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-lg  border-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />

          <div>
            {errorMsg !== null && (
              <p className="bg-red-50 text-red-500 px-2 font-bold border-solid border-x border-red-400 py-1">
                ❌ {errorMsg}
              </p>
            )}
          </div>

          <div class="flex justify-center items-center">
            <button
              className="p-2  border-white bg-red-700 rounded-lg w-full my-6  bold w-6/12"
              onClick={onButtonClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {!isSignIn && (
            <p className="pb-14">
              {" "}
              Already have an account?{" "}
              <span
                className="font-bold cursor-pointer text-blue-300 text-lg"
                onClick={handleSignIn}
              >
                {" "}
                Sign in →
              </span>
            </p>
          )}

          {isSignIn && (
            <p className="pb-14">
              New to Netflix?{" "}
              <span
                className="font-bold cursor-pointer text-blue-300 text-lg hover:"
                onClick={handleSignIn}
              >
                {" "}
                Sign up{" "}
              </span>{" "}
              now.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
