export const  SignUp_1 = () => {
    return (
      <div className="relative flex flex-col justify-center h-screen">
        <div className="lg:flex lg:gap-x-4 justify-center items-center mx-4">
          <div className="lg:max-w-xl w-full">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233__340.jpg"
              alt="sign up with image"
            />
          </div>
          <div className="w-full bg-white rounded-md lg:max-w-xl">
            <h1 className="text-2xl font-semibold text-center text-gray-700">
              Create an account
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <p className="text-xs text-gray-800 font-bold">
                Password must be at least 8 characters long
              </p>
              <div className="mt-6">
                <button className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                  Sign up
                </button>
              </div>
            </form>
  
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Already a member?{" "}
              <a href="#" className="font-medium text-gray-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  
  


  














  











