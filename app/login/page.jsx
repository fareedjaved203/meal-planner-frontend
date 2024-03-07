import RootLayout from "../layout";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <RootLayout showNavbar={false}>
      <LoginForm />
    </RootLayout>
  );
};

export default Login;
