export default function Login() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF6F3] p-4">
        <div className="flex w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden relative">
          {/* Left Side (Form) */}
          <div className="flex-1 p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Welcome Back!!</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="email@gmail.com"
                    className="w-full p-4 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="absolute left-4 top-4 text-gray-500">📧</span>
                </div>
              </div>
  
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="w-full p-4 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="absolute left-4 top-4 text-gray-500">🔒</span>
                </div>
              </div>
  
              <div className="text-right text-gray-600 text-sm">
                <a href="#" className="hover:underline">Forgot Password?</a>
              </div>
  
              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition">
                Login
              </button>
            </form>
            
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition">🔍</button>
              <button className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition">📘</button>
              <button className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition">🍏</button>
            </div>
            
            <p className="text-center text-gray-600 mt-6">
              Don’t have an account? <a href="#" className="text-orange-600 font-bold">Sign up</a>
            </p>
          </div>
  
          {/* Right Side (Illustration) */}
          <div className="hidden md:flex flex-1 bg-[#F5E8D9] items-center justify-center p-12 relative">
            {/* Background Round Image */}
            <div className="absolute w-80 h-80 bg-[#F5D7B3] rounded-full -z-10"></div>
            {/* Laptop Boy Image */}
            <img
              src="login.png" 
              alt="Laptop Boy"
              className="w-72 h-auto object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    );
  }
  