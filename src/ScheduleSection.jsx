import React from "react";
import { CheckCircle } from "lucide-react";

export default function ScheduleSection() {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20 lg:py-25">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Schedule Your Post <br /> Whenever You Want
          </h2>
          <p className="text-gray-600 mt-4">
            Publish your content automatically to ensure that your content 
            reaches the right people. Built-in features such as
          </p>

          {/* Features List */}
          <ul className="mt-6 space-y-3 text-gray-700">
            {["Best Time to Post", "Geolocation", "User Tag", "Others benefit"].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500 w-5 h-5" />
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Link */}
          <a
            href="#"
            className="inline-block mt-6 text-blue-600 font-medium hover:underline"
          >
            Learn about scheduled post →
          </a>
        </div>

        {/* Right Side - Laptop Mockup */}
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-md mx-auto">
            {/* Laptop Frame */}
            <div className="rounded-xl border shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4">
                <div className="grid grid-cols-5 gap-2 text-sm font-medium text-gray-500 mb-3">
                  <span>MO</span>
                  <span>TU</span>
                  <span>WE</span>
                  <span>TH</span>
                  <span>FR</span>
                </div>
                {/* Calendar Slots */}
                <div className="grid grid-cols-5 gap-2">
                  <div className="h-14 bg-yellow-200 rounded-md"></div>
                  <div className="h-14 bg-orange-200 rounded-md"></div>
                  <div className="h-14 bg-pink-200 rounded-md"></div>
                  <div className="h-14 bg-gray-200 rounded-md"></div>
                  <div className="h-14 bg-yellow-100 rounded-md"></div>

                  <div className="h-14 bg-blue-200 rounded-md col-span-2"></div>
                  <div className="h-14 bg-green-200 rounded-md"></div>
                  <div className="h-14 bg-orange-100 rounded-md col-span-2"></div>

                  <div className="h-14 bg-pink-300 rounded-md"></div>
                  <div className="h-14 bg-yellow-300 rounded-md col-span-2"></div>
                  <div className="h-14 border-2 border-dashed border-blue-400 rounded-md flex items-center justify-center text-blue-400 font-bold">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
