import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              ehya<span className="text-sky-500">.</span>
            </h2>
            <p className="mt-3 text-sm">
              Build a modern and creative website with crealand
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FaGoogle size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Landingpage</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Referral Program</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Illustrations</a></li>
              <li><a href="#">UI Kit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">License</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white">
            <FaHeart />
          </div>
          <p className="mt-4 text-sm text-gray-400 text-center">
            Copyright © 2021. Crafted with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
