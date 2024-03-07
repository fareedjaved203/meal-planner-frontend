import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-800 w-1/2 p-4 pl-0 h-screen max-sm:hidden flex items-center justify-start">
        <Image
          src="/Vector.png"
          width={400}
          height={400}
          alt="logo icon"
          className="mr-2"
        />
      </div>
      {/* right section */}

      <div className="bg-white md:w-1/2 p-4 flex items-center justify-center">
        <div class="p-4 md:w-3/4">
          <div className="mb-4">
            <div className="text-2xl mb-4 flex items-center">
              <Image
                src="/so-wallet-coin.png"
                width={24}
                height={24}
                alt="logo icon"
                className="mr-2"
              />
              <span className="font-mulish font-bold">Meal Planner</span>
            </div>
            <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              Welcome Back!!!
            </p>

            <div className="text-4xl mt-4 font-bold font-sans">Sign in</div>
          </div>
          <div className="m-3 text-white">.</div>{" "}
          <form className="flex flex-col items-start mt-4">
            <label
              for="email"
              className="mb-2"
              style={{ color: "rgba(0, 0, 0, 0.7)" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded bg-indigo-600 bg-opacity-10"
            />

            <label
              htmlFor="password"
              className="mt-4 mb-2 flex justify-between items-center w-full"
              style={{ color: "rgba(0, 0, 0, 0.7)" }}
            >
              <span>Password</span>

              <a
                href="/forgot-password"
                className="hover:underline"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                Forgot Password?
              </a>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded bg-indigo-600 bg-opacity-10"
            />

            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white p-3 mt-4 rounded-full relative hover:bg-indigo-700 w-36 flex justify-center items-center"
              >
                Sign In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
