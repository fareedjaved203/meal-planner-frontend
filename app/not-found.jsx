import RootLayout from "./layout";
import ErrorPage from "../components/ErrorPage";

function NotFoundPage() {
  return (
    <>
      <RootLayout showNavbar={false}>
        <ErrorPage />
      </RootLayout>
    </>
  );
}

export default NotFoundPage;
