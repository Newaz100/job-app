import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaThLarge } from "react-icons/fa";

export default function JobList() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#218316] text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-36 py-3 bg-gradient-to-r from-[#0c340e] to-[#061608] border-b border-[#13321A]">
        {/* Left: Logo and category */}
        <div className="flex items-center gap-6">
          <img src={logo} alt="Logo" className="w-18 h-12" />
          <button className="flex items-center gap-1 border border-[#00FF00] text-[#00FF00] text-[14px] font-medium px-3 py-[5px] rounded-full hover:bg-green-800/20">
            <FaThLarge className="text-[14px]" />
            Categories
          </button>
        </div>

        {/* Right: Freelancer | Seller | Login | Registration */}
        <div className="flex items-center gap-5">
          <select className="bg-[#1C2A1C] border border-green-700 text-[16px] text-white px-3 py-[6px] rounded-md outline-none w-60 h-10">
            <option>Freelancer</option>
            <option>Agency</option>
          </select>

          <button className="text-[#00FF00] text-[12px] font-medium hover:underline">
            BECAME A SELLER
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-white text-[12px] font-medium hover:underline"
          >
            LOGIN
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-[#00FF00] text-black text-[12px] font-medium px-5 py-[7px] rounded-full hover:bg-green-400 transition"
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
}
