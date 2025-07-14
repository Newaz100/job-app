import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.mnimedu.com/api/browse/pro-jobs/")
      .then((res) => setJobs(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#0a0f0d] text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 bg-gradient-to-r from-green-600 to-black">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          <span>QUANTUMEDGE SOFTWARE</span>
        </div>
        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search for projects"
            className="px-4 py-2 rounded-md text-black"
          />
          <select className="px-4 py-2 rounded-md text-black">
            <option>Web Developer</option>
          </select>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md">
            Advanced Search
          </button>
          <button className="text-white hover:underline">BECOME SELLER</button>
          <button className="text-white hover:underline">LOGIN</button>
        </div>
      </header>

      {/* Job Results */}
      <main className="px-10 py-16 bg-white text-black">
        <h2 className="text-2xl font-semibold mb-6">{jobs.length} search result(s) found</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition"
            >
              <p className="text-sm text-gray-500 mb-2">Apr 10, 2025</p>
              <h3 className="text-lg font-semibold mb-2">
                {job.title || "Website Design and Front-End Development"}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                In this role, you will be responsible for conducting UI/UX research... 
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full">Adobe XD</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">Front End</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">Web Design</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-green-600">$200 - $400</span>
                <span className="text-gray-500 text-sm">Est. Budget</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Client: <strong>Evansana Oka</strong></span>
                <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-green-600 transition text-xs">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-black text-white px-10 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">QUANTUMEDGE SOFTWARE</h3>
            <p className="text-sm">Reach Your Requirement Goals Right on Schedule</p>
            <div className="flex gap-3 mt-4">
              <img src="/icons/facebook.svg" alt="fb" />
              <img src="/icons/twitter.svg" alt="twitter" />
              <img src="/icons/instagram.svg" alt="insta" />
              <img src="/icons/linkedin.svg" alt="linkedin" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Become Seller</li>
              <li>Partnership</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm">
              <li>Graphics & Creativity</li>
              <li>Development & IT</li>
              <li>Programming & Tech</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>Help & Support</li>
              <li>Contact Us</li>
              <li>Terms & Services</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white pt-4 text-center text-sm">
          &copy; Copyright QuantumEdge 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
