const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      {/* left section */}

      <div class="bg-gradient-to-r from-indigo-600 to-blue-900 w-1/2 p-4 h-screen max-sm:hidden"></div>
      {/* right section */}

      <div className="bg-white md:w-1/2 p-4 flex items-center justify-center">
        <div class="p-4 md:w-3/4">
          <form className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Username"
              class="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              class="w-full p-2 mt-2 border rounded"
            />
            <button
              type="submit"
              class="bg-indigo-600 text-white p-3 mt-4 rounded-full relative hover:bg-indigo-700 w-36 flex justify-center items-center"
            >
              Sign In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
