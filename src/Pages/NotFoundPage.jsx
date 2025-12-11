
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext';

export default function NotFoundPage() {
 const {islogin}= useContext(authContext)
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center mb-16 p-6">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-600 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-600 blur-3xl" />
        </div>
        {/* Glitch text container */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* 404 with glitch effect */}
          <div className="relative mb-12">
            <h1 className="text-[120px] md:text-[180px] font-bold text-white tracking-tighter">
              <span className="relative">
                <span className="absolute inset-0 text-purple-400 opacity-70 animate-glitch-1">404</span>
                <span className="absolute inset-0 text-cyan-400 opacity-70 animate-glitch-2">404</span>
                <span className="relative">404</span>
              </span>
            </h1>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          {/* Description */}
          <p className="text-gray-400 text-lg mb-10">
            Oops! The page you're looking for has vanished into the digital void.
          </p>
          {/* Animated button */}
          <button onClick={() => islogin? navigate("/"): navigate("/login") } className=" relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-lg overflow-hidden group">
            <span className="relative z-10">Return to Safety</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
        {/* Floating elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-float delay-100" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-float delay-300" />
          <div className="w-4 h-4 bg-white rounded-full animate-float delay-500" />
        </div>
        <style dangerouslySetInnerHTML={{ __html: "\n          @keyframes float {\n            0 %, 100 % { transform: translateY(0); }\n      50% {transform: translateY(-15px); }\n    }\n          @keyframes glitch-1 {\n            0 % { transform: translate(0); }\n      20% {transform: translate(-5px, 5px); }\n          40% {transform: translate(-5px, -5px); }\n          60% {transform: translate(5px, 5px); }\n          80% {transform: translate(5px, -5px); }\n          100% {transform: translate(0); }\n    }\n          @keyframes glitch-2 {\n            0 % { transform: translate(0); }\n      25% {transform: translate(5px, -5px); }\n          50% {transform: translate(-5px, 5px); }\n          75% {transform: translate(5px, 5px); }\n          100% {transform: translate(0); }\n    }\n          .animate-float {\n            animation: float 3s ease-in-out infinite;\n    }\n          .animate-glitch-1 {\n            animation: glitch-1 2.5s infinite;\n    }\n          .animate-glitch-2 {\n            animation: glitch-2 3s infinite;\n    }\n        " }} />
      </section>
    </div>

  )
}
