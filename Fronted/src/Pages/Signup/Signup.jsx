export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDF8F2] p-4">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-1 bg-[#FBE8D3] items-center justify-center p-10">
          <img
            src='signup.png'
            alt="image"
            className="w-80 h-auto object-cover"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
          <form className="space-y-5">
            
            <div>
              <label className="block text-gray-600 mb-2">Username</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <span className="absolute left-3 top-3 text-gray-400">📱</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <span className="absolute left-3 top-3 text-gray-400">📧</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <span className="absolute left-3 top-3 text-gray-400">🔒</span>
              </div>
            </div>

            <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-500 mt-5">
            Already have an account? <a href="#" className="text-orange-500 hover:underline font-semibold">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
