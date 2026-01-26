import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f2f2f2] p-4 font-sans">
      <div className="bg-white p-8 rounded-[20px] flex flex-col gap-5 shadow-[0_20px_30px_rgba(0,0,0,0.1)] w-full max-w-md">
        
        <h1 className="text-[#00d5ff] text-3xl font-bold">Login</h1>
        
        {/* Animated Loading Line */}
        <div className="h-[2px] bg-black w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-blue-600 animate-linwap"></div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-[10px]">
          
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="flex justify-between items-center text-sm font-medium">Email</label>
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full p-[10px] pr-10 border-2 border-black rounded-lg outline-none hover:border-blue-200 focus:border-[#00d5ff] transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Password Input with Hide/Show */}
          <div className="flex flex-col gap-2">
            <label className="flex justify-between items-center text-sm font-medium">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-[10px] pr-10 border-2 border-black rounded-lg outline-none hover:border-blue-200 focus:border-[#00d5ff] transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-[7px] justify-center mt-2">
            <input type="checkbox" id="terms" className="cursor-pointer" required />
            <label htmlFor="terms" className="text-sm">
              I accept <a href="#" className="text-[#0066ff] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#0066ff] hover:underline">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="mt-[15px] p-[10px] bg-gray-100 border-none rounded-lg font-bold text-base cursor-pointer hover:bg-[#2beaff] transition-colors active:scale-95"
          >
            Submit
          </button>
        </form>

        {/* Footer / Signup Link */}
        <div className="flex items-center gap-[2px] mt-2">
          <div className="h-[2px] bg-black opacity-50 flex-1"></div>
          <p className="bg-white px-2 text-sm text-center">
            Don't have an account? <a href="/signup" className="text-[#15e0ff] no-underline hover:underline font-semibold">Signup</a>
          </p>
          <div className="h-[2px] bg-black opacity-50 flex-1"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes linwap {
          0% { width: 0%; background-color: black; }
          100% { width: 100%; background-color: blue; }
        }
        .animate-linwap {
          animation: linwap 5s ease-out alternate infinite;
        }
      `}</style>
    </div>
  );
}

