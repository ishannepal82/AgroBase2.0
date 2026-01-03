import React from 'react'
import type { FeedItem } from '../../types/feed-item.types';

export default function PlantInfoModal({ selectedPlant, setSelectedPlant }  : { selectedPlant: FeedItem; setSelectedPlant: React.Dispatch<React.SetStateAction<null>> }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
        <div 
        className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        >
        {/* Close Button */}
        <button 
            onClick={() => setSelectedPlant(null)}
            className="absolute top-6 right-6 z-10 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto">
            <img 
                src={selectedPlant.image_url} 
                alt={selectedPlant.common_name} 
                className="w-full h-full object-cover"
            />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">{selectedPlant.genus}</span>
            <h2 className="text-3xl font-black mt-2 mb-4">{selectedPlant.common_name}</h2>

            <div className="space-y-6">
                <div>
                <h4 className="font-bold text-sm text-slate-400 uppercase tracking-tighter">Primary Benefit</h4>
                <p className="text-slate-700">{selectedPlant.genus}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Watering</p>
                    <p className="text-sm font-bold">Every 2 weeks</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Light</p>
                    <p className="text-sm font-bold">Indirect Sun</p>
                </div>
                </div>

                <div>
                <h4 className="font-bold text-sm text-slate-400 uppercase tracking-tighter">Quick Tip</h4>
                <p className="text-sm leading-relaxed text-slate-600 italic">
                    "Place this plant in your bedroom or workspace to maximize the {selectedPlant.genus.toLowerCase()} effect."
                </p>
                </div>

                <button 
                className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 hover:scale-[1.02] transition-transform"
                onClick={() => setSelectedPlant(null)}
                >
                Add to My Collection
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
)};

