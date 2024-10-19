import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleSendMoney = () => {
    navigate("/send");
  };
  return (
    <div className="bg-gradient-to-r border rounded-xl shadow-xl from-slate-400 to-gray-600 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to{" "}
          <span className="text-yellow-300">
            <TypeAnimation
              sequence={["VaultX", 2000, "Security", 2000, "Innovation", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Secure your digital assets with cutting-edge blockchain technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleSendMoney}
              className="bg-white text-purple-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:text-purple-700 transition duration-300 flex items-center justify-center"
            >
              Send Money
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={handleSignup}
              className="bg-white text-purple-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:text-purple-700 transition duration-300 flex items-center justify-center"
            >
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-purple-600 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-lg font-semibold mb-2">What is VaultX?</h3>
        <p className="mb-4">VaultX is a cutting-edge finicial .</p>
        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Military-grade encryption for all transactions</li>
          <li>Multi-signature wallet support</li>
          <li>Seamless integration with major exchanges</li>
        </ul>
        <p className="mb-4">
          Whether you're a seasoned investor or just starting out, VaultX
          provides the tools and security you need to navigate the world of
          digital assets with confidence.
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
          Got it!
        </button>
      </Modal>
    </div>
  );
};

export default HeroSection;
