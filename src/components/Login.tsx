import { FC } from "react";
import { auth, provider, useAuthState } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signIn = (e: React.MouseEvent) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      {!user ? (
        <button onClick={signIn}>Sign In With Google</button>
      ) : (
        <p>You are logged in...</p>
      )}
    </>
  );
};
