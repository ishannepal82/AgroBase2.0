// FullScreenLoader.tsx
import React from 'react';
import { Leaf } from 'lucide-react';
import '../index.css';

const FullScreenLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-[12px] z-[9999]">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Brand Icon */}
        <div className="bg-emerald-100 p-6 rounded-full leaf-pulse">
          <Leaf className="w-12 h-12 text-emerald-600" strokeWidth={2.5} />
        </div>

        {/* Text and Subtle Progress Bar */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-slate-900 font-black text-xl tracking-tight">
            Cultivating your feed...
          </h2>
          <div className="loading-bar-container">
            <div className="loading-bar-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;