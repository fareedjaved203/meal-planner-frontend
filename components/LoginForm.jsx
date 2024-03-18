import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className=" h-screen flex flex-col md:flex-row h-screen items-center justify-center">
        <div class="bg-gradient-to-r from-indigo-600 to-blue-800 w-1/2 p-4 pl-0 h-screen max-sm:hidden flex items-center justify-start">
          <Image
            src="/Vector.png"
            width={400}
            height={400}
            alt="logo icon"
            className="mr-2"
          />
        </div>

        <div className="bg-white md:w-1/2 w-full p-4 flex items-center justify-center mt-4">
          <div class="p-4 md:w-3/4 w-full">
            <div className="mb-4">
              <div className="text-2xl mb-4 flex items-center">
                <Image
                  src="/so-wallet-coin.svg"
                  width={38}
                  height={38}
                  alt="logo icon"
                  className="mr-2"
                />
                <span
                  className="font-mulish"
                  style={{
                    fontWeight: 800,
                    fontSize: "32.36px",
                    lineHeight: "35.6px",
                  }}
                >
                  Meal Planner
                </span>
              </div>
              <p
                className="font-poppins my-3 pt-4"
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "3%",
                }}
              >
                Welcome Back!!!
              </p>

              <div
                className="font-poppins"
                style={{
                  fontWeight: "600",
                  fontSize: "56px",
                  lineHeight: "84px",
                }}
              >
                Sign in
              </div>
            </div>
            <form className="flex flex-col items-start mt-8 font-poppins">
              <label
                for="email"
                className="mb-2"
                style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "16px" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded"
                style={{ backgroundColor: "rgba(76, 73, 237, 0.1)" }}
              />

              <label
                htmlFor="password"
                className="mt-4 mb-2 flex justify-between items-center w-full"
                style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "16px" }}
              >
                Password
                <a
                  href="/forgot-password"
                  className="hover:underline font-poppins"
                  style={{
                    color: "rgba(0, 0, 0, 1)",
                    opacity: "50%",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Forgot Password?
                </a>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded"
                style={{ backgroundColor: "rgba(76, 73, 237, 0.1)" }}
              />

              <div className="w-full flex justify-center items-center mt-4">
                <Link href="/">
                  <button
                    type="submit"
                    className="bg-purpleText text-white p-3 pr-4 mt-4 rounded-full relative w-36 flex justify-between items-center"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 600,
                    }}
                  >
                    <span className="pl-3">Sign In</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 absolute right-6 top-1/2 transform -translate-y-1/2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
