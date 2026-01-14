import type { FeedItem } from '../../types/feed-item.types';
import { selectedPlantAtom } from '../../atoms/plantAtoms';
import { useSetAtom } from 'jotai';
import mdConverter from '../../md-converter';
import { useState, useEffect } from 'react';

export default function PlantInfoModal({plant, aiInfo}: {plant: FeedItem, aiInfo: string}) {
    const setSelectedPlant = useSetAtom(selectedPlantAtom);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const converter = async () => {
            const sanitizedHtml = await mdConverter(aiInfo); 
            setHtmlContent(sanitizedHtml);
        }
        converter();
    }, [aiInfo]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
        <div 
        className="bg-white rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        >
        {/* Close Button */}
        <button 
            className="absolute top-6 right-6 z-10 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
            onClick={() => setSelectedPlant(null)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto">
            <img 
                src={plant.image_url} 
                alt={plant.common_name} 
                className="w-full h-full object-cover"
            />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">{plant.genus}</span>
            <h2 className="text-3xl font-black mt-2 mb-4">{plant.common_name}</h2>

            <div className="space-y-6">
                <div>
                <h4 className="font-bold text-sm text-slate-400 uppercase tracking-tighter">Primary Benefit</h4>
                <p className="text-slate-700">{plant.genus}</p>
                </div>

                <div>
                <h4 className="font-bold text-sm text-slate-400 uppercase tracking-tighter">Info about the Plant</h4>
                <div className="text-sm leading-relaxed text-slate-600 italic" 
                dangerouslySetInnerHTML={{__html: htmlContent}}/>
                </div>

                <button 
                className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 hover:scale-[1.02] transition-transform"
                >
                Add to My Collection
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
)};

