import { SignIn } from "../../components/signIn/SignIn";

export const Login = () => {
  localStorage.removeItem("token")
  return (
    <>
      <SignIn />
    </>
  );
};
