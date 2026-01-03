import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-text transition-colors duration-300 p-4">
      {/* Main Card Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#0c0e0b] rounded-3xl overflow-hidden shadow-2xl animate-fade-up">
        
        {/* Left Side: Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome Back 🌿' : 'Join the Greenery 🍃'}
            </h2>
            <p className="text-text/60">
              {isLogin 
                ? 'Your plants missed you. Sign in to check your garden.' 
                : 'Start your journey into the world of agriculture today.'}
            </p>
          </div>

          <form className="space-gap-4 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="animate-fade-up">
                <label className="block text-sm font-medium mb-1.5 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-text/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            )}

            <div className="animate-fade-up delay-100">
              <label className="block text-sm font-medium mb-1.5 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="hello@agrobase.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-text/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="animate-fade-up delay-200">
              <label className="block text-sm font-medium mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-background border border-text/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end animate-fade-up delay-200">
                <button type="button" className="text-sm text-primary hover:underline">Forgot Password?</button>
              </div>
            )}

            <button className="w-full py-4 mt-2 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-accent transition-all duration-300 hover:-translate-y-0.5 animate-fade-up delay-300">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Divider */}
          <div className="relative my-8 animate-fade-up delay-300">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-text/10"></span></div>
          </div>

          <p className="mt-8 text-center text-sm text-text/60 animate-fade-up delay-300">
            {isLogin ? "Don't have an account?" : "Already a member?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-primary font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>

        {/* Right Side: Image/Branding */}
        <div className="hidden lg:block relative bg-secondary/20 overflow-hidden">
          {/* Decorative shapes from Hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
          
          <div className="relative h-full w-full flex flex-col items-center justify-center p-12 text-center">
            <div className="animate-float-medium mb-8">
              <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
                <img 
                  src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=1000&auto=format&fit=crop" 
                  alt="Organic Farming" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-text mb-4">Learn. Grow. Sustain.</h3>
            <p className="text-text/70 max-w-xs mx-auto italic">
              "To plant a garden is to believe in tomorrow."
            </p>
            
            {/* Logo placeholder */}
            <div className="mt-12 flex items-center gap-2 grayscale opacity-50">
               <div className="w-8 h-8 bg-primary rounded-lg" />
               <span className="font-bold tracking-tighter">AgroBase 2.0</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;