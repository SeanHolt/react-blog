import { FC } from "react";
import { auth, provider } from "../firebase";
import { redirect } from "react-router-dom";

export const Login: FC = () => {
  const signIn = (e: React.MouseEvent) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(() => {
        redirect("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <button onClick={signIn}>Sign In With Google</button>
    </>
  );
};
