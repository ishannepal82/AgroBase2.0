import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-text transition-colors duration-300 p-6 overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-medium" />

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* Visual Content */}
        <div className="relative inline-block mb-12 animate-float-medium">
          {/* Big "404" with a leaf/organic feel */}
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none text-secondary/30 select-none">
            404
          </h1>
          
          {/* Floating Image in center of 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64">
            <div className="relative w-full h-full rounded-full border-8 border-background overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" 
                alt="Lost in a field" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small floating plant badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-2xl shadow-lg animate-float-fast">
               <span className="text-2xl">🌵</span>
            </div>
          </div>
        </div>

        {/* Textual Content */}
        <div className="space-y-6 animate-fade-up delay-200">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            You've Wandered <span className="text-primary">Off the Map</span>
          </h2>
          <p className="text-text/60 text-lg max-w-md mx-auto">
            The garden path you're looking for doesn't exist or has been relocated to another plot. Let's get you back to the main field.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-accent transition-all duration-300 hover:-translate-y-1"
            >
              Back to Home
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="px-8 py-4 rounded-xl border-2 border-text/10 hover:border-primary hover:text-primary transition-all duration-300 font-bold"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Helpful Links (Optional) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up delay-300 opacity-60">
            <div className="p-4 rounded-xl border border-text/5 hover:bg-white dark:hover:bg-white/5 transition-colors cursor-pointer">
                <p className="font-bold text-sm">Search Plants</p>
            </div>
            <div className="p-4 rounded-xl border border-text/5 hover:bg-white dark:hover:bg-white/5 transition-colors cursor-pointer">
                <p className="font-bold text-sm">Gardening Tips</p>
            </div>
            <div className="p-4 rounded-xl border border-text/5 hover:bg-white dark:hover:bg-white/5 transition-colors cursor-pointer">
                <p className="font-bold text-sm">Contact Support</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;