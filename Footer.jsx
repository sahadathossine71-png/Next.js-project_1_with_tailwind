// components/Footer.js - Footer component using Tailwind CSS
export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-5 font-sans md:py-20 md:px-5">
      <div className="footer-container max-w-6xl mx-auto">
        <div className="footer-cta text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Ready to supercharge your workflow?</h2>
          <p className="text-gray-400 text-lg md:text-xl">Boost your productivity today with our cutting-edge AI-powered tools.</p>
          <a
            href="#"
            className="cta-button inline-block bg-blue-500 text-white py-3 px-9 rounded-lg font-semibold mt-6 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
          >
            Start Free Trial
          </a>
        </div>

        <hr className="footer-divider border-0 border-t border-gray-800" />

        <div className="footer-content flex justify-between flex-wrap gap-10 py-12 md:flex-nowrap md:text-left">
          <div className="footer-brand flex-1 min-w-[250px] text-center md:text-left">
            <h2 className="logo text-2xl font-extrabold mb-5 md:text-3xl">
              AI<span className="text-blue-500">Tools</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">Empowering your daily tasks with precision and speed through advanced AI solutions.</p>
          </div>

          <div className="footer-links flex-1 min-w-[150px] text-center md:text-left">
            <h3 className="text-sm uppercase tracking-wide mb-6 text-blue-500 font-semibold">Product</h3>
            <ul className="list-none p-0">
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">AI Writer</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Image Generator</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Task Automator</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Browser Extension</a></li>
            </ul>
          </div>

          <div className="footer-links flex-1 min-w-[150px] text-center md:text-left">
            <h3 className="text-sm uppercase tracking-wide mb-6 text-blue-500 font-semibold">Company</h3>
            <ul className="list-none p-0">
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">About Us</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Blog</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Careers</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Affiliate</a></li>
            </ul>
          </div>

          <div className="footer-links flex-1 min-w-[150px] text-center md:text-left">
            <h3 className="text-sm uppercase tracking-wide mb-6 text-blue-500 font-semibold">Support</h3>
            <ul className="list-none p-0">
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Help Center</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">API Documentation</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Community</a></li>
              <li className="mb-3"><a href="#" className="text-gray-400 text-base transition-colors duration-200 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider border-0 border-t border-gray-800" />

        <div className="footer-bottom flex justify-between items-center pt-8 text-sm text-gray-600 flex-col gap-5 md:flex-row md:gap-0">
          <p>&copy; 2025 AITools Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="text-gray-600 hover:text-white ml-5 md:ml-5">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white ml-5 md:ml-5">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-white ml-5 md:ml-5">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
