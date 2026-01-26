import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, UserCircle } from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80')" }}
    >
      <div className="bg-white p-8 rounded-[20px] flex flex-col gap-5 shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-500">
        <h1 className="text-[#00d5ff] text-3xl font-bold">Signup</h1>
        
        {/* Animated Line */}
        <div className="h-[2px] bg-black w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-600 animate-line-slide"></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="flex justify-between items-center font-medium text-gray-700">Full name</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Full name"
                className="w-full p-[10px] pr-10 border-2 border-black rounded-lg outline-none hover:border-blue-300 focus:border-[#00d5ff] transition-all"
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <UserCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="flex justify-between items-center font-medium text-gray-700">Email</label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full p-[10px] pr-10 border-2 border-black rounded-lg outline-none hover:border-blue-300 focus:border-[#00d5ff] transition-all"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Password with Hide/Show */}
          <div className="flex flex-col gap-2">
            <label className="flex justify-between items-center font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-[10px] pr-10 border-2 border-black rounded-lg outline-none hover:border-blue-300 focus:border-[#00d5ff] transition-all"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="terms" className="w-4 h-4 cursor-pointer" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="mt-4 p-3 bg-gray-100 border-none rounded-lg font-bold text-lg cursor-pointer hover:bg-[#2beaff] transition-all active:scale-95"
          >
            Submit
          </button>
        </form>

        {/* Footer Link */}
        <div className="flex items-center gap-2 justify-center mt-2">
          <div className="h-[2px] bg-black opacity-30 flex-1"></div>
          <p className="text-sm whitespace-nowrap">
            Already have an account? <a href="#" className="text-[#15e0ff] font-semibold hover:underline">Login</a>
          </p>
          <div className="h-[2px] bg-black opacity-30 flex-1"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes line-slide {
          0% { left: -100%; width: 0%; }
          50% { left: 0%; width: 100%; }
          100% { left: 100%; width: 0%; }
        }
        .animate-line-slide {
          animation: line-slide 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

